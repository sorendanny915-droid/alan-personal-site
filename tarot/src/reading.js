import { cards } from './cards.js';

const positions = {
  spread: [
    { name: '根源', context: '过去的影响', question: '哪段旧经验仍在影响你对这件事的看法？' },
    { name: '当下', context: '现在的状态', question: '眼下最值得正视的感受或处境是什么？' },
    { name: '指引', context: '下一步建议', question: '你现在能做的一件小事是什么？' },
  ],
  single: [
    { name: '此刻', context: '单牌指引', question: '我现在最需要看见什么？' },
  ],
};

const table = document.getElementById('table');
const spread = document.getElementById('spread');
const status = document.getElementById('reading-status');
const shuffleButton = document.getElementById('shuffle');
const drawButton = document.getElementById('draw');
const modePicker = document.getElementById('mode-picker');
const interpretations = document.getElementById('interpretations');
const interpretationTitle = document.getElementById('interpretation-title');
const individual = document.getElementById('individual');
const summary = document.getElementById('summary');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let mode = 'spread';
let deck = [];
let drawn = [];
let busy = false;

function artPath(card) {
  return './cards/' + String(card.id).padStart(2, '0') + '.jpg';
}

function wait(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function renderSlots() {
  spread.innerHTML = positions[mode].map((position, index) => `
    <div class="slot">
      <p class="slot-label">${position.name}<small>${position.context}</small></p>
      <button class="card-button" type="button" data-slot="${index}" aria-label="抽取${position.name}牌" disabled>
        <span class="card-inner">
          <span class="card-back" aria-hidden="true"><span class="medallion">⚙</span></span>
          <span class="card-front" aria-hidden="true">
            <span class="front-label"></span>
            <img alt="" width="640" height="960" hidden>
          </span>
        </span>
      </button>
      <p class="slot-caption" data-caption="${index}">牌面朝下</p>
    </div>
  `).join('');
}

function updateControls() {
  const total = positions[mode].length;
  const canDraw = !busy && deck.length > 0 && drawn.length < total;
  modePicker.disabled = busy;
  shuffleButton.disabled = busy;
  shuffleButton.textContent = deck.length ? '⟳ 重新洗牌' : '⟳ 洗牌';
  drawButton.disabled = !canDraw;
  drawButton.textContent = drawn.length === total
    ? '翻牌完成'
    : mode === 'single' ? '抽一张' : `抽第 ${drawn.length + 1} 张`;
  spread.querySelectorAll('.card-button').forEach((button, index) => {
    button.disabled = !canDraw || index !== drawn.length;
  });
}

function resetReading() {
  deck = [];
  drawn = [];
  table.dataset.mode = mode;
  document.getElementById('mode-description').textContent = mode === 'spread'
    ? '根源 · 当下 · 指引'
    : '我现在最需要看见什么？';
  interpretationTitle.textContent = mode === 'spread' ? '牌阵解读' : '单牌解读';
  interpretations.hidden = true;
  summary.hidden = true;
  individual.replaceChildren();
  status.textContent = '先在心里想一个问题，然后洗牌。';
  renderSlots();
  updateControls();
}

async function shuffle() {
  if (busy) return;
  resetReading();
  busy = true;
  updateControls();
  deck = [...cards];
  for (let index = deck.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[other]] = [deck[other], deck[index]];
  }
  status.textContent = '正在洗牌…';
  if (!reducedMotion.matches) {
    table.classList.add('shuffling');
    await wait(440);
    table.classList.remove('shuffling');
  }
  busy = false;
  status.textContent = mode === 'spread' ? '已洗牌，先翻开「根源」。' : '已洗牌，可以抽牌了。';
  updateControls();
  drawButton.focus({ preventScroll: true });
}

function orientation(entry) {
  return entry.reversed ? '逆位' : '正位';
}

function appendInterpretation(entry, position) {
  const { card, reversed } = entry;
  const article = document.createElement('article');
  article.className = 'panel interpretation';
  article.innerHTML = `
    <p class="eyebrow">${position.name} · ${position.context}</p>
    <div class="result-heading">
      <h3>${card.zh}</h3><span class="orientation${reversed ? ' reversed' : ''}">${orientation(entry)}</span>
    </div>
    <p class="question">${position.question}</p>
    <p>${reversed ? card.reversed : card.upright}</p>
    <p class="keywords">${card.keywords.join(' · ')}</p>
    ${mode === 'single' ? `<p class="single-action"><strong>可以试试</strong><br>${card.action}</p>` : ''}
  `;
  individual.append(article);
  interpretations.hidden = false;
}

function showSummary() {
  const [root, present, guide] = drawn;
  const title = entry => `${entry.card.zh}（${orientation(entry)}）`;
  const focus = entry => entry.card.keywords.slice(0, 2).join('与');
  const direction = guide.reversed
    ? '先检查自己是否被惯性推着走，再决定怎么调整。'
    : '选一个你能掌控的小步骤，行动后再观察变化。';
  summary.innerHTML = `
    <p class="eyebrow">根源 → 当下 → 指引</p>
    <h3 id="summary-title">综合解读</h3>
    <p>从${title(root)}回看，${focus(root)}可能是你带入这件事的旧线索。
    ${title(present)}把焦点放到此刻的${focus(present)}。先分清哪些感受沿袭自过去、哪些来自眼前的事实，再用${title(guide)}的${focus(guide)}寻找下一步。</p>
    <div class="advice"><h4>整体建议</h4>
      <p>${direction}${guide.card.action}</p>
      <p class="question">${guide.card.reflection}</p>
    </div>
  `;
  summary.hidden = false;
}

async function draw() {
  const index = drawn.length;
  const position = positions[mode][index];
  if (busy || !deck.length || !position) return;
  const button = spread.querySelector(`[data-slot="${index}"]`);
  const card = deck.pop();
  const entry = { card, reversed: Math.random() < 0.5 };

  busy = true;
  updateControls();
  status.textContent = `正在翻开「${position.name}」…`;
  const artwork = button.querySelector('img');
  artwork.classList.toggle('upside-down', entry.reversed);
  artwork.addEventListener('load', () => { artwork.hidden = false; }, { once: true });
  artwork.src = artPath(card);
  button.querySelector('.front-label').textContent = card.zh;
  button.classList.add('revealed');
  if (!reducedMotion.matches) await wait(460);

  drawn.push(entry);
  spread.querySelector(`[data-caption="${index}"]`).textContent = `${card.zh} · ${orientation(entry)}`;
  button.setAttribute('aria-label', `${position.name}，${card.zh}，${orientation(entry)}`);
  appendInterpretation(entry, position);

  busy = false;
  const next = positions[mode][drawn.length];
  if (next) {
    status.textContent = `「${position.name}」已翻开，下一张是「${next.name}」。`;
  } else {
    if (mode === 'spread') showSummary();
    status.textContent = mode === 'spread' ? '三张牌已翻开，可查看综合解读。' : '已翻牌，可查看单牌解读。';
  }
  updateControls();
  if (next) {
    drawButton.focus({ preventScroll: true });
  } else {
    interpretationTitle.focus();
  }
}

modePicker.addEventListener('change', event => {
  mode = event.target.value;
  resetReading();
});
shuffleButton.addEventListener('click', shuffle);
drawButton.addEventListener('click', draw);
spread.addEventListener('click', event => {
  const button = event.target.closest('.card-button');
  if (button && !button.disabled) draw();
});
resetReading();

const library = document.getElementById('library');
const libraryGrid = document.getElementById('library-grid');
const preview = document.getElementById('preview');
document.getElementById('library-link').addEventListener('click', () => { library.open = true; });
library.addEventListener('toggle', () => {
  if (!library.open || libraryGrid.childElementCount) return;
  libraryGrid.innerHTML = cards.map(card => `
    <button class="library-card" type="button" data-card="${card.id}" aria-label="查看${card.zh}">
      <img src="${artPath(card)}" loading="lazy" width="640" height="960" alt="">
      <span>${card.roman} · ${card.zh}</span>
    </button>
  `).join('');
});
libraryGrid.addEventListener('click', event => {
  const button = event.target.closest('.library-card');
  if (!button) return;
  const card = cards[Number(button.dataset.card)];
  const artwork = document.getElementById('preview-art');
  artwork.src = artPath(card);
  artwork.alt = card.zh + '牌面';
  document.getElementById('preview-title').textContent = card.zh;
  document.getElementById('preview-essence').textContent = card.essence;
  preview.showModal();
});
