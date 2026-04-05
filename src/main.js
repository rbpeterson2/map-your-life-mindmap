// ── Default mind map data (Map Your Life) ─────────────────────
const DEFAULT_NODES = [
  { id: 'root', label: 'Map Your Life', sub: 'Coin Experience 4/11/26', x: 0, y: 0, cls: 'root', detail: 'A personal life mapping exercise exploring the key elements that make up who you are — family, friends, hobbies, career, and the moments that shaped your leadership.' },

  { id: 'family', label: 'Family', sub: '', x: -560, y: -260, cls: 'family branch-head', detail: 'The people you didn\'t choose but who shaped you most. From parents to in-laws, each relationship left a lasting imprint.' },
  { id: 'dad', label: 'Dad — Bruce', sub: 'Faith, outdoors, DIY', x: -760, y: -420, cls: 'family', detail: 'Passed away June 2023. There were highs and lows, but everything he did was out of love. He set the bedrock for a foundation of life in faith — outdoors, hunting, fishing, and doing things yourself. "If you can read it, you can do it." "What\'s the plan." "1 Second Forgiveness."' },
  { id: 'mom', label: 'Mom — Cheryl', sub: 'Art, word games, dark humor', x: -760, y: -280, cls: 'family', detail: 'Love of word games, drawing, painting, and art. Quirky humor that is sometimes dark. Love of TV, movies, and reading — especially murder, intrigue, and spy novels.' },
  { id: 'alyssa', label: 'Alyssa', sub: 'Wife · Met in 5th grade', x: -760, y: -140, cls: 'family', detail: 'Drives me to be the best person that I can be, because she deserves the best. Met in 5th grade; dated briefly in 8th grade; started dating again the summer between junior and senior year of high school. No children.' },
  { id: 'siblings', label: 'Siblings', sub: 'Justin, Melanie', x: -540, y: -440, cls: 'family', detail: 'Couldn\'t be more different, yet share the same core. A safe, chaos-free childhood instilled values and character traits that stuck. Justin married Ann, Melanie married Bucky, and sister-in-law Kim married Victor.' },
  { id: 'inlaws', label: 'In-Laws', sub: 'Susan & Ken (dec.)', x: -560, y: -120, cls: 'family', detail: 'Both Susan and Ken are deceased. Spent a lot of time with them and loved them dearly. They truly took him in as a son and loved him unconditionally.' },

  { id: 'friends', label: 'Friends', sub: '', x: -200, y: -420, cls: 'friends branch-head', detail: 'From a handful of close childhood bonds to a wider adult circle. Usually one or two close friends at a time — quality over quantity has always been the theme.' },
  { id: 'randy', label: 'Randy', sub: 'Adolescent → Adult', x: -320, y: -580, cls: 'friends', detail: 'The one constant. The only really close friend from adolescence, and that friendship carried all the way through adulthood. Now lives nearby, though family life keeps him busy.' },
  { id: 'teen-friends', label: 'Teen Circle', sub: 'Scott, Jill, Courtney, Amy', x: -120, y: -590, cls: 'friends', detail: 'The core group from 9th–12th grade: Scott, Randy, Jill, Courtney, Alyssa, and Amy. Still sees Courtney, Jill, Amy, and Scott often. These friendships outlasted the hallways.' },
  { id: 'college-friends', label: 'College Circle', sub: 'Eric, Ramsey, Allison, Steph', x: -240, y: -700, cls: 'friends', detail: 'A core group formed in college: Eric, Ramsey, Allison, and Steph. Kept in touch with high school friends alongside them. Connection faded post-graduation as life moved in different directions.' },
  { id: 'mens-alliance', label: "Men's Alliance", sub: 'Brotherhood, now', x: -60, y: -480, cls: 'friends', detail: 'The current brotherhood of men in his life. An intentional community that matters deeply right now.' },

  { id: 'hobbies', label: 'Hobbies', sub: '', x: 200, y: -420, cls: 'hobbies branch-head', detail: 'What you choose to do with your time reveals character. From outdoor endurance to artistic precision to competitive athletics.' },
  { id: 'hiking', label: 'Hiking', sub: '26 national parks', x: 60, y: -590, cls: 'hobbies', detail: 'Has visited 26 National Parks and been to every state except Alaska. The outdoors is a lifelong companion — a love inherited directly from Dad.' },
  { id: 'photography', label: 'Photography', sub: 'Art meets precision', x: 220, y: -600, cls: 'hobbies', detail: 'Always liked art, but photography offered something special: the precision of a camera fused with creative expression. Kind of analytical, but at the same time art.' },
  { id: 'music', label: 'Music', sub: 'Trumpet, full brass', x: 360, y: -530, cls: 'hobbies', detail: 'Played trumpet from 5th through 12th grade as the primary instrument. By the end of high school, could play anything in the brass section.' },
  { id: 'sports', label: 'Sports', sub: 'Swimming, wrestling', x: 100, y: -480, cls: 'hobbies', detail: 'Was allowed on the swim team at just 4 years old — pushing past what others thought possible. Wrestling followed. Competitive and physical from the very start.' },

  { id: 'events', label: 'Life Events', sub: '& Lessons Learned', x: 560, y: -260, cls: 'events branch-head', detail: 'All of the random ones that stand out and had some kind of impact — each paired with something true learned from living through it.' },
  { id: 'ev-swimteam', label: 'Swim team at 4', sub: 'Push past what others expect', x: 700, y: -440, cls: 'events', detail: 'Was allowed on the swim team at just 4 years old. Lesson: Pushing yourself can make you achieve things others don\'t think you can.' },
  { id: 'ev-faith', label: 'Church camp storm', sub: 'God is good. All the time.', x: 730, y: -320, cls: 'events', detail: 'Survived a crazy storm while at church camp. Lesson: God is with you and is good. All the time.' },
  { id: 'ev-loss', label: 'Loss of a friend', sub: 'Rafting tragedy', x: 750, y: -200, cls: 'events', detail: 'A friend died on a white water rafting trip — she had been sitting next to Alyssa on a church youth group trip. Lesson: You only have people in your life for a short time.' },
  { id: 'ev-college', label: 'College rejections', sub: "It's who you know", x: 740, y: -80, cls: 'events', detail: 'Not accepted into any colleges initially. Then scrambled when not accepted into the second half of the degree program. A neighbor\'s connection at Penn State opened the Plastics program. Lesson: Sometimes it\'s literally about who you know.' },
  { id: 'ev-marriage', label: 'Marriage', sub: 'Easy to commit, hard to honor', x: 720, y: 40, cls: 'events', detail: 'Getting married. Lesson: Making a commitment is easy. Honoring it is difficult.' },
  { id: 'ev-terminated', label: 'Terminated while traveling', sub: 'Ask the question', x: 700, y: 160, cls: 'events', detail: 'Was terminated while traveling. Called the loan officer from 5 months prior asking if he knew anyone hiring. Lesson: The only way you know an answer to a question is if you ask it.' },
  { id: 'ev-grief', label: 'Loss & grief', sub: 'Don\'t wait. Talk to God.', x: 680, y: 280, cls: 'events', detail: 'Alyssa\'s dad died, then her mom three years later. Also went through several miscarriages. Lesson: Don\'t wait until you\'re retired to do the things you want. It\'s okay to be angry with God — he\'s there for you to tell him when you are.' },
  { id: 'ev-ownership', label: 'Ownership & removal', sub: 'Stretch to grow. Truth has a cost.', x: 650, y: 390, cls: 'events', detail: 'Became partner/owner of a company — you have to stretch sometimes to see growth, even when it\'s scary. Bought a lake house — audacious goals can be reached. Then was removed as partner/owner. Lesson: Sometimes people who ask for the truth aren\'t ready to hear it.' },

  { id: 'career', label: 'Career', sub: '', x: 0, y: 420, cls: 'career branch-head', detail: 'A winding path from plastic injection sales to independent consulting. Don\'t find your identity in what you do to earn money.' },
  { id: 'c1', label: '2001–2003', sub: 'Plastics sales', x: -300, y: 560, cls: 'career', detail: 'Sales for a plastic injection molding manufacturer. The first job out of school.' },
  { id: 'c2', label: '2004–2010', sub: 'Banking: loans → IT → PM', x: -110, y: 580, cls: 'career', detail: 'Started as a loan officer at a bank. Transitioned into IT and Project Management, then Corporate PM and Change Management — all at the same bank.' },
  { id: 'c3', label: '2010–2025', sub: 'Startup → Owner', x: 110, y: 580, cls: 'career', detail: 'Business Analyst at a startup, then Business Line Manager, then Owner/Partner/Executive at the same company through 2025.' },
  { id: 'c4', label: '2026–', sub: 'Independent consultant', x: 300, y: 560, cls: 'career', detail: 'Now self-employed as a consultant. A new chapter that reflects the lessons of every previous one.' },

  { id: 'leadership', label: 'Leadership', sub: '', x: -560, y: 260, cls: 'leadership branch-head', detail: 'Leadership isn\'t a title — it\'s the default posture wherever you show up. Shaped by watching a father who gave equal attention to everyone.' },
  { id: 'l-dad', label: "Dad's example", sub: 'Engineer or janitor — same respect', x: -720, y: 140, cls: 'leadership', detail: 'Not a single event but a pattern — watching Dad own a business and treat everyone fairly. Whether an engineer or the janitor, everyone got the same respect and attention in the conversation.' },
  { id: 'l-roles', label: 'Roles held', sub: 'JV mgr, exec, tribe leader', x: -720, y: 300, cls: 'leadership', detail: 'Builder Joint Venture manager. Executive prior to ownership. Executive after ownership. Specter Tribe leader. Leadership at work and in the Outdoor Experience — anywhere he\'s involved.' },
  { id: 'l-style', label: 'Style', sub: 'Fair · Present · Servant', x: -680, y: 440, cls: 'leadership', detail: 'A leadership style rooted in fairness, presence, and service. Showing up the same way for everyone, everywhere. Still being refined.' },
];

const DEFAULT_EDGES = [
  ['root','family'],['root','friends'],['root','hobbies'],['root','events'],['root','career'],['root','leadership'],
  ['family','dad'],['family','mom'],['family','alyssa'],['family','siblings'],['family','inlaws'],
  ['friends','randy'],['friends','teen-friends'],['friends','college-friends'],['friends','mens-alliance'],
  ['hobbies','hiking'],['hobbies','photography'],['hobbies','music'],['hobbies','sports'],
  ['events','ev-swimteam'],['events','ev-faith'],['events','ev-loss'],['events','ev-college'],['events','ev-marriage'],['events','ev-terminated'],['events','ev-grief'],['events','ev-ownership'],
  ['career','c1'],['career','c2'],['career','c3'],['career','c4'],
  ['leadership','l-dad'],['leadership','l-roles'],['leadership','l-style'],
];

const DEFAULT_MD = `# Map Your Life
## Coin Experience 4/11/26

### Elements of Life
There are key elements of one's life that are part of you.
1. **Family** - most of us don't get to choose this one
2. **Friends** - your associations
3. **Hobbies** - what you choose to do with your time
4. **Occupation** - how do you provide
5. **Life Events** - the scenarios you find yourself in, on purpose or by accident

---

## People & Influencers

### Family

**Immediate** — 3rd and last child.

#### My Dad, Bruce
Whom I share a name with passed away June 2023. He provided a lot of insight and instruction in my life. There were highs and lows in our relationship but as I've matured, I understand everything that he did was out of love and most times everything that I did was out of misunderstanding. ***He set the bedrock for having a foundation of life in faith.*** Love of outdoors, hunting, fishing; being able to try and do all things yourself at least once. "If you can read it, you can do it." "What's the plan." "1 Second Forgiveness."

#### My Mom, Cheryl
Love of word games, drawing/painting/art, quirky humor which is sometimes dark, love of TV/movies, reading especially murder/intrigue/spy.

#### My Siblings
We couldn't be more different but there are a lot of ways that we're the same too — having had a very safe and chaos-free childhood, we got instilled with the values and character traits that our parents wanted us to have.

**Alyssa** — Drives me to be the best person that I can be, because she deserves the best. We love spending time with each other. Met in 5th grade; dated 1 year in 8th grade; started dating again summer between Jr and Sr of high school. **No children.**

**Extended** — In Laws: Both Mother-in-law, Susan, and Father-in-law, Ken, are deceased. Spent a lot of time with them and loved them dearly. They truly took me in as a son and loved me unconditionally. Brother: Justin (married Ann). Sister: Melanie (married Bucky). Sister-in-law: Kim (married Victor). They all have children and we've been fortunate to be part of their lives in some capacity.

---

### Friends

1. **Youth** (before 5th grade) — Didn't have a lot of friends growing up. Usually had one or maybe two close friends.
2. **Adolescent** (5th–8th grade) — Really only had one really good friend, Randy.
3. **Teens** (9th–12th) — Still had Randy but expanded to a core group of Scott, Randy, Jill, Courtney, Alyssa, Amy.
4. **Early Adult** (College) — Kept in touch with high school friends; had a core group: Eric, Ramsey, Allison, Steph.
5. **Adult** (post-college to now) — Randy now lives nearby but family life keeps him busy; see Courtney, Jill, Amy, Scott often. Haven't really kept in touch with Eric, Ramsey, Allison, or Steph. But now I have a brotherhood of guys here at Men's Alliance.

---

### Hobbies

1. **Hiking** — Have been to 26 National Parks; been in every state except Alaska.
2. **Photography** — Have always liked art but liked the precision of photography with the camera; kind of analytical but at the same time art.
3. **Sports** — Growing up it was a lot of sports: Swimming and then Wrestling.
4. **Music** — Played trumpet from 5th to 12th grade as primary instrument; by end of high school, could play anything in the brass section.

---

## Significant Events & Lessons Learned

### Life Events
These are all of the random ones that stand out that had some kind of impact.

1. Being allowed to be on the swim team at 4 years old — *Pushing yourself can make you achieve things others don't think you can.*
2. Surviving a crazy storm while at church camp — *God is with you and is good. All the time.*
3. Friend dying in a white water rafting trip (she was sitting next to Alyssa; it was a church youth group trip) — *You only have people a short time in your life.*
4. Not being accepted into any colleges; neighbor's connection at Penn State got me into the Plastics program — *Sometimes it's literally about who you know.*
5. Not being accepted into the 2nd half of the degree program and scrambling on what to do next — *Don't make mole hills into mountains. Step back and make a plan.*
6. Getting married — *Making a commitment is easy. Honoring it is difficult.*
7. Being terminated while traveling — *Things in life happen whether you're ready for them or not.*
8. Calling the loan officer that did our loan 5 months prior after getting termed, asking if he knew anyone hiring — *The only way you know an answer to a question is if you ask it.*
9. Going through several mergers — *Your occupation isn't you. Don't find your identity in what you do to earn money.*
10. Alyssa's Dad dying and then 3 years later, her Mom dying — *Don't wait until you're retired to do the things that you want to do. It's okay to be angry with God and he's there for you to tell him when you are.*
11. Having several miscarriages — *No fault of your own, your plans are not always going to work the way you want them to. It's okay to be angry with God.*
12. Becoming partner/owner of a company — *You have to stretch sometimes to see growth, even when it's scary.*
13. Bought a lake house — *Audacious goals can be reached.*
14. Being removed as a partner/owner of a company — *Sometimes people that ask for the truth aren't ready to hear it.*

---

## Leadership Roles Held

1. Builder Joint Venture manager
2. Executive in company prior to ownership
3. Executive in company after ownership
4. Specter Tribe
5. Anywhere that I'm involved: Leadership at Work, Outdoor Experience

### Occupations

- **2001–2003**: Sales for Plastic Injection Molding manufacturer
- **2004–2010**: Bank — loan officer → IT/PM → Corporate PM & Change Management
- **2010–2025**: Startup — Business Analyst → Business line manager → Owner/Partner/Executive
- **2026–**: Consultant, self-employed

### Events that Shaped My Leadership Style

Not a single event, but as my Dad owned a business, seeing how he interacted with everyone and treated them fairly — whether they were an engineer or they were the janitor, everyone got the same amount of respect and attention in the conversation that he was having with them.`;

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
