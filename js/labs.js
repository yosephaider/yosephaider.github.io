const fmtNum = n => new Intl.NumberFormat("es", { notation: "compact" }).format(n);
const fmtNumEn = n => new Intl.NumberFormat("en", { notation: "compact" }).format(n);
const RELATIVE_DIVISIONS = [
  { amount: 60, unit: "seconds" },
  { amount: 60, unit: "minutes" },
  { amount: 24, unit: "hours" },
  { amount: 7, unit: "days" },
  { amount: 4.34524, unit: "weeks" },
  { amount: 12, unit: "months" },
  { amount: Number.POSITIVE_INFINITY, unit: "years" }
];
const relativeTimeFormatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
const fmtDate = d => {
  let duration = (new Date(d).getTime() - Date.now()) / 1000;
  for (const { amount, unit } of RELATIVE_DIVISIONS) {
    if (Math.abs(duration) < amount) return relativeTimeFormatter.format(Math.round(duration), unit);
    duration /= amount;
  }
};
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

let labs = LABS, currentTech = "", query = "";

async function fetchTitle(id) {
  const videoUrl = encodeURIComponent(`https://www.youtube.com/watch?v=${id}`);
  const endpoints = [
    `https://www.youtube.com/oembed?url=${videoUrl}&format=json`,
    `https://noembed.com/embed?url=${videoUrl}`
  ];
  for (const url of endpoints) {
    try {
      const r = await fetch(url);
      if (!r.ok) continue;
      const data = await r.json();
      if (data.title) return data.title;
    } catch (e) { /* prueba el siguiente */ }
  }
  return null;
}

async function loadStats() {
  try {
    const r = await fetch("labs-stats.json", { cache: "no-store" });
    if (!r.ok) throw new Error("HTTP " + r.status);
    const stats = await r.json();
    labs.forEach(l => {
      const s = stats[l.youtube];
      if (!s) return;
      l.title = l.title || s.title;
      l.description = l.description || s.description;
      l.published = s.published;
      l.views = s.views;
      l.likes = s.likes;
      l.comments = s.comments;
      l.channel = s.channel;
    });
  } catch (e) {
    console.warn("No se pudieron cargar las estadísticas:", e);
  }
}

function renderGrid() {
  const grid = document.getElementById("grid");
  const q = query.trim().toLowerCase();
  const t = currentTech.toLowerCase();
  const items = labs.filter(l =>
    (!t || [l.category, ...(l.tags || [])].some(x => x.toLowerCase().includes(t))) &&
    (!q || [l.title, l.description, l.category, ...(l.tags || [])].join(" ").toLowerCase().includes(q))
  );

  grid.innerHTML = items.map(l => `
    <article class="card">
      <div class="thumb" data-play="${l.youtube}" role="button" tabindex="0" aria-label="Reproducir video">
        <img loading="lazy" src="https://img.youtube.com/vi/${l.youtube}/hqdefault.jpg" alt="">
      </div>
      <div class="body">
        <h3 data-yt="${l.youtube}">${esc(l.title || "Cargando título...")}</h3>
        <div class="channel-row">
          ${l.channel?.avatar
            ? `<img class="channel-avatar" loading="lazy" referrerpolicy="no-referrer" src="${l.channel.avatar}" alt="">`
            : `<span class="channel-avatar channel-avatar--fallback"><i class="fa-solid fa-user"></i></span>`}
          <div class="channel-info">
            ${l.channel?.name ? `<span class="channel-name">${esc(l.channel.name)}</span>` : ""}
            <div class="stats-plain">${[
              l.published ? fmtDate(l.published) : "",
              l.views != null ? `${fmtNumEn(l.views)} views` : "",
              l.likes != null ? `${fmtNumEn(l.likes)} likes` : ""
            ].filter(Boolean).join(" • ")}</div>
          </div>
        </div>
        <div class="links">
          ${l.repo ? `<a href="${l.repo}" target="_blank" rel="noopener">Ver código</a>` : ""}
        </div>
      </div>
    </article>`).join("");

  grid.querySelectorAll("img.channel-avatar").forEach(img => {
    img.addEventListener("error", () => {
      img.outerHTML = `<span class="channel-avatar channel-avatar--fallback"><i class="fa-solid fa-user"></i></span>`;
    }, { once: true });
  });

  // Solo consulta a YouTube los que no tienen título
  items.filter(l => !l.title).forEach(async l => {
    const title = await fetchTitle(l.youtube);
    l.title = title || "Ver video";
    document.querySelectorAll(`h3[data-yt="${l.youtube}"]`)
      .forEach(h => h.textContent = l.title);
  });
  
  if (!items.length) {
    grid.innerHTML = `<p class="empty">No se encontraron resultados para la busqueda.</p>`;
    return;
  }
}

function renderStats() {
  const withStats = labs.filter(l => l.views != null);
  const sum = k => withStats.reduce((t, l) => t + Number(l[k] || 0), 0);

  const n = withStats.length || 1;
  const views = sum("views"), likes = sum("likes"), comments = sum("comments");
  const pct = new Intl.NumberFormat("es", { maximumFractionDigits: 1 });
  const cats = new Set(labs.map(l => l.category)).size;

  const cards = [
    ["Videos", labs.length, "fa-film", `${cats} categorías`],
    ["Vistas", views, "fa-eye", `${fmtNum(Math.round(views / n))} por video`],
    ["Likes", likes, "fa-thumbs-up", `${pct.format(views ? likes / views * 100 : 0)} % de las vistas`],
    ["Comentarios", comments, "fa-comment", `${fmtNum(Math.round(comments / n))} por video`]
  ];
  document.getElementById("stat-cards").innerHTML = cards.map(([label, value, icon, foot]) => `
    <div class="stat-card">
      <div class="stat-main">
        <div class="stat-head">
          <span class="stat-label">${label}</span>
          <span class="stat-icon"><i class="fa-solid ${icon}"></i></span>
        </div>
        <span class="stat-value">${fmtNum(value)}</span>
      </div>
      <div class="stat-foot">${foot}</div>
    </div>`).join("");

  const top = [...withStats].sort((a, b) => Number(b.views) - Number(a.views)).slice(0, 5);
  document.getElementById("ranking").innerHTML = top.map((l, i) => `
    <li>
      <div class="rank-item" data-play="${l.youtube}" role="button" tabindex="0" aria-label="Reproducir video">
        <span class="rank-pos">${i + 1}</span>
        <img loading="lazy" src="https://img.youtube.com/vi/${l.youtube}/mqdefault.jpg" alt="">
        <div class="rank-info">
          <div class="rank-title">${esc(l.title || "Ver video")}</div>
          <div class="rank-cat">${esc(l.category)}</div>
        </div>
        <span class="rank-views">👁 ${fmtNum(l.views)}</span>
      </div>
    </li>`).join("");

  const COLORS = ["#2f6fed", "#f2994a", "#27ae60", "#9b51e0", "#eb5757", "#2d9cdb", "#f2c94c", "#6b7c85"];
  const pc = new Intl.NumberFormat("es", { maximumFractionDigits: 1 });
  const byCat = {};
  withStats.forEach(l => { byCat[l.category] = (byCat[l.category] || 0) + Number(l.views); });
  const rows = Object.entries(byCat).sort((a, b) => b[1] - a[1]);
  const total = rows.reduce((t, [, v]) => t + v, 0) || 1;
  const R = 70, C = 2 * Math.PI * R;
  let offset = 0;

  const arcs = rows.map(([cat, v], i) => {
    const len = v / total * C;
    const arc = `<circle cx="100" cy="100" r="${R}" fill="none" stroke="${COLORS[i % COLORS.length]}" stroke-width="28"
      stroke-dasharray="${len} ${C - len}" stroke-dashoffset="${-offset}" transform="rotate(-90 100 100)">
      <title>${esc(cat)}: ${fmtNum(v)}</title></circle>`;
    offset += len;
    return arc;
  }).join("");

  document.getElementById("bars").innerHTML = `
    <div class="donut">
      <svg viewBox="0 0 200 200" role="img" aria-label="Vistas por categoría">
        <circle cx="100" cy="100" r="${R}" fill="none" stroke="#f1f3f5" stroke-width="28"/>
        ${arcs}
      </svg>
      <div class="donut-center"><strong>${fmtNum(total)}</strong><span>vistas</span></div>
    </div>
    <ul class="legend">
      ${rows.map(([cat, v], i) => {
        const share = v / total * 100;
        return `<li>
          <span class="dot" style="background:${COLORS[i % COLORS.length]}"></span>
          <span class="legend-name">${esc(cat)}</span>
          <span class="legend-pct">${share < 0.1 ? "<0,1" : pc.format(share)} %</span>
          <span class="legend-views">${fmtNum(v)}</span>
        </li>`;
      }).join("")}
    </ul>`;
}

function showView() {
  const view = location.hash === "#stats" ? "stats" : "home";
  document.body.classList.toggle("view-stats", view === "stats");
  document.getElementById("view-home").hidden = view !== "home";
  document.getElementById("view-stats").hidden = view !== "stats";
  document.querySelectorAll(".side-item[data-view]").forEach(a =>
    a.classList.toggle("active", a.dataset.view === view));
  if (view === "stats") renderStats();
}

window.addEventListener("hashchange", showView);

const searchInput = document.getElementById("search");
const searchClear = document.getElementById("search-clear");

searchInput.addEventListener("input", e => {
  query = e.target.value;
  searchClear.hidden = query.length === 0;
  renderGrid();
});

searchClear.addEventListener("click", () => {
  searchInput.value = "";
  query = "";
  searchClear.hidden = true;
  searchInput.focus();
  renderGrid();
});

document.getElementById("menu-toggle").addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
  setTimeout(updateChipArrow, 250);
});

const chipsEl = document.getElementById("filters");
const chipPrev = document.getElementById("chip-prev");
const chipNext = document.getElementById("chip-next");
const PREV_SPACE = 40; // ancho del botón izquierdo + su margen

function updateChipArrow() {
  chipPrev.hidden = chipsEl.scrollLeft <= 4;
  chipNext.hidden = chipsEl.scrollWidth - chipsEl.clientWidth - chipsEl.scrollLeft <= 4;
}

chipNext.addEventListener("click", () => {
  const next = [...chipsEl.children].find(c => c.offsetLeft + c.offsetWidth > chipsEl.scrollLeft + chipsEl.clientWidth + 1);
  if (!next) return;
  const width = chipsEl.clientWidth - (chipPrev.hidden ? PREV_SPACE : 0);
  chipsEl.scrollTo({ left: next.offsetLeft + next.offsetWidth - width, behavior: "smooth" });
});

chipPrev.addEventListener("click", () => {
  const prev = [...chipsEl.children].reverse().find(c => c.offsetLeft < chipsEl.scrollLeft - 1);
  if (prev) chipsEl.scrollTo({ left: prev.offsetLeft, behavior: "smooth" });
});

chipsEl.addEventListener("scroll", updateChipArrow);
window.addEventListener("resize", updateChipArrow);

document.querySelectorAll(".tech-item").forEach(item => {
  item.addEventListener("click", () => {
    const tech = item.querySelector("span").textContent;
    currentTech = currentTech === tech ? "" : tech;
    document.querySelectorAll(".tech-item").forEach(i =>
      i.classList.toggle("active", i.querySelector("span").textContent === currentTech));
    renderGrid();
  });
});

const videoModal = document.getElementById("video-modal");
const videoModalIframe = document.getElementById("video-modal-iframe");
const videoModalClose = document.getElementById("video-modal-close");
const videoModalOverlay = document.getElementById("video-modal-overlay");

function openVideoModal(id) {
  videoModalIframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  videoModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeVideoModal() {
  videoModal.hidden = true;
  videoModalIframe.src = "";
  document.body.classList.remove("modal-open");
}

document.addEventListener("click", e => {
  const trigger = e.target.closest("[data-play]");
  if (trigger) openVideoModal(trigger.dataset.play);
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !videoModal.hidden) {
    closeVideoModal();
    return;
  }
  if (e.key === "Enter" || e.key === " ") {
    const trigger = e.target.closest?.("[data-play]");
    if (trigger) {
      e.preventDefault();
      openVideoModal(trigger.dataset.play);
    }
  }
});

videoModalClose.addEventListener("click", closeVideoModal);
videoModalOverlay.addEventListener("click", closeVideoModal);

updateChipArrow();
loadStats().then(() => { renderGrid(); showView(); });

