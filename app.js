// ============================================================
// Visionary Machines — home hydration + routing + marquee
// ============================================================

(function(){
  const D = window.VM_DATA;
  const I = D.IMG;

  // ─── Hero image ─────────────────────────────────────────────
  const heroImg = document.getElementById('hero-img');
  if (heroImg) heroImg.src = I.blake_ancient;

  // ─── Concept cards — real card scans as flip faces ──────────
  const qGrid = document.getElementById('q-grid');
  const N = c => 'assets/concept/card' + c + '-';
  function conceptCard(c, i){
    const idx = i + 1;
    const front = N(idx) + 'front.png';
    const back  = N(idx) + 'back.png';
    return `
      <article class="cflip" tabindex="0" aria-label="${c.title}"
               onclick="this.classList.toggle('flipped')"
               onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.classList.toggle('flipped');}">
        <div class="cflip-inner">
          <div class="cflip-face cflip-front">
            <img class="cc-scan" src="${front}" alt="${c.question}"
                 loading="lazy" onerror="this.closest('.cflip-front').classList.add('cc-missing');this.remove();">
            <div class="cc-ph">
              <span class="cc-accent qa-${c.accent}"></span>
              <span class="cc-num">${c.num}</span>
              <div class="cc-front-body">
                <span class="cc-tag">${c.tag}</span>
                <p class="cc-q">${c.question}</p>
                <span class="cc-ph-note">Card image to be added</span>
              </div>
            </div>
            <span class="cflip-hint">turn &#8635;</span>
          </div>
          <div class="cflip-face cflip-back">
            <img class="cc-scan" src="${back}" alt="${c.title} — concept text"
                 loading="lazy" onerror="this.closest('.cflip-back').classList.add('cc-missing');this.remove();">
            <div class="cc-back-ph">
              <span class="cc-back-tag">Concept Card ${c.num}</span>
              <h4 class="cc-title">${c.title}</h4>
              <p class="cc-ph-note dark">Back image to be added</p>
            </div>
          </div>
        </div>
      </article>`;
  }
  function moreCard(){
    return `
      <article class="cflip cflip-more" tabindex="0" role="button"
               onclick="openSubmitForm()"
               onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openSubmitForm();}">
        <div class="cflip-inner cflip-static">
          <div class="cflip-face cflip-front">
            <span class="cc-accent qa-c"></span>
            <span class="cc-num">VI</span>
            <div class="cc-front-body">
              <span class="cc-tag">And more…</span>
              <p class="cc-q">Propose your own line of enquiry that interrogates the relationship between humans and machines...</p>
              <span class="cc-more-cta">Call for Submissions &rarr;</span>
            </div>
          </div>
        </div>
      </article>`;
  }
  qGrid.innerHTML = D.CONCEPT_CARDS.map(conceptCard).join('') + moreCard();

  // ─── Source Kit · Visual Archive — 5 theme cards → sub-pages ─
  const kGrid = document.getElementById('themes-grid');
  kGrid.innerHTML = D.VISUAL_THEMES.map((t, i) => `
      <article class="theme-card" role="button" tabindex="0" onclick="openArchive(${i})"
               onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openArchive(${i});}">
        <div class="theme-bg"><img src="${t.cover}" alt="" loading="lazy"></div>
        <span class="theme-num">${t.n}</span>
        <div class="theme-body">
          <span class="theme-tag">${t.tag}</span>
          <h4 class="theme-h">${t.title}</h4>
          <p class="theme-q">${t.question}</p>
          <span class="theme-cta">View ${t.count} plates &rarr;</span>
        </div>
      </article>
    `).join('');

  // ─── Visual Archive sub-pages — flip-card galleries ─────────
  const archiveRoot = document.getElementById('pg-archive');

  function flipCard(it){
    const lic = it.license ? `<span class="fb-lic">${it.license}</span>` : '';
    const src = it.url ? `<a class="fb-src" href="${it.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">View source &#8599;</a>` : '';
    return `
      <article class="flip" tabindex="0" onclick="this.classList.toggle('flipped')"
               onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.classList.toggle('flipped');}">
        <div class="flip-inner">
          <div class="flip-front">
            <img src="${it.img}" alt="${it.shortTitle}" loading="lazy">
            <div class="flip-front-cap">
              <span class="fc-artist">${it.artist}</span>
              <span class="fc-title">${it.shortTitle}${it.year ? `, ${it.year}` : ''}</span>
            </div>
            <span class="flip-hint">i</span>
          </div>
          <div class="flip-back">
            <div class="fb-scroll">
              <span class="fb-meta">${it.artist}${it.year ? ` &middot; ${it.year}` : ''}</span>
              <h4 class="fb-title">${it.title}</h4>
              <p class="fb-comm">${it.commentary}</p>
              <div class="fb-foot">
                ${it.credit ? `<span class="fb-credit">${it.credit}</span>` : ''}
                ${lic}
                ${src}
              </div>
            </div>
          </div>
        </div>
      </article>`;
  }

  window.openArchive = function(i){
    const T = D.VISUAL_THEMES;
    const t = T[i];
    const tabs = T.map((x, j) => `
      <button class="gal-tab ${j===i?'on':''}" onclick="openArchive(${j})">
        <span class="gt-num">${x.n}</span>${x.title}
      </button>`).join('');
    archiveRoot.innerHTML = `
      <div class="gal-hd">
        <div class="gal-hd-bg" style="background-image:linear-gradient(rgba(13,11,9,0.62),rgba(13,11,9,0.82)),url('${t.cover}')"></div>
        <button class="post-back arch-back" onclick="go('home');setTimeout(function(){var e=document.getElementById('themes-grid');if(e)e.scrollIntoView({block:'start'});},40)">&larr; back to Source Kit</button>
        <p class="arch-eyebrow">Visual Archive &middot; Theme ${t.n} of VI</p>
        <h1><span class="arch-tag">${t.tag}</span><br><span class="acc">${t.title}</span></h1>
        <p>${t.question}</p>
      </div>
      <div class="gal-tabs arch-tabs">${tabs}</div>
      <div class="arch-pane">
        <div class="flip-grid">${t.items.map(flipCard).join('')}</div>
        <p class="arch-foot">All plates public domain or shared under the stated licence. Source Kit distributed to registered participants.</p>
      </div>
    `;
    go('archive');
  };

  // ─── Author cards — Primary Texts (portrait front / essay back) ──
  const authorGrid = document.getElementById('author-grid');
  if (authorGrid && D.AUTHOR_CARDS) {
    const A = D.AUTHOR_CARDS;
    const apath = (slug, side) => 'assets/authors/' + slug + '-' + side + '.png';

    authorGrid.innerHTML = A.map((a, i) => `
      <article class="acard" tabindex="0" role="button"
               aria-label="${a.name} — ${a.work}. Click to read in full."
               onclick="openReader(${i})"
               onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openReader(${i});}">
        <div class="acard-inner">
          <div class="acard-face acard-front">
            <img class="acard-scan" src="${apath(a.slug,'front')}" alt="Portrait of ${a.name}" loading="lazy">
            <span class="acard-flip-hint">turn &#8635;</span>
          </div>
          <div class="acard-face acard-back">
            <img class="acard-scan" src="${apath(a.slug,'back')}" alt="${a.work} — primary text" loading="lazy">
            <span class="acard-read">Read in full &#8599;</span>
          </div>
        </div>
        <div class="acard-cap">
          <span class="acard-name">${a.name}</span>
          <span class="acard-work"><em>${a.work}</em> &middot; ${a.year}</span>
        </div>
      </article>`).join('');

    // Full-screen reader for the dense essay backs
    const reader = document.createElement('div');
    reader.className = 'reader';
    reader.id = 'author-reader';
    reader.hidden = true;
    reader.innerHTML = `
      <div class="reader-scrim" onclick="closeReader()"></div>
      <button class="reader-close" aria-label="Close" onclick="closeReader()">&times;</button>
      <button class="reader-nav reader-prev" aria-label="Previous author" onclick="stepReader(-1)">&#8249;</button>
      <button class="reader-nav reader-next" aria-label="Next author" onclick="stepReader(1)">&#8250;</button>
      <figure class="reader-stage">
        <img class="reader-img" id="reader-img" alt="">
        <figcaption class="reader-cap" id="reader-cap"></figcaption>
      </figure>`;
    document.body.appendChild(reader);

    let readerIdx = 0;
    function paintReader(){
      const a = A[readerIdx];
      const img = document.getElementById('reader-img');
      img.src = apath(a.slug, 'back');
      img.alt = a.work + ' — primary text by ' + a.name;
      document.getElementById('reader-cap').innerHTML =
        '<span class="rc-name">' + a.name + '</span>' +
        '<span class="rc-work"><em>' + a.work + '</em> · ' + a.year + '</span>' +
        '<span class="rc-count">' + (readerIdx + 1) + ' / ' + A.length + '</span>';
    }
    window.openReader = function(i){
      readerIdx = i;
      paintReader();
      reader.hidden = false;
      document.body.classList.add('reader-open');
      reader.querySelector('.reader-close').focus();
    };
    window.closeReader = function(){
      reader.hidden = true;
      document.body.classList.remove('reader-open');
    };
    window.stepReader = function(d){
      readerIdx = (readerIdx + d + A.length) % A.length;
      paintReader();
    };
    document.addEventListener('keydown', e => {
      if (reader.hidden) return;
      if (e.key === 'Escape') closeReader();
      else if (e.key === 'ArrowLeft') stepReader(-1);
      else if (e.key === 'ArrowRight') stepReader(1);
    });
  }

  // Build Primary Texts (3 thematic parts) and Critical Theory (condensed)
  const ptList = document.getElementById('texts-list');
  if (ptList && D.PRIMARY_TEXTS_PARTS) {
    ptList.classList.add('parts-list');
    ptList.innerHTML = D.PRIMARY_TEXTS_PARTS.map(p => `
      <li class="part">
        <header class="part-head">
          <span class="part-num">${p.n}</span>
          <div>
            <h4 class="part-label">${p.label}</h4>
            <p class="part-dek">${p.dek}</p>
          </div>
        </header>
        <ul class="part-items">
        </ul>
      </li>
    `).join('');
  }

  // Critical Theory — condensed inline format, 3-column dense grid
  const ctList = document.getElementById('theory-list');
  if (ctList && D.CRITICAL_THEORY) {
    ctList.classList.add('theory-dense');
    ctList.innerHTML = D.CRITICAL_THEORY.map(t => `
      <li>
        <span class="ttl">${t.title}</span>
        <span class="byline">${t.author} <span class="yr">· ${t.year}</span></span>
      </li>
    `).join('');
  }

  // Marquee strip removed — section was redundant with the Visual Archive.

  // ─── Provocation rotator ────────────────────────────────────
  const provs = D.PROVOCATIONS;
  let pi = 0;
  const pel = document.getElementById('prov');
  function rot(){
    pel.style.opacity = 0;
    setTimeout(() => {
      pel.textContent = provs[pi++ % provs.length];
      pel.style.opacity = 1;
    }, 480);
  }
  rot();
  setInterval(rot, 4500);

  // ─── Routing ────────────────────────────────────────────────
  window.go = function(id){
    document.querySelectorAll('.page').forEach(p => p.classList.remove('on'));
    document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('on'));
    const pg = document.getElementById('pg-' + id);
    const nb = document.getElementById('nb-' + id);
    if (pg) pg.classList.add('on');
    if (nb) nb.classList.add('on');
    window.scrollTo(0, 0);
    // record on element for screen-label
    document.body.dataset.page = id;
  };

  // initial label
  document.body.dataset.page = 'home';
})();
