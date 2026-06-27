(function () {
  const EXTRA_LABELS = {
    none:   'Nothing extra',
    anchor: 'Anchor point',
    chair:  'Chair / Bench',
    wall:   'Wall',
    bar:    'Pull-up bar',
  };

  let activeCategory = '';
  let activeType = '';
  let activeExtra = '';
  let activeSearch = '';

  const grid       = document.getElementById('exercise-grid');
  const countEl    = document.getElementById('result-count');
  const selCat     = document.getElementById('filter-category');
  const selType    = document.getElementById('filter-type');
  const selExtra   = document.getElementById('filter-extra');
  const searchEl   = document.getElementById('search-input');
  const resetBtn   = document.getElementById('filter-reset');
  const overlay    = document.getElementById('modal-overlay');
  const modalWrap  = document.getElementById('modal-wrapper');

  selCat.addEventListener('change', () => { activeCategory = selCat.value; render(); });
  selType.addEventListener('change', () => { activeType = selType.value; render(); });
  selExtra.addEventListener('change', () => { activeExtra = selExtra.value; render(); });
  searchEl.addEventListener('input', () => { activeSearch = searchEl.value.trim().toLowerCase(); render(); });
  resetBtn.addEventListener('click', reset);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  function reset() {
    activeCategory = activeType = activeExtra = activeSearch = '';
    selCat.value = selType.value = selExtra.value = '';
    searchEl.value = '';
    render();
  }

  function filter() {
    return EXERCISES.filter(ex => {
      if (activeCategory && ex.category !== activeCategory) return false;
      if (activeType && ex.type !== activeType) return false;
      if (activeExtra && ex.extra !== activeExtra) return false;
      if (activeSearch) {
        const hay = (ex.name + ' ' + ex.description + ' ' + ex.category).toLowerCase();
        if (!hay.includes(activeSearch)) return false;
      }
      return true;
    });
  }

  function render() {
    const list = filter();
    countEl.textContent = list.length + ' exercise' + (list.length !== 1 ? 's' : '');
    if (!list.length) {
      grid.innerHTML = '<div class="no-results"><div style="font-size:40px">🔍</div><p>No exercises match your filters.</p></div>';
      return;
    }
    grid.innerHTML = list.map(ex => `
      <div class="exercise-card" data-id="${ex.id}" role="button" tabindex="0" aria-label="${ex.name}">
        <div class="card-top">
          <div class="card-meta">
            <div class="card-category">${ex.category}</div>
            <div class="card-name">${ex.name}</div>
          </div>
        </div>
        <div class="card-tags">
          <span class="tag${ex.type === 'Resistance Band' ? ' tag-band' : ''}">${ex.type}</span>
          ${ex.extra !== 'none' ? `<span class="tag">${EXTRA_LABELS[ex.extra]}</span>` : ''}
        </div>
        <div class="card-desc">${ex.description}</div>
      </div>
    `).join('');

    grid.querySelectorAll('.exercise-card').forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.id));
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(card.dataset.id); });
    });
  }

  function openModal(id) {
    const ex = EXERCISES.find(e => e.id === id);
    if (!ex) return;
    modalWrap.innerHTML = `
      <div class="modal">
        <button class="modal-close" aria-label="Close" id="modal-close-btn">✕</button>
        <div class="modal-top">
          <div class="modal-heading">
            <div class="modal-category">${ex.category}</div>
            <div class="modal-title">${ex.name}</div>
          </div>
        </div>
        <div class="modal-tags">
          <span class="tag${ex.type === 'Resistance Band' ? ' tag-band' : ''}">${ex.type}</span>
          ${ex.extra !== 'none' ? `<span class="tag">${EXTRA_LABELS[ex.extra]}</span>` : ''}
        </div>
        <p class="modal-desc">${ex.description}</p>
        <p class="modal-position">Starting position: <span>${ex.position}</span></p>
      </div>
    `;
    overlay.classList.add('open');
    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  render();
})();
