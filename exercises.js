/* ── State ────────────────────────────────────────────────────────── */
let activeFilters = { category: [], difficulty: [], equipment: [] };
let searchQuery = '';
let currentExercises = [];
let buildState = { step: 1, goals: [], level: '', equipment: [] };

/* ── Init ─────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  currentExercises = EXERCISES;
  renderFilters('filter-panel-desktop');
  renderFilters('filter-panel-sheet');
  renderGrid(EXERCISES);
  updateResultCount(EXERCISES.length);
  renderBuildStep(1);
  bindEvents();
});

/* ── Filter Rendering ─────────────────────────────────────────────── */
function renderFilters(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const categories = [...new Set(EXERCISES.map(e => e.category))];
  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
  const equipments = [...new Set(EXERCISES.map(e => e.equipment))];

  el.innerHTML = `
    <div class="filter-panel">
      ${filterSection('Category', 'category', categories)}
      ${filterSection('Difficulty', 'difficulty', difficulties)}
      ${filterSection('Equipment', 'equipment', equipments)}
      <button class="filter-clear" onclick="clearFilters()">Clear all filters</button>
    </div>
  `;

  el.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      if (containerId === 'filter-panel-desktop') syncDesktopToSheet();
      else syncSheetToDesktop();
      applyFilters();
    });
  });
}

function filterSection(title, key, options) {
  return `
    <div class="filter-section">
      <div class="filter-title">${title}</div>
      <div class="filter-options">
        ${options.map(opt => `
          <label class="filter-option">
            <input type="checkbox" data-filter="${key}" value="${opt}">
            <span class="filter-checkbox"></span>
            <span class="filter-option-label">${opt}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `;
}

/* ── Grid Rendering ───────────────────────────────────────────────── */
function renderGrid(exercises) {
  currentExercises = exercises;
  const grid = document.getElementById('exercise-grid');
  if (!exercises.length) {
    grid.innerHTML = `
      <div class="no-results">
        <p>🔍</p>
        <p>No exercises match your filters.</p>
        <p style="margin-top:6px;font-size:13px;color:#444">Try adjusting or clearing your filters.</p>
      </div>`;
    return;
  }
  grid.innerHTML = exercises.map((e, i) => `
    <div class="exercise-card" tabindex="0" role="button" aria-label="View details for ${e.name}" data-index="${i}">
      <div class="card-top">
        <div class="card-emoji">${e.emoji}</div>
        <span class="card-diff ${diffClass(e.difficulty)}">${e.difficulty}</span>
      </div>
      <div class="card-name">${e.name}</div>
      <div class="card-muscles">${e.muscles.join(' · ')}</div>
      <div class="card-tags">
        <span class="card-tag ${catClass(e.category)}">${e.category}</span>
        <span class="card-tag">${e.equipment}</span>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.exercise-card').forEach(card => {
    const idx = parseInt(card.dataset.index);
    card.addEventListener('click', () => openModal(currentExercises[idx]));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(currentExercises[idx]); }
    });
  });
}

function catClass(c) {
  return c === 'Upper Body' ? 'cat-upper' : c === 'Core' ? 'cat-core' : c === 'Lower Body' ? 'cat-lower' : '';
}
function diffClass(d) {
  return d === 'Beginner' ? 'diff-beginner' : d === 'Intermediate' ? 'diff-intermediate' : d === 'Advanced' ? 'diff-advanced' : '';
}

/* ── Filters ──────────────────────────────────────────────────────── */
function applyFilters() {
  const checked = { category: [], difficulty: [], equipment: [] };
  document.querySelectorAll('#filter-panel-desktop input[type="checkbox"]:checked').forEach(cb => {
    checked[cb.dataset.filter].push(cb.value);
  });
  activeFilters = checked;

  const results = EXERCISES.filter(e => {
    const q = searchQuery;
    return (!checked.category.length || checked.category.includes(e.category))
      && (!checked.difficulty.length || checked.difficulty.includes(e.difficulty))
      && (!checked.equipment.length || checked.equipment.includes(e.equipment))
      && (!q || e.name.toLowerCase().includes(q) || e.muscles.some(m => m.toLowerCase().includes(q)) || e.category.toLowerCase().includes(q));
  });

  renderGrid(results);
  updateResultCount(results.length);
}

function clearFilters() {
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
  activeFilters = { category: [], difficulty: [], equipment: [] };
  applyFilters();
}

function updateResultCount(n) {
  const el = document.getElementById('result-count');
  if (el) el.textContent = `${n} exercise${n !== 1 ? 's' : ''}`;
}

function syncDesktopToSheet() {
  document.querySelectorAll('#filter-panel-desktop input[type="checkbox"]').forEach(src => {
    const target = document.querySelector(`#filter-panel-sheet input[data-filter="${src.dataset.filter}"][value="${src.value}"]`);
    if (target) target.checked = src.checked;
  });
}
function syncSheetToDesktop() {
  document.querySelectorAll('#filter-panel-sheet input[type="checkbox"]').forEach(src => {
    const target = document.querySelector(`#filter-panel-desktop input[data-filter="${src.dataset.filter}"][value="${src.value}"]`);
    if (target) target.checked = src.checked;
  });
}

/* ── Mode Switching ───────────────────────────────────────────────── */
function switchMode(mode) {
  const browse = document.getElementById('browse-mode');
  const build = document.getElementById('build-mode');
  document.querySelectorAll('.mode-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === mode));

  if (mode === 'build') {
    browse.classList.add('hidden');
    build.classList.remove('hidden');
    build.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    build.classList.add('hidden');
    browse.classList.remove('hidden');
  }
}

/* ── Modal ────────────────────────────────────────────────────────── */
function openModal(exercise) {
  const overlay = document.getElementById('modal-overlay');
  overlay.querySelector('.modal-thumb').textContent = exercise.emoji;
  overlay.querySelector('.modal-title').textContent = exercise.name;

  overlay.querySelector('.modal-tags').innerHTML = `
    <span class="modal-tag ${catClass(exercise.category)}">${exercise.category}</span>
    <span class="modal-tag ${diffClass(exercise.difficulty)}">${exercise.difficulty}</span>
    ${exercise.muscles.map(m => `<span class="modal-tag">${m}</span>`).join('')}
    <span class="modal-tag">${exercise.equipment}</span>
  `;

  document.getElementById('modal-desc').textContent = exercise.description;
  document.getElementById('modal-rationale').textContent = exercise.rationale;
  document.getElementById('modal-cues').innerHTML = exercise.cues.map(c => `
    <div class="cue-item"><div class="cue-dot"></div><span>${c}</span></div>
  `).join('');

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Build Wizard ─────────────────────────────────────────────────── */
function renderBuildStep(step) {
  buildState.step = step;
  const container = document.getElementById('build-content');

  if (step === 1) {
    container.innerHTML = `
      <div class="build-step">
        <div class="build-step-label">Step 1 of 3</div>
        <h2>What are your main goals?</h2>
        <p class="build-step-sub">Choose one or more — we'll tailor your exercise selection.</p>
        <div class="build-options">
          ${buildOpt('strength','💪','Strength','Build muscle and get stronger')}
          ${buildOpt('posture','🏗️','Posture','Counteract sitting and desk work')}
          ${buildOpt('conditioning','🔥','Conditioning','Raise heart rate, burn energy')}
          ${buildOpt('flexibility','🧘','Flexibility','Improve range of motion')}
        </div>
        <p class="build-error" id="build-error">Please select at least one goal.</p>
        <div class="build-nav">
          <button class="btn btn-primary" onclick="buildNext(1)">Next →</button>
        </div>
      </div>`;
    restoreBuildSelections(buildState.goals);
  } else if (step === 2) {
    container.innerHTML = `
      <div class="build-step">
        <div class="build-step-label">Step 2 of 3</div>
        <h2>What's your experience level?</h2>
        <p class="build-step-sub">This sets the difficulty of your recommended exercises.</p>
        <div class="build-options">
          ${buildOpt('beginner','🌱','Beginner','New or returning after a break')}
          ${buildOpt('intermediate','📈','Intermediate','Regular training for 3+ months')}
          ${buildOpt('advanced','⚡','Advanced','Consistent training for 1+ year')}
        </div>
        <p class="build-error" id="build-error">Please select your experience level.</p>
        <div class="build-nav">
          <button class="btn btn-secondary" onclick="renderBuildStep(1)">← Back</button>
          <button class="btn btn-primary" onclick="buildNext(2)">Next →</button>
        </div>
      </div>`;
    if (buildState.level) restoreBuildSelections([buildState.level]);
  } else if (step === 3) {
    container.innerHTML = `
      <div class="build-step">
        <div class="build-step-label">Step 3 of 3</div>
        <h2>What equipment do you have?</h2>
        <p class="build-step-sub">We'll only suggest exercises you can actually do.</p>
        <div class="build-options">
          ${buildOpt('no-equip','🏠','No equipment','Bodyweight only')}
          ${buildOpt('pullup-bar','🔝','Pull-up bar','Doorframe or wall-mounted')}
          ${buildOpt('band','🔴','Resistance band','Any resistance level')}
        </div>
        <p class="build-error" id="build-error">Please select at least one option.</p>
        <div class="build-nav">
          <button class="btn btn-secondary" onclick="renderBuildStep(2)">← Back</button>
          <button class="btn btn-primary" onclick="buildNext(3)">Build my plan →</button>
        </div>
      </div>`;
    restoreBuildSelections(buildState.equipment);
  } else {
    renderPlanResult();
  }
}

function buildOpt(value, icon, name, desc) {
  return `
    <div class="build-option" data-value="${value}" onclick="toggleBuildOpt(this)">
      <div class="build-option-icon">${icon}</div>
      <div class="build-option-name">${name}</div>
      <div class="build-option-desc">${desc}</div>
    </div>`;
}

function toggleBuildOpt(el) {
  const singleSelect = buildState.step === 2;
  if (singleSelect) {
    el.closest('.build-options').querySelectorAll('.build-option').forEach(o => o.classList.remove('selected'));
  }
  el.classList.toggle('selected');
}

function restoreBuildSelections(values) {
  if (!values?.length) return;
  document.querySelectorAll('.build-option').forEach(opt => {
    if (values.includes(opt.dataset.value)) opt.classList.add('selected');
  });
}

function buildNext(fromStep) {
  const errEl = document.getElementById('build-error');
  const selected = [...document.querySelectorAll('.build-option.selected')].map(el => el.dataset.value);

  if (!selected.length) {
    errEl?.classList.add('visible');
    return;
  }
  errEl?.classList.remove('visible');

  if (fromStep === 1) { buildState.goals = selected; renderBuildStep(2); }
  else if (fromStep === 2) { buildState.level = selected[0]; renderBuildStep(3); }
  else if (fromStep === 3) { buildState.equipment = selected; renderBuildStep(4); }
}

function renderPlanResult() {
  const plan = generatePlan();
  document.getElementById('build-content').innerHTML = `
    <div class="plan-result">
      <div class="build-step-label">Your Plan</div>
      <h2>Here are your exercises</h2>
      <p class="plan-result-sub">Add these to Stackrep and tap each set as you complete it throughout the day.</p>
      <div class="plan-exercises">
        ${plan.map(e => `
          <div class="plan-exercise-row">
            <div class="plan-exercise-emoji">${e.emoji}</div>
            <div class="plan-exercise-info">
              <div class="plan-exercise-name">${e.name}</div>
              <div class="plan-exercise-meta">${e.category} · ${e.difficulty} · ${e.equipment}</div>
            </div>
          </div>`).join('')}
      </div>
      <div class="plan-note">
        💡 With Stackrep, you don't have to do these all at once. Tap once per set throughout your day — your progress ring fills as you go.
      </div>
      <div class="plan-actions">
        <a href="https://apps.apple.com/app/stackrep-fitness/id6759266222" class="btn btn-primary">Download Stackrep Free</a>
        <button class="btn btn-secondary" onclick="renderBuildStep(1)">Start over</button>
      </div>
    </div>`;
}

function generatePlan() {
  const diffOrder = ['Beginner', 'Intermediate', 'Advanced'];
  const diffMap = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' };
  const maxDiff = diffOrder.indexOf(diffMap[buildState.level] || 'Beginner');

  const equipMap = { 'no-equip': 'No equipment', 'pullup-bar': 'Pull-up bar', 'band': 'Resistance band' };
  const allowedEquip = buildState.equipment.map(e => equipMap[e]);

  const goalWeight = {
    strength: { 'Upper Body': 3, 'Lower Body': 3, 'Core': 1 },
    posture: { 'Upper Body': 2, 'Core': 3, 'Lower Body': 1 },
    conditioning: { 'Core': 3, 'Lower Body': 2, 'Upper Body': 2 },
    flexibility: { 'Lower Body': 3, 'Core': 2, 'Upper Body': 1 }
  };

  const pool = EXERCISES
    .filter(e => allowedEquip.includes(e.equipment) && diffOrder.indexOf(e.difficulty) <= maxDiff)
    .map(e => {
      let score = 0;
      buildState.goals.forEach(g => { score += (goalWeight[g]?.[e.category] || 0); });
      return { ...e, score };
    })
    .sort((a, b) => b.score - a.score);

  // Pick up to 8, max 3 per category
  const picked = [];
  const catCount = {};
  for (const e of pool) {
    if (picked.length >= 8) break;
    const c = catCount[e.category] || 0;
    if (c >= 3) continue;
    picked.push(e);
    catCount[e.category] = c + 1;
  }

  return picked.length >= 3 ? picked : pool.slice(0, Math.min(6, pool.length));
}

/* ── Events ───────────────────────────────────────────────────────── */
function bindEvents() {
  // Search
  document.getElementById('search')?.addEventListener('input', e => {
    searchQuery = e.target.value.toLowerCase().trim();
    applyFilters();
  });

  // Hero mode buttons
  document.querySelectorAll('[data-mode]').forEach(btn => {
    btn.addEventListener('click', () => switchMode(btn.dataset.mode));
  });

  // Mobile filter sheet
  document.getElementById('filter-toggle-btn')?.addEventListener('click', openFilterSheet);
  document.getElementById('filter-sheet-overlay')?.addEventListener('click', closeFilterSheet);
  document.getElementById('close-filter-sheet')?.addEventListener('click', closeFilterSheet);
  document.getElementById('apply-filters-btn')?.addEventListener('click', () => {
    syncSheetToDesktop();
    applyFilters();
    closeFilterSheet();
  });

  // Modal close
  document.getElementById('modal-overlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });
  document.getElementById('modal-close-btn')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function openFilterSheet() {
  document.getElementById('filter-sheet')?.classList.add('open');
  document.getElementById('filter-sheet-overlay')?.classList.add('open');
}
function closeFilterSheet() {
  document.getElementById('filter-sheet')?.classList.remove('open');
  document.getElementById('filter-sheet-overlay')?.classList.remove('open');
}
