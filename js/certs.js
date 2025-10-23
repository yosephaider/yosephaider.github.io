// Certificate PDF links mapping
const certificatePDFs = {
    // AWS Training & Certifications
    'AWS Technical Essentials (Español LATAM)': 'https://drive.google.com/file/d/17ojdlvAMFQ9aBfA94Rwukbhhzfaj7dmc/view?usp=sharing',
    'Official Practice Question Set: AWS Certified Cloud Practitioner (CLF-C02 -Español LATAM)': 'https://drive.google.com/file/d/1YC7GRojkoUUhsFUzBVeOn557ssAowaYv/view?usp=sharing',
    'AWS Cloud Practitioner Essentials (Español LATAM)': 'https://drive.google.com/file/d/1u425DwejbLWMXWfbJWChBiaJiXByR14k/view?usp=sharing',
    'AWS Identity and Access Management - Basics (Español LATAM)': 'https://drive.google.com/file/d/1DRFFsetY-jZpiMoeaUp1IIzpStz4sWmU/view?usp=sharing',
    'Domain 1 Review: AWS Certified Cloud Practitioner (CLF-C02 - Español LATAM)': 'https://drive.google.com/file/d/1usAyuEnvmRsrUwzustB70f3CUxfZvgQ1/view?usp=sharing',
    'Domain 2 Review: AWS Certified Cloud Practitioner (CLF-C02 - Español LATAM)': 'https://drive.google.com/file/d/1VBa3lxg4MFcWjASjNWv_whIASaBpT3yp/view?usp=sharing',
    'Domain 3 Review: AWS Certified Cloud Practitioner (CLF-C02 - Español LATAM)': 'https://drive.google.com/file/d/12HxEhLSuGJ9E8C9HfUDgaPfAtZhonxJ_/view?usp=sharing',
    'Domain 4 Review: AWS Certified Cloud Practitioner (CLF-C02 - Español LATAM)': 'https://drive.google.com/file/d/1OvXxOR6PNZF90Q-HZNocnIAFq2W96yyP/view?usp=sharing',
    'Exam Prep Overview: AWS Certified Cloud Practitioner (CLF-C02 - Español LATAM)': 'https://drive.google.com/file/d/1oRf_yZ4kujcyPVn7uJRhiaEvgkXqAj0T/view?usp=sharing',
    'Exam Prep Plan Overview: AWS Certified Cloud Practitioner (CLF-C02 - Español LATAM)': 'https://drive.google.com/file/d/1Es58MmIhS1taC4uItsGp3Xsrx8k4Zg_l/view?usp=sharing',
    'Exam Prep Summary: AWS Certified Cloud Practitioner (CLF-C02 - Español LATAM)': 'https://drive.google.com/file/d/1vP_I606BLu1BLfRmImVI2E_p_3cUBk73/view?usp=sharing',
    'Getting Started with DevOps on AWS (Español LATAM)': 'https://drive.google.com/file/d/15ALKAw0jHWwnQAYiwtqxSaRXS5LuOdTL/view?usp=sharing',
    'AWS Cloud Quest: Cloud Practitioner': 'https://drive.google.com/file/d/1dY0FfhSG-8QJ9kHWAP-pZMP3Q9nA0wkC/view?usp=sharing',
    'Deploying Serverless Applications (Español LATAM)': 'https://drive.google.com/file/d/1aHKs-eOME1qhmAj9jRLaCAtLm1J6xNYg/view?usp=sharing',
    '.NET Workloads on Amazon ECS and AWS Fargate': 'https://drive.google.com/file/d/1MRYMaNtaoHxEAWU63dvCjt9t0u-u6NKx/view?usp=sharing',
    'Amazon ECS - Knowledge Badge Readiness Path': 'https://drive.google.com/file/d/1IuVJhuFKwyZRMJcInAbrymn6RGWYHMgI/view?usp=sharing',
    'Amazon ECS Auto Scaling and Cost Optimization': 'https://drive.google.com/file/d/1aBJMr5Ch1UvwpOHwBC9xYM9iZ-roTRFn/view?usp=sharing',
    'Amazon ECS Deployment': 'https://drive.google.com/file/d/1wl7ozHt1N9CYune6h1nvcSRN0uWsWLFs/view?usp=sharing',
    'Amazon ECS Fundamentals': 'https://drive.google.com/file/d/1SuT8lPkeD7-vj5YupIAcn6UXDxutTstB/view?usp=sharing',
    'Amazon ECS Networking': 'https://drive.google.com/file/d/1YKcjvM2sqWC4e2Gmmo7nFknWNgkus2Ja/view?usp=sharing',
    'Amazon ECS Observability': 'https://drive.google.com/file/d/1hGM77N5tHru0ExQD4fEOOzJb4IPadPcR/view?usp=sharing',
    'Amazon ECS Security': 'https://drive.google.com/file/d/1i-j9lVCnw_fg_3aKF_CBJWzrl2Tyacip/view?usp=sharing',
    'Containers Learning Series for Amazon ECS Overview': 'https://drive.google.com/file/d/1-zHxEn3EpfHQ2rR-cCx_YJuurbmmDBWh/view?usp=sharing',
    'Deploying a Workload on Amazon ECS': 'https://drive.google.com/file/d/1UBHkIkNc_sSThbCCb6npdg042bey9acH/view?usp=sharing',
    'ECS Introduction to Containers': 'https://drive.google.com/file/d/1dIS7H_pq9Z8hCNqa1_Hg1tSF7MiLCB2u/view?usp=sharing',
    'Introduction to Container Basics': 'https://drive.google.com/file/d/1YApAPj1oSiXt3DHycHxn_orlxq6nnRRw/view?usp=sharing',
    'Introduction to Kubernetes Core Concepts': 'https://drive.google.com/file/d/1oC7oDsrLTwgYxM6N07eaoFKRankHvKFy/view?usp=sharing',
    'Job Roles in the Cloud': 'https://drive.google.com/file/d/1hvs8A_ziq7EvXjccnxiMX_z8dnnUVMYJ/view?usp=sharing',
    'Why run your Kubernetes workloads on Amazon Elastic Kubernetes Service (EKS)?': 'https://drive.google.com/file/d/12rWE2QriO8YvnTMG5r6JuFpafO8ZuE1-/view?usp=sharing',
    // AWS Educate
    'AWS Emerging Talent Community Digital Badge': 'https://drive.google.com/file/d/1VfedhXauOo5Ayyv04Okjiu-88eYQ5VWK/view?usp=sharing',
    // Programming and Development
    'Python Programming Course': 'https://drive.google.com/file/d/1iOYorgZhAb2gKKrdrOwmoPZ-G20-fJm5/view?usp=sharing',
    'Introduction to PHP': 'https://drive.google.com/file/d/15rmGabCvxXyewU4jv7FDN5Wb8Cfajq8I/view?usp=sharing',
    'Introduction to C Programming': 'https://drive.google.com/file/d/1yw2DlMcZJ4Cr-qEsOJYv10l727N8vDlk/view?usp=sharing',
    'Introduction to C 2019 Programming': 'https://drive.google.com/file/d/1iWDgwxAPDp3HharMdOnYkpMHSRQxCte7/view?usp=sharing',
    'Introduction to C++ Programming': 'https://drive.google.com/file/d/1TCmyewLN5ejt9sds6dgKCNpEo88t3ANR/view?usp=sharing',
    'Java Fundamentals Diploma': 'https://drive.google.com/file/d/1BszqEWhStHhC40B0zri-gvSu5knJoVqb/view?usp=sharing',
    'Python Programming': 'https://drive.google.com/file/d/1SViDxXc3UgpLPm0PlpcCl4_gewyrqF5o/view?usp=sharing',
    'XHTML - XML - CSS': 'https://drive.google.com/file/d/1XkXv6Iucqa2Uc-5Y8UvEn_sYRdeppwnR/view?usp=sharing',
    'C++ Programming in Microcontrollers and Arduino': 'https://drive.google.com/file/d/1vjK-TDNgJn2Rmf5RSXrMXlcLUJzrZzZC/view?usp=sharing',
    // DevOps and System Administration
    'CentOS and Red Hat Linux to Certified System Administrator': 'https://drive.google.com/file/d/1GVrAmYFpxi5J5KCt6kHMvSBSVnJvP27a/view?usp=sharing',
    'Cybersecurity Awareness Training': 'https://drive.google.com/file/d/1kREOS-eUvGzy-WtetIxIUSyBvmYjVcgF/view?usp=sharing',
    'AWS Cloud Practitioner': 'https://drive.google.com/file/d/1IBzwop6xuIwthtj4ekVUYFNZ9KJPSZvj/view?usp=sharing',
    'AI-050: Developing Generative AI Solutions with Azure OpenAI Service': 'https://drive.google.com/file/d/1U3SxtObAOBWOih-9d_49S5Te6vcgqRs6/view?usp=sharing',
    'AZ-900: Microsoft Azure Fundamentals': 'https://drive.google.com/file/d/1Zfqe17GM-GMR0fmJ4kwfXVB1IQ_BNSc5/view?usp=sharing',
    'WORKSHOP: Monitoring Your Kubernetes Cluster with Datadog': 'https://drive.google.com/file/d/1S8WmEBQ4jn0jozzDZUE5blQncM-y3Rr6/view?usp=sharing',
    'Linux Unhatched': 'https://drive.google.com/file/d/115Y20qu621EpzW8EvQxc_d_aejmwT4-t/view?usp=sharing',
    'AWS SysOps Administrator': 'https://drive.google.com/file/d/1uQsDLsi0OdKlsW8qL01w122kte3qyzrl/view?usp=sharing',
    'Introduction to Amazon Elastic Compute Cloud (EC2)': 'https://drive.google.com/file/d/1oQAaO3L9Be_I4gOOPFqGYvZwdClXMM-3/view?usp=sharing',
    'Introduction to Amazon EC2 Systems Manager': 'https://drive.google.com/file/d/1nQ0wsLqdspmOdkuMVUQrZMBkAqUIHrIB/view?usp=sharing',
    // Data Analysis and Statistics
    'Introduction to R Course': 'https://drive.google.com/file/d/1xzaDcNZYgERPW8fngKaPr-0ktpbpyaUW/view?usp=sharing',
    'Intermediate R Course': 'https://drive.google.com/file/d/1jSRplNzpii1XcNQEGGWSw3cewiI20w4f/view?usp=sharing',
    'Writing Functions in R Course': 'https://drive.google.com/file/d/1vUaRkcAIMWV70mudoYY7VQnxCVOggNx3/view?usp=sharing',
    'Reporting with R Markdown Course': 'https://drive.google.com/file/d/1Phkd_LHAve88XrCxDxe5qAmBns6R4gMC/view?usp=sharing',
    // Web Development and Digital Marketing
    'Web Assistant': 'https://drive.google.com/file/d/1-qR6M74LRdFzWa_hZNe1BBYr4yqkzj8C/view?usp=sharing',
    'Introduction to Web Development I': 'https://drive.google.com/file/d/1XgKOw3sRPb0CKjB2-i6GYao6IIpPYDUz/view?usp=sharing',
    'Introduction to Web Development II': 'https://drive.google.com/file/d/1BvatQuwR_D0HYSfRaSPJwXqTGT3mZNSR/view?usp=sharing',
    'Digital Marketing Fundamentals Course': 'https://drive.google.com/file/d/1G9KPMsAvkmUftRLzYKpi7JLVV0PTBhz9/view?usp=sharing',
    'Frontend Roadmap': 'https://drive.google.com/file/d/1MggVenWJDISLi1t1SzXBRKT0NZYjIhm3/view?usp=sharing',
    // Agile and Project Management
    'Scrum Fundamentals Certified': 'https://drive.google.com/file/d/16T6nB6rjPnGgSVinPE-savuRAZo6kfa3/view?usp=sharing',
    // Entrepreneurship and Business
    'Lean Startup: Develop Your Business Model': 'https://drive.google.com/file/d/16chhTaAmk3eiSdPASKkEQua6Q6LHjcVj/view?usp=sharing',
    'Strategic Sectors in Digital Key': 'https://drive.google.com/file/d/1vsfg_Ai6WZ3CiFQT-VmX-zXs2UE1bcZ2/view?usp=sharing',
    'E-Commerce for Entrepreneurs': 'https://drive.google.com/file/d/1ZXExv9G8215KkB82y1unFp2vkMbD0BkC/view?usp=sharing',
    'Entrepreneurship in Silicon Valley': 'https://drive.google.com/file/d/1pqIlFfrooVPsGUfrophgnJt6CH8lzDPZ/view?usp=sharing',
    'Basic Personal Finance Course: Finance for Mortals': 'https://drive.google.com/file/d/1_wYxdrLeUzb5Y9bO3CEctrQXGBMtr6Bg/view?usp=sharing',
    'Business Training Certificate - BOD Entrepreneurs Center': 'https://drive.google.com/file/d/1d0G9j3LLFkTg1-yms00Fisi5MySMnXOe/view?usp=sharing',
    'How to Program for Entrepreneurs - HTML and CSS': 'https://drive.google.com/file/d/1GCxCq0P8tS7OV0_rJxwd7vPnt_ai7iQ4/view?usp=sharing',
    'Resources and Tools for Entrepreneurship': 'https://drive.google.com/file/d/1JjALYNzDUa5ehGiYNFUjq9e2JZJNFsrn/view?usp=sharing',
    'Legislation for Entrepreneurs': 'https://drive.google.com/file/d/1oOFngW7wFx9IggYZ-BCCg95G1Uqt6K4-/view?usp=sharing',
    'Dare to Act': 'https://drive.google.com/file/d/13u1rdV-pRPG2iZaGHVgsq0CqhHCN9kWf/view?usp=sharing',
    'Idea Generation': 'https://drive.google.com/file/d/18tb8m7oeN6jQ9rfWkOpFPzHAlzx1N8kY/view?usp=sharing',
    'YUZZ, Your Springboard to Entrepreneurship': 'https://drive.google.com/file/d/1uSIs4kSE-OE608qmmBh5ar6F-nqPeMQE/view?usp=sharing',
    'Being an Entrepreneur': 'https://drive.google.com/file/d/1IoPbr3d-atz-b1ehIe97C00Gwox88_cm/view?usp=sharing',
    'Entrepreneurship in Cultural and Creative Industries': 'https://drive.google.com/file/d/1nlMnpCJ9oHWRezkN3aSdsCESvSr82HrR/view?usp=sharing',
    'Activate Entrepreneurship Path': 'https://drive.google.com/file/d/1OR-WyS67Lovd2aVrTYqTcGyH9EXT6NAc/view?usp=sharing',
    // Events and Specialized Conferences
    'World Plone Day Venezuela 2011': 'https://drive.google.com/file/d/1M8kLMLbmw25RAJCWhberx8CSyJBkttUd/view?usp=sharing',
    'Virtual DTIC Meeting 2012': 'https://drive.google.com/file/d/1qyyI_YTj6tS_6uyfcyC5LrAM97I4seP1/view?usp=sharing',
    'II Virtual DTIC Meeting 2013': 'https://drive.google.com/file/d/1XbsFJt8zDyPH5QQgt7PGUKvq7B4lNbB4/view?usp=sharing',
    'III Virtual DTIC Meeting 2014': 'https://drive.google.com/file/d/1zp3g5Yu5A-muUnCDG4-6AGoszsnkeZZb/view?usp=sharing',
    'JIS Go Live 2020 - XV Health Informatics Conference': 'https://drive.google.com/file/d/1FxJQbE89BSG5AcHudbnlcaZUltkgFrT_/view?usp=sharing',
    'DIDACTICBOTS Research Project Launch Conference': 'https://drive.google.com/file/d/1EjV1SbafUOl4WUxklSCfjZBN6QZs8Edw/view?usp=sharing',
    'Artificial Intelligence Workshop': 'https://drive.google.com/file/d/1cKOLq0UvYMYzRoEl1yRr8TTf1FEdrTXq/view?usp=sharing',
    'Human and Productive Skills Seminar for Business Reactivation': 'https://drive.google.com/file/d/1kJe736lmPWUpcB75eexC_WOfNTlpV7y2/view?usp=sharing',
    'II Latin American Meeting on Free Knowledge and Licensing': 'https://drive.google.com/file/d/1N6aep_t0KBBIwJF9PiyYWn3hTxb7lmlG/view?usp=sharing',
    '1st National Meeting of Free Software Entrepreneurs': 'https://drive.google.com/file/d/1lcpwHctIzL7fF8DNfrDTTmHt21vlq-jP/view?usp=sharing',
    'First Free Technologies Conference': 'https://drive.google.com/file/d/1Q0kXOEt2UtEgTh1lWdGqTfh4hEpJwZGx/view?usp=sharing',
    'Recognition - "Youth and Leadership" Training Workshop': 'https://drive.google.com/file/d/1URiRH63v8PgF2qDQkMi9Srv3372_Urzy/view?usp=sharing',
    'ULA Business Fair 2007 - Mérida: Best Investment Option': 'https://drive.google.com/file/d/11CWdbZ7G2vetertR56UOAWhR5VQmXBqD/view?usp=sharing',
    'ULA Business Fair 2007 - Social Technological District PDVSA': 'https://drive.google.com/file/d/1kNQZJf4FxRIyK7tJCWGTVt3jQs9SddUB/view?usp=sharing',
    'ULA Business Fair 2007 - Realize Your Entrepreneurial Potential': 'https://drive.google.com/file/d/1dMGX1Sk5vhhP4Vm1Oz25YyJZx88_daxo/view?usp=sharing',
    'ULA Business Fair 2007 - Youth Profile in Industry - Ternium SIDOR': 'https://drive.google.com/file/d/1pnNXADb_QszQ_nUbMneXicZ3r77QN_Xu/view?usp=sharing',
    'ULA Business Fair 2007 - Venezuelan Business Fabric Reconstruction': 'https://drive.google.com/file/d/1c4HWYwSZEz3FO2JMrOTjir2Nsz2fbK5V/view?usp=sharing',
    '4th DevSecOps Fest BCP 2023': 'https://drive.google.com/file/d/1RfaomrHzcUj7Qq3lzI-Juab6Vux7Wtbh/view?usp=sharing',
    // Compliance and Risk Management
    'Workplace Harassment Prevention and Labor Coexistence Committees': 'https://drive.google.com/file/d/1rp0UvTzjnSvnMXfU6h_uL5HpnHmBI3tk/view?usp=sharing',
    '50-hour Virtual Training in OSHMS': 'https://drive.google.com/file/d/1GZDlA2ayX6phpxXQfewsfP_ydUwJYINJ/view?usp=sharing',
    'Module 1: Organization of the OSHMS': 'https://drive.google.com/file/d/1MMvhXtDl97PLf-4-STvNi400tVbdKGn1/view?usp=sharing',
    'Module 2: Planning of the OSHMS': 'https://drive.google.com/file/d/1Os1cBbZkt5Y1yqHzmw-j1D7qhMP_gsHV/view?usp=sharing',
    'Module 3: Implementation of the OSHMS': 'https://drive.google.com/file/d/16KMiDQPbOKl17pIE3i-1pnieLNurfMQ0/view?usp=sharing',
    'Module 4: Verification of the OSHMS': 'https://drive.google.com/file/d/1p51EQiR39SvZHeMuQpOYZvSLb7UFCn_2/view?usp=sharing',
    'Module 5: Improvement of the OSHMS': 'https://drive.google.com/file/d/1hgoj6lGTIfiP4J4ST80uaC-xQ5ESvLAy/view?usp=sharing',
    'SURA Policies and Guidelines': 'https://drive.google.com/file/d/1ZVhGyk68yi-ep6I-u4r-Zh3PLY_staSU/view?usp=sharing',
    'Basic Information Security Concepts': 'https://drive.google.com/file/d/1h-TBK81nIbbocEtotU-mgykuuackghVR/view?usp=sharing',
    // 'Certificate Name': 'Google Drive Link',
};

// Function to convert Google Drive share link to embed link
function getEmbedLink(shareLink) {
    if (!shareLink) return '';
    const fileIdMatch = shareLink.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
        return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
    }
    return shareLink;
}

// Filter functionality
function filterCerts(category) {
    // Update active button
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === category || 
            (btn.textContent === 'All' && category === 'all')) {
            btn.classList.add('active');
        }
    });

    // Filter sections and rows
    const sections = document.querySelectorAll('.section');
    const noResults = document.getElementById('noResults');
    let hasVisibleCerts = false;

    sections.forEach(section => {
        const sectionCategory = section.getAttribute('data-category');
        const rows = section.querySelectorAll('.cert-row');
        let hasVisibleRows = false;

        if (category === 'all') {
            section.style.display = 'block';
            rows.forEach(row => {
                if (!row.classList.contains('search-hidden')) {
                    row.classList.remove('hidden');
                    hasVisibleRows = true;
                    hasVisibleCerts = true;
                }
            });
        } else {
            if (sectionCategory === category) {
                section.style.display = 'block';
                rows.forEach(row => {
                    if (!row.classList.contains('search-hidden')) {
                        row.classList.remove('hidden');
                        hasVisibleRows = true;
                        hasVisibleCerts = true;
                    }
                });
            } else {
                section.style.display = 'none';
            }
        }

        // Hide section if no visible rows
        if (!hasVisibleRows && section.style.display !== 'none') {
            section.style.display = 'none';
        }
    });

    // Show/hide no results message
    noResults.style.display = hasVisibleCerts ? 'none' : 'block';
}

// Search functionality
function searchCerts(searchTerm) {
    const term = searchTerm.toLowerCase();
    const rows = document.querySelectorAll('.cert-row');
    const sections = document.querySelectorAll('.section');
    const noResults = document.getElementById('noResults');
    let hasResults = false;

    rows.forEach(row => {
        const name = row.querySelector('.cert-name').textContent.toLowerCase();
        const org = row.querySelector('.cert-org').textContent.toLowerCase();
        
        if (name.includes(term) || org.includes(term)) {
            row.classList.remove('search-hidden');
            if (!row.classList.contains('hidden')) {
                hasResults = true;
            }
        } else {
            row.classList.add('search-hidden');
            row.classList.add('hidden');
        }
    });

    // Update sections visibility
    sections.forEach(section => {
        const visibleRows = section.querySelectorAll('.cert-row:not(.hidden)');
        section.style.display = visibleRows.length > 0 ? 'block' : 'none';
    });

    // Show/hide no results message
    noResults.style.display = hasResults ? 'none' : 'block';

    // If search is cleared, reapply current filter
    if (term === '') {
        const activeFilter = document.querySelector('.filter-btn.active');
        const category = activeFilter.textContent.toLowerCase();
        filterCerts(category);
    }
}

// Certificate view functionality
function viewCertificate(name, org, date) {
    const modal = document.getElementById('certModal');
    const pdfContainer = document.getElementById('pdfContainer');
    const pdfDownloadLink = document.getElementById('pdfDownloadLink');
    
    // Update modal text content
    document.getElementById('modalCourse').textContent = name;
    document.getElementById('modalOrg').textContent = org;
    document.getElementById('modalDate').textContent = date;
    
    // Get PDF link for this certificate
    const pdfLink = certificatePDFs[name];
    
    if (pdfLink) {
        // Convert to embed link and set iframe source
        const embedLink = getEmbedLink(pdfLink);
        pdfContainer.innerHTML = '<iframe id="pdfViewer" src="' + embedLink + '" style="width: 100%; height: 100%; border: none;"></iframe>';
        pdfDownloadLink.href = pdfLink;
        pdfDownloadLink.style.display = 'inline';
    } else {
        // No PDF available - show placeholder message
        pdfContainer.innerHTML = 
            '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #718096;">' +
            '<p>Certificate PDF will be available soon.</p></div>';
        pdfDownloadLink.style.display = 'none';
    }
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('certModal');
    const pdfContainer = document.getElementById('pdfContainer');
    modal.style.display = 'none';
    // Clear container content to stop any loading
    pdfContainer.innerHTML = '';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('certModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Update total certificates count
window.onload = function() {
    const totalCerts = document.querySelectorAll('.cert-row').length;
    document.getElementById('totalCerts').textContent = totalCerts + '+';
}

/*** Lo del Caruosel ***/
const track = document.getElementById('carouselTrack');
const cards = Array.from(track.querySelectorAll('.cert-card'));
const itemsPerPage = 8;
let currentPage = 0;

// Crear páginas dinámicamente
const pages = [];
for (let i = 0; i < cards.length; i += itemsPerPage) {
    const page = document.createElement('div');
    page.classList.add('carousel-page');
    cards.slice(i, i + itemsPerPage).forEach(c => page.appendChild(c));
    pages.push(page);
}

// Limpiar y agregar páginas al track
track.innerHTML = '';
pages.forEach(p => track.appendChild(p));

// Crear dots dinámicamente
const dotsContainer = document.getElementById('carouselDots');
dotsContainer.innerHTML = '';
pages.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveToPage(index));
    dotsContainer.appendChild(dot);
});

const updateCarousel = () => {
    track.style.transform = `translateX(-${currentPage * 100}%)`;
    document.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentPage);
    });
    updateArrows();
};

const updateArrows = () => {
    document.querySelector('.carousel-arrow-left').disabled = currentPage === 0;
    document.querySelector('.carousel-arrow-right').disabled = currentPage === pages.length - 1;
};

const moveCarousel = (direction) => {
    currentPage += direction;
    if (currentPage < 0) currentPage = 0;
    if (currentPage >= pages.length) currentPage = pages.length - 1;
    updateCarousel();
};

const moveToPage = (index) => {
    currentPage = index;
    updateCarousel();
};

// Inicializar al cargar
updateCarousel();

