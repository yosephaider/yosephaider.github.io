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

const CATEGORY_COLORS = {
  "Kubernetes": "#1b3a5c",
  "Docker": "#c9641f",
  "CI/CD": "#1f8a79",
  "IaC": "#7a5230",
  "Monitoreo": "#53585f",
  "Redes y seguridad": "#2f6b3f",
  "Linux y servidores": "#4f6673",
  "SRE": "#7a3030"
};
const categoryColor = cat => CATEGORY_COLORS[cat] || "#9aa0a6";

function ringPoint(cx, cy, angleDeg, r) {
  const t = angleDeg * Math.PI / 180;
  return [cx + r * Math.sin(t), cy - r * Math.cos(t)];
}

function ringPath(cx, cy, a0, a1, rIn, rOut) {
  const large = a1 - a0 > 180 ? 1 : 0;
  const p = (a, r) => ringPoint(cx, cy, a, r).map(n => n.toFixed(2)).join(" ");
  return `M${p(a0, rOut)} A${rOut} ${rOut} 0 ${large} 1 ${p(a1, rOut)} L${p(a1, rIn)} A${rIn} ${rIn} 0 ${large} 0 ${p(a0, rIn)} Z`;
}

function annulusPath(cx, cy, rIn, rOut) {
  return `M${cx - rOut} ${cy} a${rOut} ${rOut} 0 1 0 ${2 * rOut} 0 a${rOut} ${rOut} 0 1 0 ${-2 * rOut} 0 Z` +
         `M${cx - rIn} ${cy} a${rIn} ${rIn} 0 1 1 ${2 * rIn} 0 a${rIn} ${rIn} 0 1 1 ${-2 * rIn} 0 Z`;
}

function renderConcentricChart(rows, total) {
  const W = 860, H = 760;
  const cx = 300, cy = 320;
  const rHole = 42, bandT = 28, gap = 1;
  // de menor a mayor para que el valor más grande quede en el anillo exterior (más prominente)
  const ascending = [...rows].sort((a, b) => a[1] - b[1]);
  const rOutAll = rHole + ascending.length * bandT;

  const guides = ascending.map((_, i) => {
    const r = rHole + (i + 1) * bandT;
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#c9ced3" stroke-width="0.8" stroke-dasharray="1 2.2"></circle>`;
  }).join("");

  const rings = ascending.map(([cat, v], i) => {
    const rIn = rHole + i * bandT + gap;
    const rOut = rIn + bandT - gap;
    const pct = v / total * 100;
    const angle = Math.max(pct * 3.6, 1.2);
    const d = ringPath(cx, cy, 0, angle, rIn, rOut);
    const dot = ringPoint(cx, cy, angle, rOut);
    return { cat, v, pct, angle, rOut, dot, d };
  });

  const arcs = rings.map(r => `<path d="${r.d}" fill="${categoryColor(r.cat)}" filter="url(#ringShadow)">
      <title>${esc(r.cat)}: ${r.pct < 0.1 ? "<0,1" : r.pct.toFixed(1)}% · ${fmtNum(r.v)} vistas</title>
    </path>`).join("");

  // Todas las categorías van al mismo lado (derecha): como ninguna barra pasa
  // de 180°, sus puntos SIEMPRE caen del lado derecho del centro.
  //
  // Varias categorías tienen un % tan chico que su ángulo real es casi 0°,
  // así que sus puntos quedan casi encimados — cualquier línea que arranque
  // ahí mismo hacia filas distintas se cruza inevitablemente por el simple
  // apiñamiento. Para evitarlo, el punto desde el que sale cada línea usa un
  // ángulo "virtual" repartido en partes iguales (no el ángulo real de la
  // porción), así los 8 puntos de salida quedan siempre separados y en el
  // mismo orden que sus filas — una línea recta entre dos secuencias
  // ordenadas de igual manera nunca se cruza con otra.
  const n = rings.length;
  const withCollar = rings.map((r, i) => {
    const virtualAngle = n > 1 ? 12 + i * (160 / (n - 1)) : 90;
    // El punto marcador también usa el ángulo virtual (sobre el propio radio
    // del anillo): si siguiera en el ángulo real, los puntos de las
    // categorías chiquitas quedarían pegados entre sí otra vez.
    const markerDot = ringPoint(cx, cy, virtualAngle, r.rOut);
    return { ...r, dot: markerDot, collar: ringPoint(cx, cy, virtualAngle, rOutAll + 16) };
  });
  const ordered = withCollar; // ya están en orden ascendente por valor/ángulo virtual

  const marginX = W - 30;
  const bendX = marginX - 170; // antes de llegar aquí la línea ya debe estar a su altura final,
                                // para no atravesar el bloque de texto de su propia fila
  const rowStep = (H - 180) / Math.max(ordered.length - 1, 1);

  const labels = ordered.map((r, i) => {
    const labelY = 90 + i * rowStep;
    const nameY = labelY - 36;
    const lineY = labelY - 14;
    const valueY = labelY + 24;
    const pts = [r.dot, r.collar, [bendX, lineY], [marginX, lineY]]
      .map(p => p.map(n => n.toFixed(1)).join(",")).join(" ");
    const leader = `<polyline points="${pts}" fill="none" stroke="#dcdfe3" stroke-width="0.9"></polyline>`;
    const dotMark = `<circle cx="${r.dot[0].toFixed(1)}" cy="${r.dot[1].toFixed(1)}" r="2.3" fill="#fff" stroke="${categoryColor(r.cat)}" stroke-width="1.2"></circle>`;
    const pctLabel = r.pct < 0.1 ? "<0,1" : r.pct.toFixed(1).replace(".", ",");
    return `${leader}${dotMark}
        <text class="ring-lbl" x="${marginX}" y="${nameY}" text-anchor="end">${esc(r.cat.toUpperCase())}</text>
        <text class="ring-val" x="${marginX}" y="${valueY}" text-anchor="end" fill="${categoryColor(r.cat)}">${pctLabel}<tspan class="ring-pct">%</tspan></text>`;
  }).join("");

  return `
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Vistas por categoría">
      <defs>
        <filter id="shGrey" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="-4" dy="7" stdDeviation="8" flood-color="#1c2b3d" flood-opacity="0.18"></feDropShadow>
        </filter>
        <filter id="ringShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="-2" dy="3" stdDeviation="4" flood-color="#14213a" flood-opacity="0.28"></feDropShadow>
        </filter>
      </defs>
      <g filter="url(#shGrey)"><path d="${annulusPath(cx, cy, rHole, rOutAll)}" fill="#eceff1" fill-rule="evenodd"></path></g>
      <g>${guides}</g>
      <g>${arcs}</g>
      <circle cx="${cx}" cy="${cy}" r="${rHole}" fill="#fff"></circle>
      <g>${labels}</g>
    </svg>`;
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

  const byCat = {};
  withStats.forEach(l => { byCat[l.category] = (byCat[l.category] || 0) + Number(l.views); });
  const rows = Object.entries(byCat).sort((a, b) => b[1] - a[1]);
  const total = rows.reduce((t, [, v]) => t + v, 0) || 1;

  document.getElementById("bars").innerHTML = `
    <div class="donut">
      ${renderConcentricChart(rows, total)}
      <div class="donut-center"><strong>${fmtNum(total)}</strong><span>vistas</span></div>
    </div>`;
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

