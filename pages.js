// ============================================================
// Visionary Machines — page renderers
// Text content sourced directly from the reference HTML + posters.
// ============================================================

(function(){
  const D = window.VM_DATA;
  const I = D.IMG;

  // ─── SUBMIT ─────────────────────────────────────────────────
  document.getElementById('pg-submit').innerHTML = `
    <div class="pg-hd">
      <div class="pg-hd-bg" style="background-image:linear-gradient(rgba(26,23,20,0.85),rgba(26,23,20,0.85)),url('${I.frankenstein_front}')"></div>
      <p class="pg-hd-lbl">HKU School of English</p>
      <h1>Open Call<br>for <span class="acc">Submissions</span></h1>
      <p class="pg-hd-sub">Visionary Machines: Romanticism &amp; Art/Tech Exhibition</p>
    </div>

    <div class="pg-body">
      <p>We invite students, researchers, artists, technologists, and interdisciplinary creatives to submit works in response to our key provocations. No prior coding or professional art experience is required. Submissions and participation are free of charge.</p>

      <h2>Key Dates</h2>
      <div class="dates-row">
        <div class="d-cell"><span class="d-lbl">Workshop</span><span class="d-val">18 Jul 2026</span></div>
        <div class="d-cell"><span class="d-lbl">Reg. Deadline</span><span class="d-val">11 Jul 2026</span></div>
        <div class="d-cell"><span class="d-lbl">Submission Deadline</span><span class="d-val">2 Aug 2026</span></div>
        <div class="d-cell"><span class="d-lbl">Shortlist</span><span class="d-val">9 Aug 2026</span></div>
        <div class="d-cell"><span class="d-lbl">Exhibition Opening</span><span class="d-val">27 Aug 2026</span></div>
      </div>

      <h2>Awards &amp; Recognition</h2>
      <div class="award-row">
        <div class="award-box"><span class="a-amt">HK$1,500</span><span class="a-name">Top Student Award</span></div>
        <div class="award-box"><span class="a-amt">HK$2,000</span><span class="a-name">Top Open Award</span></div>
        <div class="award-box"><span class="a-amt">HK$1,500</span><span class="a-name">First Runner Up Open Award</span></div>
      </div>
      <p>If a team wins, the prize will be delivered to the team representative to be shared among members.</p>
      <p>All selected exhibiting participants receive an official Certificate of Participation.</p>

      <h2>Accepted Mediums &amp; Formats</h2>
      <div class="m-grid">
        <div class="m-tag">Digital &amp; Non-Digital Visual Media</div>
        <div class="m-tag">Creative Writing &amp; Text-Based Works</div>
        <div class="m-tag">Conceptual Proposals / Concept Boards</div>
        <div class="m-tag">Audio-Visual &amp; Multimedia Design</div>
        <div class="m-tag">Digital Games &amp; Interactive Storytelling</div>
        <div class="m-tag">Generative &amp; Algorithmic Art (GenAI)</div>
        <div class="m-tag">Virtual, Augmented &amp; Extended Reality</div>
        <div class="m-tag">Projection Mapping &amp; Interactive Installations</div>
        <div class="m-tag">Web-Based Art &amp; Digital Experiences</div>
        <div class="m-tag">Live Performances (see guidelines)</div>
      </div>

      
      <p class="sub-note">All submissions must include a team member list (name and affiliation), a title, and a statement of intent (~300 words).</p>

      <h2>Frequently Asked Questions</h2>
      <div class="faq">
        <details><summary>Who can submit?</summary><p>Open to the HKU community and the wider public — students, researchers, artists, technologists, and interdisciplinary creatives are all welcome. No prior coding or professional art experience is required.</p></details>
        <details><summary>Do I need to be an HKU student?</summary><p>No. While hosted by HKU School of English, the exhibition is open to anyone. We especially encourage interdisciplinary teams pairing arts and technology backgrounds.</p></details>
        <details><summary>Can I submit as a team?</summary><p>Yes — both individual and team submissions are welcome. We particularly encourage Art + Tech pairings. Teams of any size are accepted; please list all member names and affiliations.</p></details>
        <details><summary>Is there a submission fee?</summary><p>No. Participation in both the Workshop and Exhibition is entirely free. Registration is required for the Workshop (deadline: 11 July 2026).</p></details>
        <details><summary>What should my statement of intent include?</summary><p>Your submission must include: (1) a team member list with names and affiliations, (2) a title, and (3) a statement of intent of approximately 300 words explaining your conceptual approach and its relation to the exhibition themes.</p></details>
        <details><summary>Can I mix digital and non-digital media?</summary><p>Absolutely — we actively encourage this. Hybrid analog-digital works are considered especially interesting by the panel.</p></details>
        <details><summary>What AI tools can I use?</summary><p>Any tools appropriate to your work. Suggested: Midjourney, Stable Diffusion, DALL-E 3 (image); Runway Gen-2, Pika, Sora (video); Udio or Suno (music); ElevenLabs (voice). The Source Kit provides primary texts and archival images as a starting point.</p></details>
        <details><summary>Where will the exhibition be held?</summary><p>Selected works exhibited at The University of Hong Kong, 27–30 August 2026. Opening ceremony: Saturday, 27 August.</p></details>
        <details><summary>What is the Source Kit?</summary><p>A curated data pack including: primary text extracts from Romantic-era literature; links to public-domain visual archives; a theory/criticism crib-sheet covering the keyword card concepts.</p></details>
      </div>

      <div style="margin-top:3rem;padding-top:2rem;border-top:1px solid rgba(26,23,20,.12)">
        <p style="color:var(--paper-mid);font-size:.88rem;margin-bottom:1.25rem">For inquiries: <a href="mailto:visionarymachines@hku.hk" style="color:var(--ink);font-weight:600;text-decoration:none;border-bottom:1px solid currentColor">visma@hku.hk</a></p>
        <button class="btn btn-paper" onclick="openSubmitForm()">Submit Your Work →</button>
      </div>
    </div>
  `;

  // ─── WORKSHOP ────────────────────────────────────────────────
  document.getElementById('pg-workshop').innerHTML = `
    <div class="pg-hd">
      <div class="pg-hd-bg" style="background-image:linear-gradient(rgba(26,23,20,0.78),rgba(26,23,20,0.78)),url('${I.iron_forge}')"></div>
      <p class="pg-hd-lbl">HKU Arts/Tech Lab XR Space</p>
      <h1>Art/Tech<br><span class="acc">Workshop</span></h1>
      <p class="pg-hd-sub">Visionary Machines &middot; 18 July 2026</p>
    </div>

    <div class="ws-info">
      <div class="ws-cell"><span class="ws-lbl">Date</span><span class="ws-val">Saturday, 18 July 2026</span></div>
      <div class="ws-cell"><span class="ws-lbl">Time</span><span class="ws-val">10:30 AM – 4:30 PM</span></div>
      <div class="ws-cell"><span class="ws-lbl">Venue</span><span class="ws-val">HKU Arts/Tech Lab XR Space</span></div>
      <div class="ws-cell"><span class="ws-lbl">Fee</span><span class="ws-val">Free — Registration Required</span></div>
    </div>

    <div class="ws-body">
      <h2>About the Workshop</h2>
    <p>In an age of generative AI, how can we use digital media to interrogate key aesthetic concepts such as originality, organicism, and the sublime? Following our call for submissions for the upcoming Visionary Machines exhibition in August, we are pleased to invite you to a hands-on, one-day workshop designed to bridge literary studies, digital humanities, and creative technology.</p>
    <p>Whether you are interested in learning more about Romanticism, picking up new creative skills, or meeting like-minded collaborators, this workshop offers a supportive space to experiment and create. No programming or technical background required. 
    </p>
      <h2>Schedule</h2>
      <table class="sched">
        <tr><td>10:30</td><td><strong>Registration &amp; Welcome</strong></td></tr>
        <tr><td>11:00</td><td><strong>Introduction</strong> — Romanticism and the Machine (Prof. Tara Lee)<span class="note">Key concepts, historical frameworks, and the Source Kit</span></td></tr>
        <tr><td>11:45</td><td><strong>Creative Prototyping with GenAI</strong></td></tr>
        <tr><td>12:30</td><td><strong>Intro to Audio-Reactive Installations</strong></td></tr>
        <tr><td>13:00</td><td><em>Light Lunch Provided</em></td></tr>
        <tr><td>13:30</td><td><strong>Creation Phase</strong> — Prototype your work<span class="note">AI tools, Source Kit materials, and RA support available</span></td></tr>
        <tr><td>15:30</td><td><strong>Showcase &amp; Reflection</strong> — Share prototypes, group discussion</td></tr>
      </table>

      <h2>Path to Exhibition</h2>
      <p>This workshop is the launchpad for the <em>Visionary Machines</em> Exhibition (August 2026). All attendees are invited to refine their prototypes into finished works and submit them to the main exhibition.</p>
      <p>Final exhibition selections are eligible for <strong>Student Award: HK$1,500 / Open Award: HK$2,000</strong> and an official Certificate of Participation.</p>

      <h2>Eligibility &amp; How to Apply</h2>
      <p>Open to the HKU community and the wider public. No prior coding or art experience required. Registrants will receive a follow-up email with instructions on what to bring (e.g. laptop, tablet).</p>
    </div>

    <div class="ws-cta">
      <div>
        <p class="ws-cta-txt">Ready to build something sublime?</p>
        <span class="ws-cta-sub">Registration deadline: 11 July 2026 &middot; Max 50 places</span>
      </div>
      <button class="btn btn-paper" onclick="openRegForm()">Register Now →</button>

      </div>
  `;

  // ─── BLOG (index + featured post) ───────────────────────────
  function renderBlogIndex() {
    const cards = D.BLOG.map((p, i) => `
      <article class="blog-card" data-idx="${i}" ${p.live ? 'data-live="1"' : ''}>
        <div class="bc-img"><img src="${I[p.img]}" alt="" referrerpolicy="no-referrer" loading="lazy"></div>
        <div class="bc-body">
          <div class="bc-num"><span class="accent-dot"></span>Essay ${p.num} &middot; ${p.theme}</div>
          <div class="bc-ttl">${p.title}</div>
          <div class="bc-dek">${p.sub}</div>
          <div class="bc-read ${p.live ? 'live' : ''}">${p.live ? 'Read essay →' : 'Coming soon'}</div>
        </div>
      </article>
    `).join('');

    return `
      <div class="pg-hd">
        <div class="pg-hd-bg" style="background-image:linear-gradient(rgba(26,23,20,0.85),rgba(26,23,20,0.85)),url('${I.mary_shelley}')"></div>
        <p class="pg-hd-lbl">Perspectives</p>
        <h1>Theme<br><span class="acc">Essays</span></h1>
        <p class="pg-hd-sub">Five long-form posts on the keywords underlying the exhibition.</p>
      </div>
      <div class="blog-index">
        <div class="blog-grid">${cards}</div>
      </div>
    `;
  }

  function renderBlogPost(idx){
    const p = D.BLOG[idx] || D.BLOG.find(b => b.live);
    return `
      <div class="blog-hd">
        <div class="blog-hd-bg" style="background-image:linear-gradient(rgba(26,23,20,0.78),rgba(26,23,20,0.88)),url('${I[p.img]}')"></div>
        <button class="post-back" onclick="renderBlog('index')">← back to all essays</button>
        <p class="post-meta">Essay ${p.num} &middot; ${p.theme} &middot; ${p.date || ''}</p>
        <h1 class="post-title">${p.htitle || p.title}</h1>
        <p class="post-sub">${p.sub}${p.author ? ` &middot; <span class="post-byline">${p.author}</span>` : ''}</p>
      </div>
      <div class="post-body">
        ${p.body || ''}
        <div style="margin-top:3rem;padding-top:1.75rem;border-top:1px solid rgba(26,23,20,.13)">
          <button class="btn btn-paper" onclick="openSubmitForm()">Submit Your Work →</button>
        </div>
      </div>
    `;
  }

  window.renderBlog = function(mode, idx){
    const root = document.getElementById('pg-blog');
    root.innerHTML = (mode === 'post') ? renderBlogPost(idx) : renderBlogIndex();
    if (mode !== 'post') {
      root.querySelectorAll('.blog-card').forEach(c => {
        c.addEventListener('click', () => {
          if (c.dataset.live) window.renderBlog('post', Number(c.dataset.idx));
        });
      });
    }
    window.scrollTo(0, 0);
  };
  window.renderBlog('index');

  // ─── GALLERY ────────────────────────────────────────────────
  function makeMasonry() {
    return Array.from({length: 12}).map((_, i) => `<div class="gal-ph">Photo ${String(i+1).padStart(2,'0')}</div>`).join('');
  }
  function makeFilmstrip() {
    return ['Day 1 · Workshop', 'Day 2 · Creation', 'Day 3 · Opening']
      .map((d, di) => `
        <div class="filmstrip-day">${d}</div>
        <div class="filmstrip">
          ${Array.from({length: 8}).map((_, i) => `<div class="gal-ph ${i%3===0?'tall':''}">D${di+1}–${String(i+1).padStart(2,'0')}</div>`).join('')}
        </div>
      `).join('');
  }
  function makePolaroid() {
    const items = [
      { l: 60,  t: 20,  r: -3, c: 'opening night' },
      { l: 230, t: 50,  r: 2,  c: 'team A · 03:00' },
      { l: 410, t: 12,  r: -4, c: 'first frame' },
      { l: 590, t: 60,  r: 3,  c: 'lecture · row 3' },
      { l: 130, t: 230, r: 4,  c: 'after the break' },
      { l: 310, t: 250, r: -2, c: 'orchestra of fans' },
      { l: 490, t: 240, r: 3,  c: 'good light, 06:14' },
    ];
    return `<div class="polaroid-board">${items.map((p, i) => `
      <div class="polaroid" style="left:${p.l}px;top:${p.t}px;transform:rotate(${p.r}deg)">
        <div class="ph">IMG-${String(i+1).padStart(2,'0')}</div>
        <div class="cap">${p.c}</div>
      </div>
    `).join('')}</div>`;
  }

  document.getElementById('pg-gallery').innerHTML = `
    <div class="gal-hd">
      <div class="gal-hd-bg"></div>
      <p style="font-family:'Barlow Condensed',sans-serif;font-size:.74rem;letter-spacing:.22em;text-transform:uppercase;color:var(--mid);margin-bottom:.85rem">Visionary Machines</p>
      <h1>Exhibition<br><span class="acc">Gallery</span></h1>
      <p>Event photographs and selected works will appear here after the Exhibition Opening, 22 August 2026.</p>
    </div>

    <div class="gal-notice">
      <span class="dot"></span>
      <p>This section will be updated after the Opening Ceremony on <strong style="color:rgba(237,232,222,.7)">22 August 2026</strong>. Follow us on social media for live updates. &nbsp;[INSERT SOCIAL HANDLE]</p>
    </div>

    <div class="gal-tabs">
      <button class="gal-tab on" data-tab="grid">Grid</button>
      <button class="gal-tab"     data-tab="film">Filmstrip · by day</button>
      <button class="gal-tab"     data-tab="poly">Polaroid board</button>
    </div>

    <div class="gal-pane on" data-pane="grid">
      <h2>Event Photography</h2>
      <div class="gal-grid">${makeMasonry()}</div>
    </div>
    <div class="gal-pane" data-pane="film">
      <h2>Event Photography &mdash; sequenced</h2>
      ${makeFilmstrip()}
    </div>
    <div class="gal-pane" data-pane="poly">
      <h2>Event Photography &mdash; hand-laid</h2>
      ${makePolaroid()}
    </div>

    <div class="gal-submit">
      <div>
        <p>Have a photo from the workshop or exhibition?</p>
        <span>A drop-folder will be made available to attendees during the event.</span>
      </div>
      <button class="btn btn-ghost">Open drop folder →</button>
    </div>
  `;

  // Gallery tab wiring
  document.querySelectorAll('.gal-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.gal-tab').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      document.querySelectorAll('.gal-pane').forEach(p => p.classList.toggle('on', p.dataset.pane === btn.dataset.tab));
    });
  });

})();
