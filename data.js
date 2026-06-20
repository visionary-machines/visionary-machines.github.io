// ============================================================
// Visionary Machines — content data
// Real local images (assets/) for the 5 we have; SVG plate
// placeholders for any others. Real Wikimedia URLs kept in
// REAL_URL for production swap.
// ============================================================

(function(){
  // ─── SVG plate placeholder (fallback only) ─────────────────
  function plate(title, date, accentHex, plateNum) {
    const safe = (s) => String(s).replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, '&');
    const t = (s, max = 38) => { s = safe(s); return s.length > max ? s.slice(0, max - 1) + '…' : s; };
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="g${plateNum}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2D2519"/>
      <stop offset="1" stop-color="#181410"/>
    </linearGradient>
    <pattern id="h${plateNum}" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="7" stroke="#EDE8DE" stroke-width="0.35" stroke-opacity="0.06"/>
    </pattern>
  </defs>
  <rect width="400" height="300" fill="url(#g${plateNum})"/>
  <rect width="400" height="300" fill="url(#h${plateNum})"/>
  <rect x="16" y="16" width="368" height="268" fill="none" stroke="#7A6E60" stroke-width="0.5" stroke-opacity="0.45"/>
  <circle cx="200" cy="138" r="3" fill="${accentHex}" fill-opacity="0.85"/>
  <circle cx="200" cy="138" r="9" fill="none" stroke="${accentHex}" stroke-width="0.6" stroke-opacity="0.4"/>
  <text x="32" y="46" font-family="Barlow Condensed, sans-serif" font-size="10" font-weight="700" letter-spacing="3" fill="#7A6E60">PLATE ${plateNum}</text>
  <text x="368" y="46" text-anchor="end" font-family="Barlow Condensed, sans-serif" font-size="10" letter-spacing="2.5" fill="${accentHex}" fill-opacity="0.7">VM·2026</text>
  <text x="200" y="248" text-anchor="middle" font-family="Cormorant, Georgia, serif" font-style="italic" font-size="17" fill="#EDE8DE">${t(title)}</text>
  <text x="200" y="266" text-anchor="middle" font-family="Barlow Condensed, sans-serif" font-size="9" letter-spacing="2.2" fill="#7A6E60">${t(date, 50).toUpperCase()}</text>
</svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }
  const ACC = { g: '#AAFF00', y: '#FFE620', o: '#FF6A1F', p: '#C4AAFF' };

  // ─── Image table ────────────────────────────────────────────
  // Asset paths. When running as a bundled standalone HTML, window.__resources[k]
  // contains a blob URL — use that. Otherwise fall back to the on-disk path.
  const R = (typeof window !== 'undefined' && window.__resources) || {};
  const IMG = {
    blake_ancient:      R.blake_ancient      || 'assets/blake_ancient.jpg',
    frankenstein_front: R.frankenstein_front || 'assets/frankenstein_front.jpg',
    spinning_jenny:     R.spinning_jenny     || 'assets/spinning_jenny.jpg',
    iron_forge:         R.iron_forge         || 'assets/iron_forge.jpg',
    luddite:            R.luddite            || 'assets/luddite.jpg',
    // Still placeholders — to be supplied:
    mary_shelley: plate('Mary Wollstonecraft Shelley', 'Portrait by R. Rothwell, c.1840', ACC.p, 'III'),
    diorama:      plate('Diorama de Daguerre et Bouton', 'Paris, 1822',                    ACC.y, 'VII'),
  };

  const REAL_URL = {
    blake_ancient:      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Blake_Ancient_of_Days.jpg/700px-Blake_Ancient_of_Days.jpg',
    frankenstein_front: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Frankenstein_frontispiece_1831.jpg/480px-Frankenstein_frontispiece_1831.jpg',
    mary_shelley:       'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Mary_Shelley.jpeg/480px-Mary_Shelley.jpeg',
    luddite:            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Luddite.jpg/480px-Luddite.jpg',
    spinning_jenny:     'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Zeichnung_Spinning_jenny.jpg/400px-Zeichnung_Spinning_jenny.jpg',
    iron_forge:         'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Joseph_Wright_-_An_Iron_Forge_-_Google_Art_Project.jpg/700px-Joseph_Wright_-_An_Iron_Forge_-_Google_Art_Project.jpg',
    diorama:            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Diorama_de_Daguerre_y_Bouton.jpg/700px-Diorama_de_Daguerre_y_Bouton.jpg',
  };

  window.VM_DATA = {
    IMG,
    REAL_URL,

    PROVOCATIONS: [
      'Can Artificial Intelligence ever truly “feel”, “create”, or “imagine”?',
      'Should we embrace or reject disruptive new technologies?',
      'What is the difference between artificial machines and organic bodies?',
      'Is there something Frankenstein-like about emerging technologies?',
      'How might Romanticism remain relevant to the 21st century?',
    ],

    QUESTIONS: [
      { num: '01', theme: 'The Creative Mind',        accent: 'g', img: 'frankenstein_front', text: 'Can Artificial Intelligence ever truly “feel”, “create”, or “imagine”?' },
      { num: '02', theme: 'Resisting the Machine',    accent: 'y', img: 'luddite',             text: 'Should we embrace or reject disruptive new technologies?' },
      { num: '03', theme: 'Sensibility & Embodiment', accent: 'o', img: 'spinning_jenny',      text: 'What is the difference between artificial machines and organic bodies?' },
      { num: '04', theme: 'Remediation',              accent: 'p', img: 'iron_forge',          text: 'Is there something Frankenstein-like about emerging technologies?' },
      { num: '05', theme: 'The Sublime',              accent: 'g', img: 'blake_ancient',       text: 'How might Romanticism remain relevant to the 21st century?' },
      { num: '06', theme: 'And more…',                accent: 'c', img: null,                  text: 'Explore your own line of enquiry — propose a theme that crosses Romanticism and the machine.', more: true },
    ],

    // ─── Source Kit · A · Primary Texts ──────────────────────
    // Organised in three parts after the critical spectrum:
    //   I  · The Critics       — horror at the machine
    //   II · The Ambivalent    — skeptical awe, uneasy magic
    //   III· The Utopians      — progress, magic, technological liberation
    PRIMARY_TEXTS_PARTS: [
      {
        n: 'I', label: 'The Critics',
        dek: 'Horror at the machine — the unnatural, the rogue creation, the loss of soul.',
        items: [
          { author: 'Mary Shelley',     title: 'Frankenstein; or, The Modern Prometheus', year: '1818' },
          { author: 'Robert Southey',   title: 'The Curse of Kehama & Letters from England', year: '1810 · 1807' },
          { author: 'Thomas De Quincey', title: '“The English Mail-Coach” & Posthumous Works', year: '1849' },
        ],
      },
      {
        n: 'II', label: 'The Ambivalent',
        dek: 'Skepticism, magic, and uneasy awe — the engine as both wonder and tyrant.',
        items: [
          { author: 'Thomas Carlyle',     title: '“Signs of the Times”',                                 year: '1829' },
          { author: 'William Blake',      title: 'Milton, Jerusalem & “The Tyger”',                     year: '1794–1820' },
          { author: 'William Wordsworth', title: 'The Excursion & “Steamboats, Viaducts, and Railways”', year: '1814 · 1833' },
          { author: 'Joanna Baillie',     title: '“Address to a Steam Vessel”',                          year: 'c.1823' },
          { author: 'Dorothy Wordsworth', title: 'Recollections of a Tour Made in Scotland',             year: '1803' },
        ],
      },
      {
        n: 'III', label: 'The Utopians',
        dek: 'Progress, magic, and utopian power — the machine as liberation and divine craft.',
        items: [
          { author: 'Frances (Fanny) Kemble', title: 'Record of a Girlhood',                            year: '1830' },
          { author: 'Erasmus Darwin',         title: 'The Botanic Garden, Part I',                      year: '1791' },
          { author: 'Percy Bysshe Shelley',   title: 'Queen Mab, Canto I',                              year: '1813' },
          { author: 'Ada Lovelace',           title: 'Notes on the Analytical Engine',                  year: '1843' },
          { author: 'Ellen Johnston',         title: 'Autobiography, Poems and Songs',                  year: '1867' },
        ],
      },
    ],

    // ─── Source Kit · B · Critical Theory ────────────────────
    CRITICAL_THEORY: [
      { author: 'F. D. Klingender',     title: 'Art and the Industrial Revolution',        year: '1947',        ctx: 'The visual record of mechanisation in British art.',    keys: ['Industry', 'Aesthetics'] },
      { author: 'Jean Baudrillard',     title: 'Simulacra and Simulation',                 year: '1981',        ctx: 'When the copy precedes — and replaces — the real.',     keys: ['Simulacra', 'Hyperreality'] },
      { author: 'Guy Debord',           title: 'The Society of the Spectacle',             year: '1967',        ctx: 'Life reduced to a procession of consumable images.',    keys: ['Spectacle', 'Mediation'] },
      { author: 'Sigmund Freud',        title: '“The Uncanny” (Das Unheimliche)',          year: '1919',        ctx: 'The familiar made strange. Automata, doubles, dolls.',  keys: ['The Uncanny', 'Automata'] },
      { author: 'David E. Nye',         title: 'American Technological Sublime',           year: '1994',        ctx: 'Awe redirected from God and Nature toward bridges and grids.', keys: ['Technological Sublime'] },
      { author: 'Vincent Mosco',        title: 'The Digital Sublime',                       year: '2004',        ctx: 'Mythologies of cyberspace, the Cloud, and AI.',          keys: ['Digital Sublime', 'Myth'] },
      { author: 'N. Katherine Hayles',  title: 'How We Became Posthuman',                  year: '1999',        ctx: 'The fluid border between body, code, and cognition.',   keys: ['Posthumanism', 'The Body'] },
      { author: 'Bolter & Grusin',      title: 'Remediation: Understanding New Media',     year: '1999',        ctx: 'How new media absorb, recycle, and reshape old forms.', keys: ['Remediation', 'New Media'] },
      { author: 'John Tresch',          title: 'The Romantic Machine: Utopian Science and Technology After Napoleon', year: '2012', ctx: 'University of Chicago Press — the machine as Romantic, not anti-Romantic.', keys: ['Romantic Science', 'Utopia'] },
      { author: 'Michele Speitz',       title: 'The Romantic Sublime and Representations of Technology', year: '2024', ctx: 'Liverpool University Press — the sublime engineered.',  keys: ['Sublime', 'Technology'] },
      { author: 'Demson & Clason (eds)', title: 'Romantic Automata: Exhibits, Figures, and Organisms', year: '2020', ctx: 'Bucknell University Press — the living machine on display.', keys: ['Automata', 'Organism'] },
      { author: 'Peter Otto',           title: 'Multiplying Worlds: Romanticism, Modernity, and the Emergence of Virtual Reality', year: '2011', ctx: 'Oxford University Press — VR’s Romantic prehistory.', keys: ['Virtual Reality', 'Modernity'] },
    ],

    // ─── Source Kit · C · Visual Archive — 5 thematic clusters ─
    VISUAL_THEMES: [
      {
        n: 'I',   tag: 'Industry',
        title: 'The Industrial Sublime',
        question: 'How did machines and infrastructure become awe-inspiring — and terrifying?',
        types: 'Furnaces · ironworks · mines · mills · bridges · railways · tunnels · steamships',
        img: 'iron_forge',
      },
      {
        n: 'II',  tag: 'Labour',
        title: 'Mechanised Labour &amp; Revolt',
        question: 'How did mechanisation enter the body and household — and provoke resistance?',
        types: 'Spinning Jenny · power looms · calico printing · factory interiors · Luddites · machine-breaking',
        img: 'luddite',
      },
      {
        n: 'III', tag: 'Media',
        title: 'Media &amp; Optical Illusion',
        question: 'How did machines reproduce text and image — and stage immersive illusion?',
        types: 'Printing presses · typecasting · illustration · magic lanterns · dioramas · panoramas · optical toys',
        img: null, // placeholder — printing-press / diorama plate to be added
        placeholder: ['Daguerre &amp; Bouton, Diorama, 1822', 'Engraving, public domain'],
      },
      {
        n: 'IV',  tag: 'The Uncanny',
        title: 'Artificial Life &amp; Gothic Machines',
        question: 'When does a machine begin to look alive?',
        types: 'Frankenstein · automata · Steam Man · scientific instruments',
        img: 'frankenstein_front',
      },
      {
        n: 'V',   tag: 'Vision',
        title: 'Romantic Vision &amp; Apocalypse',
        question: 'How did Romantic art imagine cosmic, mythic, sublime forces?',
        types: 'Blake · Turner · John Martin · monsters · prophetic images',
        img: 'blake_ancient',
      },
    ],

    // ─── Source Kit · C · Visual Archive (legacy, kept for blog refs) ─
    KIT: [
      { img: 'blake_ancient',      title: 'William Blake — “Ancient of Days”',           date: 'Relief etching with watercolour, c.1794', src: 'William Blake Archive' },
      { img: 'frankenstein_front', title: 'Mary Shelley, <em>Frankenstein</em>',         date: 'Frontispiece, revised edition, 1831',     src: 'Tate Britain' },
      { img: 'luddite',            title: 'The Leader of the Luddites',                  date: 'Engraving, May 1812',                     src: 'British Museum' },
      { img: 'spinning_jenny',     title: 'Spinning Jenny — J. Hargreaves',              date: 'Engraving by T. E. Nicholson, c.1764',    src: 'Wikimedia Commons' },
      { img: 'iron_forge',         title: 'Joseph Wright of Derby — <em>An Iron Forge</em>', date: 'Oil on canvas, 1772',                  src: 'Tate Britain' },
      { img: 'mary_shelley',       title: 'Mary Wollstonecraft Shelley',                 date: 'Portrait by Richard Rothwell, c.1840',    src: 'National Portrait Gallery' },
    ],

    BLOG: [
      { num: '01', theme: 'The Sublime', author: 'Anita Xiaoru Lu', date: 'June 2026',
        title: 'AI and the Return of the Sublime', htitle: 'AI and the Return<br>of the Sublime',
        sub: 'Romanticism in the Age of Artificial Intelligence',
        img: 'blake_ancient', accent: 'g', live: true,
        body: `
        <p>The concept of the sublime—an aesthetic experience of awe, wonder, and terror inspired by forces far greater than the human self—underwent significant development during the Romantic period. More than two centuries later, it continues to shape our relationship with technology. What was once associated with God, nature, mountains, storms, and oceans has increasingly been transferred to human-made systems. Modern society often directs its sense of wonder toward its own technological creations, a tendency that recalls what John Keats criticized as the “Egotistical Sublime.”</p>
        <p>This transformation began with the Technological Sublime, in which industrial infrastructures such as railways, steam engines, bridges, and factories inspired the same mixture of awe and fear that earlier generations associated with nature. Today, this phenomenon has evolved into the Digital Sublime: the contemporary myth that technologies such as cloud computing and artificial intelligence transcend physical limitations, creating seemingly infinite systems that operate beyond human comprehension.</p>

        <span class="sec-lbl">The Material Beneath the Myth</span>
        <p>Artificial intelligence undoubtedly offers a compelling vision of the future. It promises unprecedented increases in productivity, accelerates scientific discovery, and expands possibilities for artistic and creative expression. Yet alongside this optimism, concerns continue to grow regarding AI’s environmental costs, energy consumption, and dependence upon hidden forms of labor. Contemporary artists have increasingly sought to expose the material realities concealed beneath the mythology of AI’s immateriality.</p>
        <p>One powerful example is <em>Rare Earthenware</em> (2015), created by Liam Young and Kate Davies of Unknown Fields Division. The project presents a series of ceramic vessels crafted from toxic and radioactive waste mud collected from rare-earth mineral refineries. By transforming industrial waste into beautiful objects, the work reveals the environmental consequences hidden behind supposedly “clean” technologies. The project reminds viewers that digital technologies remain deeply dependent upon material extraction.</p>
        <p>This concern is particularly relevant in the context of AI. The rapid expansion of data centers has significantly increased demand for energy, leading major technology companies to invest heavily in nuclear power and uranium supply chains. At the same time, the production of AI hardware depends on rare earth minerals and other mined resources, industries often associated with environmental degradation, toxic waste, and radioactive byproducts. The immense productive and creative potential of AI is therefore inseparable from the extraction of natural resources and the labor of workers throughout global supply chains.</p>

        <span class="sec-lbl">The Hidden Labor of Intelligence</span>
        <p>A similar critique appears in <em>Anatomy of an AI System</em> (2018), created by Kate Crawford and Vladan Joler. The project takes the form of a vast anatomical map that deconstructs the Amazon Echo, tracing the network of mines, factories, transportation systems, data centers, and human labor necessary for its existence. The work challenges the popular perception of AI as a purely digital phenomenon by visualizing the extensive physical infrastructure that sustains it.</p>
        <p>What remains largely invisible in public discussions of AI is the enormous amount of labor embedded within these systems. Behind the seemingly autonomous intelligence of machine-learning models lie mine workers extracting raw materials, factory workers assembling hardware, logistics workers distributing products, outsourced programmers maintaining datasets, crowdsourced annotators training algorithms, and users continuously generating valuable data. As Crawford and Joler’s project suggests, contemporary technological systems are fundamentally rooted in human bodies and human labor. Although AI is frequently portrayed by media and corporate narratives as limitless and autonomous, its capabilities rest upon vast networks of resources, infrastructures, and workers.</p>
        <p>Sebastian Schmieg’s <em>Segmentation Network</em> (2016) extends this critique by documenting the repetitive micro-labor performed by anonymous crowd workers who manually label images for computer vision systems. The project visualizes thousands of hand-drawn image segmentations, exposing the hidden human effort that underlies machine perception. By bringing this invisible labor back into view, Schmieg challenges the common assumption that AI systems operate independently of human intervention. Instead, neural networks emerge as collective achievements built upon countless acts of human cognition and attention.</p>

        <span class="sec-lbl">A Romantic Lens on AI</span>
        <p>These projects raise an important question: what can we learn by examining what is visible and invisible within the architecture of artificial intelligence? More specifically, how might the Romantic concept of the sublime help us understand AI’s relationship with humanity and nature?</p>
        <p>The Romantic era offers a useful historical parallel. Two hundred years ago, writers and artists were confronting rapid transformations brought about by industrialization, technological innovation, and changing social structures. Today, we face a similarly transformative moment. AI appears to possess almost limitless capabilities, yet Romantic thinkers remind us that encounters with overwhelming power should inspire not only wonder but also reflection on humanity’s place within larger systems.</p>
        <p>In her analysis of Percy Shelley’s <em>Alastor</em> and <em>The Cloud</em>, Michele Speitz argues that sublime power arises not only from nature but also from the rapid and unpredictable transformations of human culture. Shelley captures this uncertainty in the line:</p>
        <p class="post-pull">“Nature’s vast frame, the web of human things,<br>Birth and the grave, that are not as they were.”</p>
        <p>Here, nature and human civilization become intertwined. Technological change acquires the same mixture of awe, power, danger, and unpredictability traditionally associated with sublime landscapes. Like mountains, storms, or oceans, technology can appear simultaneously creative and destructive.</p>
        <p>However, Speitz also identifies an important limitation in viewing technology through the lens of the sublime. The overwhelming power attributed to technological systems can obscure the networks of relationships that make them possible. Drawing upon Shelley’s prose, she argues that the sublime is not an experience of isolated mastery but one of entanglement and interdependence.</p>
        <p>A striking example appears in Shelley’s discussion of Archimedes’ famous statement: “Give me a place to stand, and I will move the earth.” Speitz notes that the sentence makes the lever itself linguistically invisible. The tool enabling the action disappears from view. For Shelley, this invisible lever becomes a powerful metaphor for the hidden infrastructures that make agency possible.</p>

        <span class="sec-lbl">Awe, Accompanied by Humility</span>
        <p>This insight remains highly relevant for contemporary AI. Human achievements are never purely human; they depend upon natural resources, material systems, infrastructures, tools, and technologies. Likewise, AI is not an autonomous intelligence floating beyond the material world. It remains dependent upon human knowledge, labor, energy, and environmental resources. The mythology of AI as an infinite and self-sustaining force risks obscuring these essential relationships.</p>
        <p>Viewed through a Romantic lens, AI should not be understood solely as an object of awe. Rather, it should be understood through a dynamic triangle connecting technology, humanity, and nature. The sublime experience generated by AI is real, but it must be accompanied by an awareness of the material and human conditions that make such technologies possible.</p>
        <p>As AI continues to evolve, the Romantics offer an important lesson. The question is not simply what technology can do, but how humanity positions itself in relation to forces that increasingly appear larger than ourselves. By looking beyond the mythology of infinite digital possibility and recognizing the networks of labor, resources, and ecological systems beneath it, we may develop a more responsible understanding of technological progress. In this sense, the Romantic sublime remains remarkably relevant:</p>
        <p class="post-pull">Awe should be accompanied by humility, and every vision of transcendence must also reckon with the world that sustains it.</p>

        <div class="post-refs">
          <h4>References</h4>
          <ul>
            <li>Keats, John. <em>The Complete Poems of John Keats</em>. Edited by John Barnard, Penguin Books, 2003.</li>
            <li>Shelley, Percy Bysshe. <em>A Defence of Poetry</em>. <em>Poetry Foundation</em>, www.poetryfoundation.org/articles/69388/a-defence-of-poetry.</li>
            <li>———. <em>Alastor; or, The Spirit of Solitude</em>. <em>Poetry Foundation</em>, www.poetryfoundation.org/poems/45113/alastor-or-the-spirit-of-solitude.</li>
            <li>———. <em>The Cloud</em>. <em>Poetry Foundation</em>, www.poetryfoundation.org/poems/45115/the-cloud.</li>
            <li>Speitz, Michele. “Lyres, Levers, Boats, and Steam: Shelleyan Technologies of Sublime Correspondence.” <em>The Romantic Sublime and Representations of Technology</em>, Liverpool University Press, 2024, pp. 103–134. <em>JSTOR</em>, doi:10.2307/jj.14086456.7.</li>
            <li>Wang, Vivian. “Not So Green Technology: The Complicated Legacy of Rare Earth Mining.” <em>Harvard International Review</em>, 15 Dec. 2021, hir.harvard.edu/not-so-green-technology-the-complicated-legacy-of-rare-earth-mining/.</li>
            <li>“Artificial Intelligence Will Drive Massive Demand for Uranium.” <em>Value Add Venture Capital</em>, valueaddvc.com/blog/nuclear-power-and-ai-why-big-tech-is-signing-deals-with-uranium-producers.</li>
            <li>Young, Liam, and Kate Davies. <em>Rare Earthenware</em>. Unknown Fields Division, 2015.</li>
          </ul>
          <h4>Links to Mentioned Art Projects</h4>
          <ul>
            <li><em>Anatomy of an AI System</em> (Kate Crawford &amp; Vladan Joler, 2018): <a href="https://anatomyof.ai/" target="_blank" rel="noopener">anatomyof.ai</a></li>
            <li><em>Segmentation Network</em> (Sebastian Schmieg, 2016): <a href="https://sebastianschmieg.com/segmentation-network-projection/" target="_blank" rel="noopener">sebastianschmieg.com/segmentation-network-projection</a></li>
            <li><em>Rare Earthenware</em> (Unknown Fields Division): <a href="https://collections.vam.ac.uk/item/O1317588/rare-earthenware-vessel-unknown-fields-division/" target="_blank" rel="noopener">V&amp;A Museum Collections</a> &middot; <a href="https://www.youtube.com/watch?v=oTW5VBuM-Gc" target="_blank" rel="noopener">film</a></li>
          </ul>
        </div>` },

      { num: '02', theme: 'The Creative Mind', author: 'Xiyu Mao', date: 'May 2026',
        title: 'When the Poem Learns to Breathe', htitle: 'When the Poem<br>Learns to Breathe',
        sub: 'Three Projects That Inspired <em>Sublime Dreams</em>',
        img: 'frankenstein_front', accent: 'y', live: true,
        body: `
        <p>The Romantics were haunted by a question that feels newly urgent today: what does it mean to imagine? For Samuel Taylor Coleridge, the creative mind was a “living power,” an organic force capable of bringing unlike things into relation and making them feel newly alive. His famous image of the Aeolian harp captures this beautifully. The mind vibrates when touched by something beyond itself — wind, atmosphere, sensation, spirit.</p>
        <p>Today, generative AI has made this question strangely literal. Machines can now produce poems, images, voices, and dreamscapes on demand. They imitate style, extend fragments, revive archives, and generate uncanny continuations of human expression. The old Romantic question returns in a new form: under what conditions can technology become a medium through which imagination is reawakened?</p>
        <p>The following three projects offer different ways of thinking through this question. Each begins with literature, then lets it move through another medium: body, collective voice, machine continuation. Together, they suggest that the Romantic imagination still flickers inside our technological age, sometimes in unexpected places.</p>

        <span class="sec-lbl">Text Rain — Camille Utterback &amp; Romy Achituv, 1999</span>
        <p><em>Text Rain</em> (Camille Utterback &amp; Romy Achituv, 1999) begins with the simplest possible gesture: it makes you catch a poem with your body. Letters fall like rain across a projected screen, drawn from Evan Zimroth’s poem “Talk, You.” As participants move in front of the projection, their silhouettes interrupt the falling text. Raise your arms, and a line of verse gathers on your skin; step away, and the words fall again. There is no generative AI here — only a camera, a screen, and a moving body. Yet the piece offers one of the strongest lessons for any art-tech project: literary experience can begin with contact. The poem becomes something touched, caught, dropped, and physically negotiated. In this sense, <em>Text Rain</em> echoes a deeply Romantic idea of sensibility: imagination as embodied responsiveness to the world.</p>

        <span class="sec-lbl">Frankenstein AI: A Monster Made by Many — Lance Weiler, Columbia DSL, 2018</span>
        <p><em>Frankenstein AI: A Monster Made by Many</em> (Lance Weiler, Columbia Digital Storytelling Lab, 2018) turns Mary Shelley’s novel into both source material and method. The installation invites audiences to share their fears, hopes, and memories, which are then fed into an AI system trained on <em>Frankenstein</em>. The resulting creature is assembled from many voices: recognisably human, yet strangely other. Shelley’s Promethean myth becomes interactive. The “monster” emerges from a social body, carrying the desires and anxieties of its participants. Its power comes from treating <em>Frankenstein</em> as a theory of creation itself. Who is responsible for a being made collectively? What happens when a creation exceeds the intentions of its makers? For <em>Sublime Dreams</em>, this project offers a crucial reminder: the most interesting use of AI may begin by asking what Romantic texts already know about technology, power, fear, and responsibility.</p>

        <span class="sec-lbl">A Living Poem — Sasha Stiles, MoMA, 2025–2026</span>
        <p><em>A LIVING POEM</em> (Sasha Stiles, exhibited at MoMA, 2025–2026) pushes the question of authorship even further. Stiles, a poet working with language models and her AI alter ego Technelegy, has described poetry as one of humanity’s oldest technologies: a system for preserving memory, transmitting feeling, and carrying consciousness across time. In <em>A LIVING POEM</em>, text appears as a continuously unfolding presence. The poem seems to think, shift, and regenerate. Its authorship remains unsettled, suspended between human memory and machine continuation. This recalls John Keats’s idea of Negative Capability: the capacity to dwell “in uncertainties, Mysteries, doubts,” without rushing to resolve them. Stiles’s work suggests that AI poetry becomes most compelling when it reveals how strange and collaborative authorship has always been.</p>

        <hr class="post-divider">

        <p>Read together, these three projects share a quietly radical conviction: technology can return literature to breath, gesture, voice, and uncertainty. <em>Text Rain</em> asks where the body enters the poem. <em>Frankenstein AI</em> asks what happens when a literary machine is fed by collective memory. <em>A LIVING POEM</em> asks whether authorship can remain alive precisely because it is unfinished.</p>
        <p>These questions are at the heart of <em>Sublime Dreams</em>. The challenge is not to use AI for decoration, or to produce a polished illustration of a nineteenth-century scene. The deeper challenge is to ask what kind of relation your work creates between text, machine, body, and imagination. Does your piece respond? Does it remember? Does it unsettle its own maker? Does it allow the source text to breathe differently?</p>
        <p class="post-pull">The source kit is waiting. The machine may be one of the places where imagination starts trembling again.</p>

        <div class="post-refs">
          <h4>Further Links</h4>
          <ul>
            <li><em>Text Rain</em>: <a href="https://camilleutterback.com/projects/text-rain/" target="_blank" rel="noopener">camilleutterback.com/projects/text-rain</a></li>
            <li><em>Text Rain</em> — Smithsonian American Art Museum: <a href="https://americanart.si.edu/artwork/text-rain-109552" target="_blank" rel="noopener">americanart.si.edu/artwork/text-rain-109552</a></li>
            <li><em>Frankenstein AI: A Monster Made by Many</em> — MIT Docubase: <a href="https://docubase.mit.edu/project/frankenstein-ai-a-monster-made-by-many/" target="_blank" rel="noopener">docubase.mit.edu — Frankenstein AI</a></li>
            <li><em>Frankenstein AI</em> — Columbia School of the Arts: <a href="https://arts.columbia.edu/news/filmcolumbia-brings-frankenstein-2018-sundance-film-festival-brand-new-way" target="_blank" rel="noopener">arts.columbia.edu — Frankenstein at Sundance 2018</a></li>
            <li><em>A LIVING POEM</em> — MoMA: <a href="https://www.moma.org/calendar/exhibitions/5839" target="_blank" rel="noopener">moma.org/calendar/exhibitions/5839</a></li>
            <li><em>A LIVING POEM</em> — MoMA Press Release: <a href="https://press.moma.org/exhibition/sasha-stiles-a-living-poem/" target="_blank" rel="noopener">press.moma.org — Sasha Stiles: A Living Poem</a></li>
            <li>Sasha Stiles — Artist Website: <a href="https://www.sashastiles.com/" target="_blank" rel="noopener">sashastiles.com</a></li>
          </ul>
        </div>` },

      { num: '03', theme: 'Resisting the Machine', author: 'Xiyu Mao', date: 'June 2026',
        title: 'Resisting the Machine', htitle: 'Resisting<br>the Machine',
        sub: 'Should we embrace or reject disruptive new technologies?',
        img: 'luddite', accent: 'o', live: true,
        body: `
        <p>“Don’t be a Luddite.” The phrase is usually meant as an insult. It suggests someone irrationally afraid of progress: a person who sees a new machine and reaches for a hammer. Yet the historical Luddites were not simply frightened by machines. They were skilled textile workers whose livelihoods, wages, and craft knowledge were being destroyed by the way machines were introduced into industrial capitalism. Their protest was less a rejection of technology itself than a demand to ask who benefits from technological change, who pays for it, and who is forced to adapt without consent.</p>
        <p>That question feels newly urgent in the age of generative AI. We are repeatedly told that disruptive technologies must be embraced because they are inevitable. The language of inevitability is powerful. It makes resistance sound childish, nostalgic, or impossible. But the Romantic period offers a more complicated lesson. The arrival of new machines did not only produce wonder. It also produced grief, anger, displacement, satire, and political struggle. To resist the machine, in this sense, is not to deny the future. It is to insist that the future should remain open to human judgment.</p>

        <span class="sec-lbl">A Machine Is Never Just a Machine</span>
        <p>The Luddites understood this before the term “technology ethics” existed. In the early nineteenth century, textile machines were transforming the rhythms of labour across England. Frames and looms could increase production, but they also allowed employers to cut wages, deskill workers, and undermine older forms of craft. Machine-breaking became a desperate form of political speech. It was spectacular, risky, and easily condemned, but it exposed a truth that polite arguments often failed to make visible: a machine is never just a machine. It arrives inside a social arrangement.</p>
        <p>Lord Byron saw this clearly. In 1812, during his maiden speech in the House of Lords, he opposed the Frame Work Bill, which sought to punish machine-breaking with death. Byron’s defence of the Luddites was not a sentimental defence of violence. It was a protest against a society that treated machines as more deserving of protection than the hungry workers around them. His position remains startlingly relevant. Today, when AI threatens to automate forms of writing, design, illustration, translation, coding, and performance, the central question is again not whether machines can produce. They obviously can. The question is what kind of world is being built around that production.</p>
        <p>This is why the opposition between “embrace” and “reject” is too simple. Some technologies should be welcomed, some should be limited, and some should be refused in specific contexts. The harder task is to develop forms of selective resistance: ways of saying yes with conditions, no with reasons, and not yet when the consequences remain unclear.</p>

        <span class="sec-lbl">Tools of Selective Resistance</span>
        <p>Contemporary artists have already begun to invent such forms of resistance. One powerful example is <em>Glaze</em>, a tool developed to help artists protect their work from style mimicry by generative AI models. Glaze makes small changes to an artwork that are difficult for human viewers to notice, but disruptive to models attempting to learn and imitate an artist’s style. Its logic is quietly elegant. Instead of asking artists to disappear from the internet, it gives them a way to remain visible while making extraction harder. Visibility and vulnerability no longer have to be the same thing.</p>
        <p>A more confrontational version of this idea appears in <em>Nightshade</em>, another project from researchers at the University of Chicago. Nightshade allows artists to alter images so that, if scraped into future training datasets, they may mislead the model’s learning process. It has often been described as a form of data poisoning, but that phrase risks making artists sound malicious. A more sympathetic reading would see Nightshade as a defensive technology: a digital fence built in response to a culture of uninvited extraction. If companies can scrape at scale, artists can also resist at scale.</p>
        <p>Resistance can also take the form of consent infrastructure. <em>Have I Been Trained?</em>, developed by Spawning, was created to help artists search large image datasets and register opt-out preferences. Its importance lies in a simple but radical principle: creators should be able to know whether their work has been used, and they should have some say in what happens next. This turns resistance away from dramatic refusal and toward something more procedural: transparency, permission, record-keeping, and choice.</p>
        <p>Other forms of resistance focus less on artistic style and more on social harm. The <em>Algorithmic Justice League</em> works to expose bias and discrimination in algorithmic systems, especially technologies such as facial recognition. Its work reminds us that technological disruption does not affect everyone equally. A system that feels convenient to one group may become surveillance, misrecognition, or exclusion for another. Here, resistance means audit. It means asking who is tested, who is misread, who is harmed, and who is given the authority to decide whether the machine works well enough.</p>

        <span class="sec-lbl">An Open Future</span>
        <p>These contemporary examples bring us back to the Romantic age with sharper eyes. The question is not “machine or no machine,” but what kind of relation we choose to build with machines. Do they extend human agency, or absorb it? Do they support imagination, or harvest it?</p>
        <p>For <em>Sublime Dreams</em>, this means approaching technology neither with blind celebration nor with simple rejection. To resist the machine can mean slowing it down, exposing its assumptions, protecting creative consent, or designing conditions in which human judgment remains present.</p>
        <p class="post-pull">To resist the machine is not always to smash it.</p>

        <div class="post-refs">
          <h4>Further Links</h4>
          <ul>
            <li>The Luddites — <a href="https://www.smithsonianmag.com/history/what-the-luddites-really-fought-against-264412/" target="_blank" rel="noopener">Smithsonian Magazine</a></li>
            <li>Lord Byron’s 1812 speech on the Frame Work Bill — <a href="https://api.parliament.uk/historic-hansard/lords/1812/feb/27/frame-work-bill" target="_blank" rel="noopener">Hansard</a></li>
            <li><em>Glaze</em>: Protecting Artists from Generative AI — <a href="https://glaze.cs.uchicago.edu/what-is-glaze.html" target="_blank" rel="noopener">glaze.cs.uchicago.edu</a></li>
            <li><em>Nightshade</em>: Protecting Artists from AI Training — <a href="https://nightshade.cs.uchicago.edu/whatis.html" target="_blank" rel="noopener">nightshade.cs.uchicago.edu</a></li>
            <li><em>Have I Been Trained?</em> — <a href="https://haveibeentrained.com/" target="_blank" rel="noopener">haveibeentrained.com</a></li>
            <li><em>Algorithmic Justice League</em> — <a href="https://www.ajl.org/" target="_blank" rel="noopener">ajl.org</a></li>
          </ul>
          <h4>References</h4>
          <ul>
            <li>Byron, George Gordon, Lord. “Frame Work Bill.” <em>Hansard</em>, House of Lords, 27 February 1812.</li>
            <li>Glaze Project. “What Is Glaze?” University of Chicago SAND Lab.</li>
            <li>Nightshade Project. “What Is Nightshade?” University of Chicago SAND Lab.</li>
            <li>Spawning. “Have I Been Trained?”</li>
            <li>The Algorithmic Justice League. “Unmasking AI Harms and Biases.”</li>
            <li>Jones, Steven E. <em>Against Technology: From the Luddites to Neo-Luddism</em>. Routledge, 2006.</li>
            <li>Sale, Kirkpatrick. <em>Rebels Against the Future: The Luddites and Their War on the Industrial Revolution</em>. Basic Books, 1995.</li>
            <li>Smithsonian Magazine. “What the Luddites Really Fought Against.”</li>
          </ul>
        </div>` },

      { num: '04', theme: 'Sensibility & Embodiment', author: 'Anita Xiaoru Lu', date: 'June 2026',
        title: 'When AI “Hears” Your Expressions', htitle: 'When AI “Hears”<br>Your Expressions',
        sub: 'These Installation Artists Are Breaking the Boundary Between Life and Machine',
        img: 'iron_forge', accent: 'p', live: true,
        body: `
        <p>In industrial society, we have grown accustomed to a binary opposition: only living organisms possess autonomy, while machines can only follow mechanical instructions. This dualism has quietly seeped into our understanding of artistic creation—does a poet or an artist truly have full control over all branches and leaves of their work? Where do artistic inspiration, imagination, and creativity actually come from? How may contemporary technology and artificial intelligence offer us a new interpretation of our relation with our creative activities?</p>
        <p>As early as the Romantic era, poets offered a different answer.</p>

        <span class="sec-lbl">A Poem as a Tree, or as an Aeolian Harp?</span>
        <p>John Keats compared poetry to a tree—it should emerge naturally from the poet’s mind, just as leaves grow from a tree: “if Poetry comes not as naturally as the Leaves to a tree, it had better not come at all.” Samuel Taylor Coleridge, in his meditative poem “The Eolian Harp,” likened poetic imagination to a natural instrument, and his own “lazy, passive” mind to an aeolian harp that breathes in nature’s atmosphere and plays a symphony of the cosmos.</p>
        <p>In these metaphors, the artwork is not entirely controlled by its creator, but rather shares a certain autonomy with the poet. This resonates with posthumanist views: intelligence, meaning, and creativity are not limited to biological life—they can also be observed in, and even granted to, mechanical life.</p>

        <span class="sec-lbl">When Machines Begin to “Listen” to Your Soul</span>
        <p>Contemporary art projects, while not explicitly referencing Romanticism, echo this exploration. They treat artworks as self-managing, self-organizing entities, not purely passive objects.</p>
        <p>The artist duo Shinseungback Kimyonghum created a thought-provoking installation: an AI system analyzes the facial expressions of visitors entering the gallery, and then generates wave sounds using an ocean drum, reflecting the average mood of the last 100 faces. Through an “ocean” that constantly shifts according to the collective psychological state, the work demonstrates how human sensibility can be projected onto and transformed into physical forms—landscapes, natural objects—while the “natural landscape” here is actually constructed from human subjectivity.</p>
        <p>This also challenges the traditional notion of artistic authorship: the artist is no longer the sole creator of the work, but co-owns the power to influence it alongside all the visitors.</p>

        <span class="sec-lbl">When the Mechanical and the Organic Become One</span>
        <p>The connection between musical instruments and the “organic” vs. “mechanical” has a fascinating precedent. In the mid-17th century, Michele Todini invented the “mechanical organ.” He placed numerous independent string and wind instruments inside a complete apartment space, with no physical connection between them. Remarkably, when he played one instrument, the others would resonate in sympathy. This work blended the properties of natural and artificial objects, breaking down the binary opposition between organism and machine.</p>
        <p>An installation that combines mechanical technology with environmental interaction can thus be seen as possessing both “organic” and “mechanical” characteristics—a living entity in its own right.</p>

        <span class="sec-lbl">Every Gesture You Make Becomes a Co-creation</span>
        <p>Ronan Tanchum’s contemporary interactive installations push this idea even further. His works allow visitors to directly influence the generation and transformation of the artwork through their movements.</p>
        <p>In <em>Bloom</em> (2025), a real-time AI system converts live electricity data into the blooming and withering of plants. <em>Immersive Painting</em> (2022) uses depth cameras and real-time motion tracking to build a room-scale painting system, translating visitors’ gestures into paint, pressure, and projected atmospheres.</p>
        <p>In <em>Classical Revival</em> (2026), natural elements serve as the primary visual source. Visitors are invited to touch the exhibits, transforming classical decorations into dynamic images that respond to their bodily movements. Through generative algorithms and real-time dynamic image synthesis, visitors “co-create” new visuals with the original work, breathing new life into traditionally static decorative designs.</p>
        <p>Through these works, art is no longer isolated from its environment or history. Instead, it is deeply connected to its surroundings and cultural sources, and continuously regenerates itself from them. This is precisely what Keats meant by “natural growth”—like leaves growing from a tree, the artwork grows from its creators and its audience, and in turn nourishes them.</p>

        <span class="sec-lbl">An Interconnected Ecosystem</span>
        <p>David Hume once offered an organic analogy for the making of the world: “The world is more like an animal or a plant than it is like a watch or a loom. [...] We may therefore infer that the cause of the world resembles or is analogous to generation or vegetation.” The Stoic Cleanthes argued that the production of books is the same kind of “natural production” as the life of animals and plants—both come about “through inheritance and reproduction.”</p>
        <p>Artistic creation should be understood in a similar way: it is not the mechanical repetition of industrial products according to a fixed pattern, but rather the generation and growth of a living organism. The artwork grows out of its creators and its audience, then nourishes them in return, connecting itself, the artist, and the viewer into a single, interrelated ecosystem.</p>
        <p>Hume’s notion of “interdependence” and “connection”—that all parts of an organism are causally related, mutually dependent, and capable of influencing each other—applies equally to artistic creation. The bonds between all living things do not arise merely from the pursuit of a common goal, but from the way each individual is woven into a network of mutual influence.</p>

        <span class="sec-lbl">Afterword</span>
        <p>From the poetic imagination of the Romantics to the immersive interactions of contemporary installation art, a hidden thread runs through: artistic creation is never a one-way output, but rather a continually generative, mutually nourishing life process. When we realize that our movements, emotions, and intuition may also be “co-creating” a unique artwork with the piece itself, that moment of fusion between the work and us will confirm what Keats said two centuries ago:</p>
        <p class="post-pull">Let it come as naturally as leaves grow on a tree.</p>

        <div class="post-refs">
          <h4>References</h4>
          <ul>
            <li>Keats, John. “Selections From Keats’s Letters: On Axioms and the Surprise of Poetry: Letter to John Taylor, 27 February 1818.” <em>Poetry Foundation</em>, by Poetry Foundation, 13 Oct. 2009, www.poetryfoundation.org/articles/69384/selections-from-keatss-letters.</li>
            <li>Poetry Foundation. “Samuel Taylor Coleridge.” <em>Poetry Foundation</em>, www.poetryfoundation.org/poets/samuel-taylor-coleridge.</li>
            <li>Rykwert, Joseph. “Organic and Mechanical.” <em>RES: Anthropology and Aesthetics</em>, no. 22, 1992, pp. 11–18. <em>JSTOR</em>, http://www.jstor.org/stable/20166851. Accessed 29 May 2026.</li>
            <li>Stempel, Daniel. “Coleridge and Organic Form: The English Tradition.” <em>Studies in Romanticism</em>, vol. 6, no. 2, 1967, pp. 89–97. <em>JSTOR</em>, https://doi.org/10.2307/25599680. Accessed 29 May 2026.</li>
          </ul>
          <h4>Links to Mentioned Art Projects</h4>
          <ul>
            <li><a href="https://ssbkyh.com/works/mind/" target="_blank" rel="noopener">ssbkyh.com/works/mind</a></li>
            <li><a href="https://ronentanchum.art/catalogue.html" target="_blank" rel="noopener">ronentanchum.art/catalogue</a></li>
          </ul>
        </div>` },

      { num: '05', theme: 'Remediation', author: 'Catherine', date: 'June 2026',
        title: '“We Are All Digital Romantics Now”', htitle: '“We Are All<br>Digital Romantics Now”',
        sub: 'Why 19th-Century Visions Still Shape Our Digital Future?',
        img: 'spinning_jenny', accent: 'g', live: true,
        body: `
        <p>Think about the last time a piece of technology moved you.</p>
        <p>Maybe it was a video that made a dead person seem impossibly alive. Maybe it was a virtual space that felt as real as the room you were sitting in. Whatever it was, you probably didn’t think this was exactly what the Romantics were talking about. But it was.</p>
        <p>Two hundred years ago, Europe was experiencing its own technological revolution. Factories, machines, industrialisation, suddenly, the world was becoming faster, more mechanical, and increasingly dominated by machines rather than our hands. Against the cold efficiency of the Industrial Revolution, Romantic writers made a radical argument that imagination, feeling, and subjective experience were the most important things about being human, and any world that forgot them would lose something it couldn’t get back.</p>
        <p>Now, standing inside another technological revolution driven by newly developing technologies, AI, and digital media, we are asking almost the exact same questions again.</p>
        <p>What do we lose and what might we gain when machines start doing things only humans used to do?</p>
        <p>Surprisingly, some of the most exciting digital humanities projects today show the answer might be more hopeful than you might expect. The more powerful our technology becomes, the more romantic our ambitions for it get.</p>

        <p>Take the British Library’s collaboration with Hong Kong creative studio Dimension Plus (British Library &amp; Dimension Plus, 2018). Together, they built <em>Landscapes of Oscar Wilde</em>. They computationally analysed four of Wilde’s major works, extracted the 60 most frequently used words, mapped each word’s frequency as physical height, and 3D-printed the results. The project turns language into physical terrain. Wilde’s literary patterns became ridges and valleys.</p>
        <p>When you hold the terrain of his language in your hand, a physical connection is built between Wilde and you, across time and space. Writers of the period were obsessed with landscapes because they believed nature externalised emotion and consciousness. What this project does is unexpectedly similar. Using algorithms and 3D printing, it turns invisible literary patterns into something visible and tangible.</p>
        <p>We are now building new tools to fulfil a Romantic desire in the 19th century.</p>

        <p>The same desire drives <em>What Jane Saw</em>, a project built by researchers at the University of Texas at Austin (University of Texas at Austin, 2015). Using 3D and Oculus Rift, Prof. Barchas collaborated with the TACC Visualization Laboratory to construct a VR art exhibition Jane Austen visited in 1813 at the British Institution in Pall Mall, London. Users can walk through it, room by room, the way Austen did.</p>
        <p>VR technology changes the traditional reader’s role. Instead of standing outside the text looking into the history, we are placed inside and move through it. In this sense, VR offers new opportunities and greater possibilities for the subjective experience and emotional presence that Romantic writers sought in literature.</p>

        <p>The same thing happens in the Getty Museum’s augmented reality <em>William Blake</em> exhibition (Getty Museum &amp; Tin&amp;Ed, 2022). The Getty collaborated with Australian art duo Tin&amp;Ed to transform Blake’s supernatural imagery into AR experiences using motion capture and 3D modelling technology. Through a smartphone screen, Blake’s serpents and visionary creatures appear life-sized inside the viewer’s physical environment.</p>
        <p>You are suddenly sharing a room with Blake’s imagination.</p>
        <p>Blake probably would have loved this. He believes that imagination is another way of seeing reality, which makes AR desirable. We build AR, a technology that layers invisible digital worlds onto physical space, because we already believe, at some level, that reality is richer than what we can see with unaided eyes.</p>
        <p>Romanticism offers such a belief to us who are from two centuries later.</p>

        <p>Maybe that is the strangest thing about modern technology. The more advanced it becomes, the more it seems driven by human desires. People still want emotional connection and imaginative experience, even in the digital era.</p>
        <p>This is why it feels too simple to either celebrate or reject new technology. These tools can become dehumanising when they replace creativity or human interaction. But they can also preserve memory and create new experiences with literature and art.</p>
        <p>The real issue is not technology itself, but how we choose to use it.</p>
        <p>And perhaps that is why nineteenth-century literature still feels so relevant now. The central questions never disappeared. What makes us human? What happens when innovation moves faster than ethics? Can imagination survive in a mechanised world?</p>
        <p>Two centuries later, we are still answering them.</p>
        <p>These projects offer a hopeful answer. Technology becomes dangerous only when it replaces imagination. But when it works with imagination:</p>
        <p class="post-pull">Literature can live in new ways.</p>

        <div class="post-refs">
          <h4>Further Links</h4>
          <ul>
            <li><em>Landscapes of Oscar Wilde</em>: <a href="https://www.britishlibrary.cn/en/articles/landscapes-of-oscar-wilde/" target="_blank" rel="noopener">britishlibrary.cn/en/articles/landscapes-of-oscar-wilde</a></li>
            <li><em>What Jane Saw</em>: <a href="https://www.whatjanesaw.org/1813/rooms.php?location=NRWS" target="_blank" rel="noopener">whatjanesaw.org/1813</a></li>
            <li><em>What Jane Saw</em> (VR experience): <a href="https://www.youtube.com/watch?v=X70vOEHvNDA" target="_blank" rel="noopener">youtube.com/watch?v=X70vOEHvNDA</a></li>
            <li><em>William Blake AR</em>: <a href="https://www.theartnewspaper.com/2022/07/27/getty-museum-recreates-william-blakes-terrifying-visions-in-augmented-reality" target="_blank" rel="noopener">theartnewspaper.com — Getty recreates William Blake in AR</a></li>
          </ul>
        </div>` },
    ],
  };
})();
