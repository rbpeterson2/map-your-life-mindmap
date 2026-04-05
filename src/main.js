// ── Default mind map data (Map Your Life) ─────────────────────
const DEFAULT_NODES = [
  { id: 'root', label: 'Map Your Life', sub: 'Coin Experience 4/11/26', x: 0, y: 0, cls: 'root', detail: 'A personal life mapping exercise exploring the key elements that make up who you are — family, friends, hobbies, career, and the moments that shaped your leadership.' },
  { id: 'family', label: 'Family', sub: '', x: -560, y: -260, cls: 'family branch-head', detail: 'The people you didn\'t choose but who shaped you most. From parents to in-laws, each relationship left a lasting imprint.' },
  { id: 'dad', label: 'Dad — Bruce', sub: 'Faith, outdoors, DIY', x: -760, y: -420, cls: 'family', detail: '"What\'s the plan." "1 Second Forgiveness." "If you can read it, you can do it." Bruce set the bedrock of faith and self-reliance. He passed away June 2023.' },
  { id: 'mom', label: 'Mom — Cheryl', sub: 'Art, word games, dark humor', x: -760, y: -280, cls: 'family', detail: 'Love of word games, drawing, painting, quirky and sometimes dark humor, TV/movies, and reading — especially murder, intrigue, and spy novels.' },
  { id: 'alyssa', label: 'Alyssa', sub: 'Wife · Met in 5th grade', x: -760, y: -140, cls: 'family', detail: 'Met in 5th grade. Dated briefly in 8th grade. Reunited the summer between junior and senior year of high school. She drives him to be the best version of himself.' },
  { id: 'siblings', label: 'Siblings', sub: 'Justin, Melanie', x: -540, y: -440, cls: 'family', detail: 'Couldn\'t be more different, yet share the same core. A chaos-free childhood instilled values that stuck. Justin married Ann, Melanie married Bucky.' },
  { id: 'inlaws', label: 'In-Laws', sub: 'Susan & Ken (dec.)', x: -560, y: -120, cls: 'family', detail: 'Both Susan and Ken are deceased. They truly took him in as a son and loved him unconditionally.' },
  { id: 'friends', label: 'Friends', sub: '', x: -200, y: -420, cls: 'friends branch-head', detail: 'From a handful of close childhood bonds to a wider adult circle. Quality over quantity has always been the theme.' },
  { id: 'randy', label: 'Randy', sub: 'Adolescent → Adult', x: -320, y: -580, cls: 'friends', detail: 'The constant. A close friend from adolescence all the way through adulthood. Now lives nearby, though family life keeps him busy.' },
  { id: 'teen-friends', label: 'Teen Circle', sub: 'Scott, Jill, Courtney, Amy', x: -120, y: -590, cls: 'friends', detail: 'The core group from 9th–12th grade. Still sees Courtney, Jill, Amy, and Scott often. These friendships outlasted the hallways.' },
  { id: 'college-friends', label: 'College Circle', sub: 'Eric, Ramsey, Allison, Steph', x: -240, y: -700, cls: 'friends', detail: 'A core group formed in college. Connection faded post-graduation. Life moved in different directions.' },
  { id: 'mens-alliance', label: "Men's Alliance", sub: 'Brotherhood, now', x: -60, y: -480, cls: 'friends', detail: 'The current brotherhood of men in his life. An intentional community that matters deeply right now.' },
  { id: 'hobbies', label: 'Hobbies', sub: '', x: 200, y: -420, cls: 'hobbies branch-head', detail: 'What you do with free time reveals character. From outdoor endurance to artistic precision.' },
  { id: 'hiking', label: 'Hiking', sub: '26 national parks', x: 60, y: -590, cls: 'hobbies', detail: 'Has visited 26 National Parks and been to every state except Alaska. The outdoors is a lifelong companion, inherited from Dad.' },
  { id: 'photography', label: 'Photography', sub: 'Art meets precision', x: 220, y: -600, cls: 'hobbies', detail: 'Always liked art, but photography offered something special: the precision of a camera fused with creative expression.' },
  { id: 'music', label: 'Music', sub: 'Trumpet, full brass', x: 360, y: -530, cls: 'hobbies', detail: 'Played trumpet from 5th through 12th grade. By senior year, could play anything in the brass section.' },
  { id: 'sports', label: 'Sports', sub: 'Swimming, wrestling', x: 100, y: -480, cls: 'hobbies', detail: 'Swimming as a young child — allowed on the team at age 4. Wrestling followed. Competitive and physical from the start.' },
  { id: 'events', label: 'Life Events', sub: '& Lessons Learned', x: 560, y: -260, cls: 'events branch-head', detail: 'The random and the intentional moments that left a mark — each paired with something true learned from living through it.' },
  { id: 'ev-faith', label: 'Church camp storm', sub: 'God is good. All the time.', x: 700, y: -440, cls: 'events', detail: 'Survived a crazy storm while at church camp. Lesson: God is with you and is good. All the time.' },
  { id: 'ev-loss', label: 'Loss of a friend', sub: 'Rafting tragedy', x: 720, y: -300, cls: 'events', detail: 'A friend died on a white water rafting trip — she had been sitting next to Alyssa. Lesson: You only have people in your life for a short time.' },
  { id: 'ev-college', label: 'College rejections', sub: "It's who you know", x: 740, y: -160, cls: 'events', detail: 'Not accepted into any colleges initially. A neighbor\'s connection at Penn State opened the Plastics program. Lesson: It\'s who you know.' },
  { id: 'ev-marriage', label: 'Marriage', sub: 'Easy to commit, hard to honor', x: 720, y: -20, cls: 'events', detail: 'Getting married. Lesson: Making a commitment is easy. Honoring it is difficult.' },
  { id: 'ev-terminated', label: 'Terminated while traveling', sub: "Life doesn't wait", x: 700, y: 120, cls: 'events', detail: 'Was terminated while traveling. Called the loan officer from 5 months prior asking if he knew anyone hiring. Lesson: Ask the question.' },
  { id: 'ev-grief', label: 'Loss & grief', sub: 'In-laws, miscarriages', x: 680, y: 260, cls: 'events', detail: 'Alyssa\'s dad died, then her mom three years later. Also went through several miscarriages. Lesson: Don\'t wait. It\'s okay to be angry with God.' },
  { id: 'ev-ownership', label: 'Business ownership', sub: 'Stretch to grow', x: 640, y: 390, cls: 'events', detail: 'Became partner/owner of a company. Bought a lake house. Then was removed. Lesson: Stretch to see growth. Truth has a cost.' },
  { id: 'career', label: 'Career', sub: '', x: 0, y: 420, cls: 'career branch-head', detail: 'A winding path from plastic injection sales to independent consulting. Don\'t find your identity in what you do to earn money.' },
  { id: 'c1', label: '2001–2003', sub: 'Plastics sales', x: -300, y: 560, cls: 'career', detail: 'Sales for a plastic injection molding manufacturer. The first job out of school.' },
  { id: 'c2', label: '2004–2010', sub: 'Banking: loans → IT → PM', x: -110, y: 580, cls: 'career', detail: 'Started as a loan officer. Transitioned into IT, Project Management, then Corporate PM and Change Management — all at the same bank.' },
  { id: 'c3', label: '2010–2025', sub: 'Startup → Owner', x: 110, y: 580, cls: 'career', detail: 'Business Analyst at a startup, then Business Line Manager, then Owner/Partner/Executive at the same company.' },
  { id: 'c4', label: '2026–', sub: 'Independent consultant', x: 300, y: 560, cls: 'career', detail: 'Now self-employed as a consultant. A new chapter that reflects the lessons of every previous one.' },
  { id: 'leadership', label: 'Leadership', sub: '', x: -560, y: 260, cls: 'leadership branch-head', detail: 'Leadership isn\'t a title — it\'s the default posture wherever you show up. Shaped by watching a father who gave equal attention to everyone.' },
  { id: 'l-dad', label: "Dad's example", sub: 'Engineer or janitor — same respect', x: -720, y: 140, cls: 'leadership', detail: 'The formative leadership lesson: watching Dad interact with everyone the same way — engineer or janitor, everyone got the same respect and attention.' },
  { id: 'l-roles', label: 'Roles held', sub: 'JV mgr, exec, tribe leader', x: -720, y: 300, cls: 'leadership', detail: 'Builder Joint Venture manager. Executive prior to ownership. Executive after ownership. Specter Tribe leader. Leadership at work and in the Outdoor Experience.' },
  { id: 'l-style', label: 'Style', sub: 'Fair · Present · Servant', x: -680, y: 440, cls: 'leadership', detail: 'A leadership style rooted in fairness, presence, and service. Still being refined.' },
];

const DEFAULT_EDGES = [
  ['root','family'],['root','friends'],['root','hobbies'],['root','events'],['root','career'],['root','leadership'],
  ['family','dad'],['family','mom'],['family','alyssa'],['family','siblings'],['family','inlaws'],
  ['friends','randy'],['friends','teen-friends'],['friends','college-friends'],['friends','mens-alliance'],
  ['hobbies','hiking'],['hobbies','photography'],['hobbies','music'],['hobbies','sports'],
  ['events','ev-faith'],['events','ev-loss'],['events','ev-college'],['events','ev-marriage'],['events','ev-terminated'],['events','ev-grief'],['events','ev-ownership'],
  ['career','c1'],['career','c2'],['career','c3'],['career','c4'],
  ['leadership','l-dad'],['leadership','l-roles'],['leadership','l-style'],
];

const DEFAULT_MD = `# Map Your Life
## Coin Experience 4/11/26

### Elements of Life
1. **Family** - most of us don't get to choose this one
2. **Friends** - your associations
3. **Hobbies** - what you choose to do with your time
4. **Occupation** - how do you provide
5. **Life Events** - the scenarios you find yourself in, on purpose or by accident

---

## People & Influencers

### Family

**Immediate** - 3rd and last child.

#### My Dad, Bruce
Whom I share a name with passed away June 2023. He provided a lot of insight and instruction in my life. ***He set the bedrock for having a foundation of life in faith.*** "If you can read it, you can do it", "What's the plan", "1 Second Forgiveness"

#### My Mom, Cheryl
Love of word games, drawing/painting/art, quirky humor which is sometimes dark, love of tv/movies, reading especially murder/intrigue/spy

#### My Siblings
We couldn't be more different but there is a lot of ways that we're the same too.

**Alyssa** — Drives me to be the best person that I can be. Met in 5th grade; dated 1 year in 8th grade; started dating again summer between Jr and Sr of high school. **No children**

**Extended** — In Laws: Both Mother-in-law, Susan, and Father-in-law, Ken, are deceased. Brother: Justin (married Ann). Sister: Melanie (married Bucky). Sister-in-law: Kim (married Victor).

---

### Friends

1. **Youth** - Didn't have a lot of friends growing up.
2. **Adolescent** - Really only had one really good friend, Randy.
3. **Teens** - Randy, Scott, Jill, Courtney, Alyssa, Amy
4. **Early Adult** - Eric, Ramsey, Allison, Steph
5. **Adult** - Now I have a brotherhood of guys here at Men's Alliance

---

### Hobbies

1. **Hiking** - 26 National Parks; every state except Alaska
2. **Photography** - Analytical but at the same time art.
3. **Sports** - Swimming and then Wrestling.
4. **Music** - Trumpet from 5th to 12th grade; by end of high school, could play anything in the brass section

---

## Significant Events & Lessons Learned

1. Surviving a crazy storm at church camp — *God is with you and is good. All the time.*
2. Friend dying in a white water rafting trip (sitting next to Alyssa) — *You only have people a short time in your life.*
3. Not being accepted into any colleges; neighbor's connection at Penn State — *Sometimes it's literally about who you know.*
4. Getting married — *Making a commitment is easy. Honoring it is difficult.*
5. Being terminated while traveling — *Things in life happen whether you're ready or not.*
6. Going through several mergers — *Don't find your identity in what you do to earn money.*
7. Alyssa's parents passing away; several miscarriages — *Don't wait. It's okay to be angry with God.*
8. Becoming partner/owner of a company — *You have to stretch sometimes to see growth.*
9. Bought a lake house — *Audacious goals can be reached.*
10. Being removed as a partner/owner — *Sometimes people who ask for the truth aren't ready to hear it.*

---

## Leadership Roles Held

1. Builder Joint Venture manager
2. Executive in company prior to ownership
3. Executive in company after ownership
4. Specter Tribe
5. Leadership at Work, Outdoor Experience

### Occupations

- **2001–2003**: Sales for Plastic Injection Molding manufacturer
- **2004–2010**: Bank — loan officer → IT/PM → Corporate PM & Change Management
- **2010–2025**: Startup — Business Analyst → Business line manager → Owner/Partner/Executive
- **2026–**: Consultant, self-employed

### Events that Shaped My Leadership Style

Watching my Dad own a business and treat everyone fairly — whether engineer or janitor, everyone got the same respect and attention.`;

// ── State ─────────────────────────────────────────────────────
let nodeData = [...DEFAULT_NODES];
let edges = [...DEFAULT_EDGES];
let currentMarkdown = DEFAULT_MD;
let documentTitle = 'Map Your Life';

const W = () => window.innerWidth;
const H = () => window.innerHeight;
let tx = 0, ty = 40, scale = 0.82;
let dragging = false, lastX, lastY;

// ── DOM refs ──────────────────────────────────────────────────
const wrap = document.getElementById('canvas-wrap');
const svgEl = document.getElementById('svg-layer');
const nodesLayer = document.getElementById('nodes-layer');

// ── Markdown renderer ─────────────────────────────────────────
function renderMarkdown(md) {
  return md
    .replace(/^#{4}\s+(.+)$/gm, '<h4>$1</h4>')
    .replace(/^#{3}\s+(.+)$/gm, '<h3>$1</h3>')
    .replace(/^#{2}\s+(.+)$/gm, '<h2>$1</h2>')
    .replace(/^#{1}\s+(.+)$/gm, '<h1>$1</h1>')
    .replace(/^\s*---\s*$/gm, '<hr>')
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/^(\d+)\.\s+(.+)$/gm, '<li>$2</li>')
    .replace(/^[-*]\s+(.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]*?<\/li>\n?)+/g, m => '<ul>' + m + '</ul>')
    .replace(/\n\n+/g, '</p><p>')
    .replace(/<p>(<[hpuolhr])/g, '$1')
    .replace(/(<\/[hrul][^>]*>)<\/p>/g, '$1');
}

// ── Edge color ────────────────────────────────────────────────
const branchColor = {
  family: '#f07060', friends: '#50d0a8', hobbies: '#78d858',
  events: '#e8c040', career: '#60a8f0', leadership: '#c878f0', root: '#a090d8'
};

function getEdgeColor(fromId) {
  if (fromId === 'root') return branchColor.root;
  for (const b of Object.keys(branchColor)) {
    if (fromId === b) return branchColor[b];
  }
  // Leaf — match by branch prefix
  const node = nodeData.find(n => n.id === fromId);
  if (node) {
    const cls = node.cls.split(' ')[0];
    return branchColor[cls] || '#888';
  }
  return '#888';
}

function getEdgeColorForPair(fromId, toId) {
  if (fromId === 'root') return branchColor[toId] || branchColor.root;
  return getEdgeColor(fromId);
}

// ── World ↔ screen ────────────────────────────────────────────
function worldToScreen(x, y) {
  return { x: x * scale + tx + W() / 2, y: y * scale + ty + H() / 2 };
}

// ── Render ────────────────────────────────────────────────────
const nodeEls = {};

function buildNodes() {
  // Clear existing
  nodesLayer.innerHTML = '';
  Object.keys(nodeEls).forEach(k => delete nodeEls[k]);

  nodeData.forEach(n => {
    const el = document.createElement('div');
    el.className = 'node ' + n.cls;
    el.innerHTML = `<span class="label">${n.label}</span>${n.sub ? `<span class="sub">${n.sub}</span>` : ''}`;
    el.dataset.id = n.id;
    el.addEventListener('click', e => { e.stopPropagation(); showDetail(n); });
    nodesLayer.appendChild(el);
    nodeEls[n.id] = el;
  });
}

function drawEdges() {
  svgEl.innerHTML = '';
  svgEl.setAttribute('width', W());
  svgEl.setAttribute('height', H());

  const nodeMap = Object.fromEntries(nodeData.map(n => [n.id, n]));

  edges.forEach(([fromId, toId]) => {
    const from = nodeMap[fromId], to = nodeMap[toId];
    if (!from || !to) return;
    const a = worldToScreen(from.x, from.y);
    const b = worldToScreen(to.x, to.y);
    const color = getEdgeColorForPair(fromId, toId);
    const dx = b.x - a.x;
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M${a.x},${a.y} C${a.x + dx * 0.3},${a.y} ${b.x - dx * 0.3},${b.y} ${b.x},${b.y}`);
    path.setAttribute('stroke', color);
    path.setAttribute('stroke-width', fromId === 'root' ? '2' : '1.2');
    path.setAttribute('fill', 'none');
    path.setAttribute('opacity', fromId === 'root' ? '0.5' : '0.3');
    svgEl.appendChild(path);
  });
}

function positionNodes() {
  nodeData.forEach(n => {
    const el = nodeEls[n.id];
    if (!el) return;
    const s = worldToScreen(n.x, n.y);
    el.style.left = s.x + 'px';
    el.style.top = s.y + 'px';
  });
}

function render() {
  drawEdges();
  positionNodes();
}

// ── Pan / zoom ────────────────────────────────────────────────
wrap.addEventListener('mousedown', e => {
  if (e.target.closest('.node')) return;
  dragging = true; lastX = e.clientX; lastY = e.clientY;
  wrap.classList.add('dragging');
});
window.addEventListener('mousemove', e => {
  if (!dragging) return;
  tx += e.clientX - lastX; ty += e.clientY - lastY;
  lastX = e.clientX; lastY = e.clientY; render();
});
window.addEventListener('mouseup', () => { dragging = false; wrap.classList.remove('dragging'); });

let lastPinchDist;
wrap.addEventListener('touchstart', e => {
  if (e.touches.length === 1) { lastX = e.touches[0].clientX; lastY = e.touches[0].clientY; }
  else if (e.touches.length === 2) { lastPinchDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY); }
}, { passive: true });
wrap.addEventListener('touchmove', e => {
  if (e.touches.length === 1) {
    tx += e.touches[0].clientX - lastX; ty += e.touches[0].clientY - lastY;
    lastX = e.touches[0].clientX; lastY = e.touches[0].clientY; render();
  } else if (e.touches.length === 2) {
    const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
    scale = Math.min(2, Math.max(0.3, scale * dist / lastPinchDist));
    lastPinchDist = dist; render();
  }
  e.preventDefault();
}, { passive: false });

wrap.addEventListener('wheel', e => {
  e.preventDefault();
  const factor = e.deltaY < 0 ? 1.1 : 0.91;
  const wx = (e.clientX - tx - W() / 2) / scale;
  const wy = (e.clientY - ty - H() / 2) / scale;
  scale = Math.min(2.5, Math.max(0.25, scale * factor));
  tx = e.clientX - wx * scale - W() / 2;
  ty = e.clientY - wy * scale - H() / 2;
  render();
}, { passive: false });

window.addEventListener('resize', () => render());

// ── Exposed globals (called from HTML onclick) ─────────────────
window.zoom = f => { scale = Math.min(2.5, Math.max(0.25, scale * f)); render(); };
window.resetView = () => { tx = 0; ty = 40; scale = 0.82; render(); closePanel(); };
window.focusBranch = branch => {
  const n = nodeData.find(d => d.id === branch);
  if (!n) return;
  scale = 1.2; tx = -n.x * scale; ty = -n.y * scale + 20; render();
};

// ── Detail panel ───────────────────────────────────────────────
function showDetail(n) {
  document.getElementById('dp-title').textContent = n.label + (n.sub ? ' — ' + n.sub : '');
  document.getElementById('dp-body').textContent = n.detail;
  document.getElementById('detail-panel').classList.add('visible');
}
window.closePanel = () => document.getElementById('detail-panel').classList.remove('visible');
wrap.addEventListener('click', () => window.closePanel());

// ── Background modal ───────────────────────────────────────────
window.openBackground = () => {
  document.getElementById('bg-content').innerHTML = '<p>' + renderMarkdown(currentMarkdown) + '</p>';
  document.getElementById('bg-modal-title').innerHTML = `${documentTitle} <span>— source document</span>`;
  document.getElementById('bg-overlay').classList.add('open');
};
window.closeBackground = () => document.getElementById('bg-overlay').classList.remove('open');
window.handleOverlayClick = e => { if (e.target === document.getElementById('bg-overlay')) window.closeBackground(); };

// ── Raw Markdown modal ─────────────────────────────────────────
window.showMarkdown = () => {
  document.getElementById('md-raw-content').textContent = currentMarkdown;
  document.getElementById('md-raw-overlay').querySelector('h2').innerHTML =
    `${documentTitle} <span>— raw markdown</span>`;
  document.getElementById('md-raw-overlay').classList.add('open');
};
window.closeMdRaw = () => document.getElementById('md-raw-overlay').classList.remove('open');
window.handleMdRawOverlayClick = e => { if (e.target === document.getElementById('md-raw-overlay')) window.closeMdRaw(); };

document.addEventListener('keydown', e => { if (e.key === 'Escape') { window.closeBackground(); window.closeMdRaw(); window.closePanel(); } });

// ── Generating overlay ─────────────────────────────────────────
function showGenerating(msg = 'Reading your document…') {
  document.getElementById('generating-msg').textContent = msg;
  document.getElementById('generating-overlay').classList.add('open');
}
function hideGenerating() {
  document.getElementById('generating-overlay').classList.remove('open');
}

// ── Upload & regenerate ────────────────────────────────────────
const messages = [
  'Reading your document…',
  'Identifying key themes…',
  'Mapping relationships…',
  'Placing nodes on the canvas…',
  'Almost there…',
];

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Could not read file'));
    reader.readAsText(file, 'utf-8');
  });
}

document.getElementById('md-upload').addEventListener('change', async e => {
  const file = e.target.files[0];
  if (!file) return;

  // Read file before resetting input (some browsers invalidate files list on reset)
  const markdown = await readFileAsText(file);
  e.target.value = ''; // reset so same file can be re-uploaded

  currentMarkdown = markdown;
  documentTitle = file.name.replace(/\.md$/i, '').replace(/[-_]/g, ' ');

  // Show generating overlay with cycling messages
  showGenerating(messages[0]);
  let msgIdx = 0;
  const msgInterval = setInterval(() => {
    msgIdx = (msgIdx + 1) % messages.length;
    document.getElementById('generating-msg').textContent = messages[msgIdx];
  }, 2200);

  try {
    const resp = await fetch('/api/generate-mindmap', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ markdown }),
    });

    if (!resp.ok) {
      const err = await resp.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(err.error || `HTTP ${resp.status}`);
    }

    const data = await resp.json();

    if (!data.nodes || !data.edges) {
      throw new Error('Invalid response structure from API');
    }

    // Swap in new data
    nodeData = data.nodes;
    edges = data.edges;

    clearInterval(msgInterval);
    hideGenerating();

    // Rebuild and animate
    buildNodes();
    resetView();
    animateNodes();

    // Toast
    showToast(`Mind map updated from "${documentTitle}"`);

  } catch (err) {
    clearInterval(msgInterval);
    hideGenerating();
    showToast(`Error: ${err.message}`, true);
    console.error('Mind map generation failed:', err);
  }
});

// ── Toast notification ─────────────────────────────────────────
function showToast(msg, isError = false) {
  const existing = document.getElementById('toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.textContent = msg;
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '80px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: isError ? '#3a1a1a' : '#1a2a1a',
    border: `1px solid ${isError ? 'rgba(240,100,80,0.4)' : 'rgba(80,210,120,0.4)'}`,
    color: isError ? '#f08070' : '#80d890',
    borderRadius: '10px',
    padding: '10px 20px',
    fontSize: '13px',
    zIndex: '700',
    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
    transition: 'opacity 0.4s',
    maxWidth: '400px',
    textAlign: 'center',
  });
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 400); }, 3500);
}

// ── Animate nodes in ──────────────────────────────────────────
function animateNodes() {
  nodeData.forEach((n, i) => {
    const el = nodeEls[n.id];
    if (!el) return;
    el.style.opacity = '0';
    setTimeout(() => { el.style.opacity = '1'; }, 60 + i * 16);
  });
}

// ── Init ──────────────────────────────────────────────────────
buildNodes();
render();
animateNodes();
