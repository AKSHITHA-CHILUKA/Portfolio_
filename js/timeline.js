/* ============================================================
   timeline.js — Separate Internship & Project timelines
   ============================================================ */

(function buildSeparateTimelines() {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const internListEl = document.getElementById('internship-list');
  const projectListEl = document.getElementById('project-list');

  function renderTimeline(listEl, items, type) {
    if (!listEl) return;

    listEl.innerHTML = items.map(item => {
      const bullets = (item.bullets || [])
        .slice(0, 3)
        .map(bullet => `<li>${bullet}</li>`)
        .join('');

      const cta = item.link
        ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="journey-link">${item.linkText || 'View ↗'}</a>`
        : '';

      const badgeClass = type === 'internship' ? 'journey-badge-internship' : 'journey-badge-project';
      const badgeLabel = type === 'internship' ? 'Internship' : 'Project';

      return `
        <article class="journey-item reveal" role="listitem" data-type="${type}">
          <div class="journey-date-wrap">
            <span class="journey-dot" aria-hidden="true"></span>
            <div class="journey-date">${item.date}</div>
          </div>
          <div class="journey-card">
            <span class="journey-badge ${badgeClass}">${badgeLabel}</span>
            <h3 class="journey-title">${item.title}</h3>
            <p class="journey-org">${item.org}</p>
            <ul class="journey-list">${bullets}</ul>
            ${cta}
          </div>
        </article>
      `;
    }).join('');

    if (typeof window.observeRevealElements === 'function') {
      window.observeRevealElements(listEl);
    }
  }

  // Render internships
  if (internListEl) {
    const internItems = (data.experience || [])
      .map(item => ({
        date: item.date || '',
        sortKey: item.sortKey || '',
        title: item.role || 'Internship',
        org: item.company || '',
        bullets: item.bullets || [],
        link: null,
      }))
      .sort((a, b) => b.sortKey.localeCompare(a.sortKey));

    renderTimeline(internListEl, internItems, 'internship');
  }

  // Render projects
  if (projectListEl) {
    const projectItems = (data.projects || [])
      .map(item => ({
        date: item.date || '',
        sortKey: item.sortKey || '',
        title: item.title || 'Project',
        org: item.org || 'Project',
        bullets: item.outcomes || [],
        link: item.link || null,
        linkText: item.linkText || null,
      }))
      .sort((a, b) => b.sortKey.localeCompare(a.sortKey));

    renderTimeline(projectListEl, projectItems, 'project');
  }
})();
