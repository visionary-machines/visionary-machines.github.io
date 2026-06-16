// ============================================================
// Visionary Machines — Concept Cards
// Five thematic "concept cards": each poses a provocation (front)
// and frames it with a Romantic-era passage + a modern counterpart
// (back). Text transcribed from the exhibition concept-card set.
// ============================================================
(function(){
  if (!window.VM_DATA) window.VM_DATA = {};

  window.VM_DATA.CONCEPT_CARDS = [
    {
      num: 'I', accent: 'g', tag: 'The Sublime',
      title: 'The Aesthetics of the Sublime',
      question: 'Should new technologies excite us — or scare us?',
      img: 'assets/sourcekit/friedrich-wanderer.jpg',
      halves: [
        {
          label: 'The Natural Sublime',
          lead: 'For the Romantics, the Natural Sublime — which evoked both awe and fear — exposed the limits of the human mind:',
          quote: 'The “sublime” is an aesthetic and philosophical term that was vigorously debated in eighteenth-century intellectual and literary circles, where it was used to describe the grandeur of religious and literary experiences, the monumentality of geographical spaces and architectural constructions, and the elevations and abysses of subjective states. It is worth keeping in mind that everyday expressions such as “I can’t get my head around that,” and “awesome” are contemporary idioms of sublime feelings, revealing a sense of confusion, wonder, and admiration, though not without a touch of fear as well. […] The German philosopher Immanuel Kant (1724–1804) argued in his Critique of Judgement (1790) that people experience the sublime when they try to conceptualize (his term is “totalize”), for example, the immensity of outer space. […] In the poem “Mont Blanc,” Percy Bysshe Shelley describes an Alpine chasm as a “dizzy ravine” — allowing us to attribute the feeling of giddiness to both the ravine itself and to our perception of it, blurring the distinction between objective and subjective sublimity.',
          cite: 'Marc Gotlieb, “Sublime”, Encyclopedia of Aesthetics, ed. Michael Kelly, 2nd edn (Oxford University Press, 2014).',
        },
        {
          label: 'The Technological Sublime',
          lead: 'Today, the Technological Sublime elevates human achievement and mastery over the material world:',
          quote: 'The attribution of sublimity to human creations radically modified the psychological process that the sublime involved. Whereas in the sublime encounter in nature human reason intervenes and triumphs when the imagination finds itself overwhelmed, in the technological sublime reason had a new meaning. […] The awe induced by seeing an immense or dynamic technological object became a celebration of the power of human reason, and this awe granted special privilege to engineers and inventors.',
          cite: 'David E. Nye, American Technological Sublime (The MIT Press, 1994), 60.',
        },
      ],
    },
    {
      num: 'II', accent: 'p', tag: 'The Creative Mind',
      title: 'The Romantic Imagination',
      question: 'Can Artificial Intelligence ever truly “imagine”?',
      img: 'assets/sourcekit/blake-ancient-of-days.jpg',
      halves: [
        {
          label: 'The Imagination',
          lead: 'For the Romantics, the human Imagination was a special creative power, creating something wholly new out of existing materials:',
          quote: 'According to Samuel Taylor Coleridge, the “synthetic and magical power” of the poet’s imagination “brings the whole soul of man into activity, diffusing a tone and spirit of unity.” Novalis calls the productive imagination “the summum bonum”; Percy Bysshe Shelley describes it as a gateway into “the invisible nature of man”; and for John Keats, “Imagination and its empyreal reflection is the same as human life and its spiritual repetition.” [For the Romantics] the imagination is a fundamentally productive rather than merely reproductive power, the ultimate source of nature, literature, and the self.',
          cite: 'Peter Otto, “Imagination”, Encyclopedia of the Romantic Era: 1760–1850, ed. Christopher John Murray (Fitzroy Dearborn, 2004), 549–552 (549–550).',
        },
        {
          label: 'Romantic Machines',
          lead: 'Indeed, for the Romantics, technology could also be an expression of this dynamic, creative power:',
          quote: 'The dominant image of modern science has depended on certain exemplary “classical machines”: balances, levers, and clocks. […] [In the Romantic period] a different image of science — as a theory of nature and a theory of knowing — appeared, at the same time as a new set of machines came on the scene: steam engines, batteries, sensitive electrical and atmospheric instruments, improved presses, and photography. These were “romantic machines.” Unlike “classical machines,” they were understood as flexible, active, and inextricably woven into circuits of both living and inanimate elements. These new devices accompanied a new understanding of nature, as growing, complexly interdependent, and modifiable.',
          cite: 'John Tresh, The Romantic Machine: Utopian Science and Technology After Napoleon (The University of Chicago Press, 2012), xi.',
        },
      ],
    },
    {
      num: 'III', accent: 'y', tag: 'Resisting the Machine',
      title: 'Resisting the Machine',
      question: 'Should we embrace or reject disruptive new technologies?',
      img: 'assets/luddite.jpg',
      halves: [
        {
          label: 'The Luddites',
          lead: 'During the Romantic Era, skilled labourers protested against capitalists who were replacing them with new machinery:',
          quote: 'Machine-breakers, so called after a mythical leader, General Ludd. In 1811–16 textile workers in the east midlands, south Lancashire, and west Yorkshire met secretly in public houses or on the moors, took oaths, and smashed the machinery of mill-owners who refused their demands. At a time when trade unions were illegal, Luddism may be interpreted as collective bargaining by riot: frame-breaking in the east midlands was an attempt to coerce employers rather than hostility to machines as such. Eventually the Luddite bands were tracked down and the reputed leaders executed or transported.',
          cite: 'John Cannon and Robert Crowcroft, “Luddites”, A Dictionary of British History, 3rd ed. (Oxford University Press, 2015).',
        },
        {
          label: 'Utopian Technologies',
          lead: 'While some Romantics, such as Lord Byron, supported the Luddites, others welcomed new technologies for their utopian potential:',
          quote: 'Scholarly and popular explorations of British Romantic technology have done much to correct the once pervading assumption that either British Romantic literature rejected new technologies outright or at least ignored them in favor of celebrating an idealized rustic past. British Romanticism’s longstanding associations with Marxist thought, the Luddite rebellion, counter-enclosure movements — not to mention often being taken as necessarily or wholly counter to Enlightenment rationalism — all stood in the way of righting the historical record to acknowledge the extent to which Romantic authors welcomed modern machines and technologies, not just the occasional old tool or lost technical tradition of previous times.',
          cite: 'Michele Speitz, The Romantic Sublime and Representations of Technology (Liverpool University Press, 2024), 10.',
        },
      ],
    },
    {
      num: 'IV', accent: 'o', tag: 'Sensibility & Embodiment',
      title: 'Sensibility and Embodiment',
      question: 'What is the difference between artificial machines and organic bodies?',
      img: 'assets/sourcekit/maillardet-draughtsman.jpg',
      halves: [
        {
          label: 'Sensibility',
          lead: 'Many Romantics explored the importance of the senses; many believed that sensory sensitivity was a key component of artistic ability:',
          quote: 'Emerging in the late-eighteenth century to establish the terms by which literature and its institutions are still defined, Romanticism is concerned, above all, with questions of the body and its other (mind, spirit, soul, anima). […] Within the terms of canonical Romanticism, the quality of sensibility is a fundamental ethical and characterological quality that pertains in particular to individuals who are endowed with and who express heightened sensitivity towards or awareness of the senses […]. Thus, for Wordsworth in the Preface to the Lyrical Ballads, “poems to which any value can be attached” can only be produced by someone who is “possessed of more than usual organic sensibility”.',
          cite: 'Andrew Bennett, “Language and the Body”, The Cambridge Companion to the Body in Literature, ed. David Hillman and Ulrika Maude (Cambridge University Press, 2015), 73–86 (76–77).',
        },
        {
          label: 'Automata',
          lead: 'At the same time, many Romantics were interested in how machines and other non-organic bodies might possess sensibility, and thus rival human beings:',
          quote: 'The great European automata-makers of the early to mid-eighteenth century — Jacques de Vaucanson, Wolfgang von Kempelen, Pierre Jaquet-Droz […] produced works that were astounding in their mechanical ingenuity, and their exhibitions inspired popular wonder and delight. […] Automata were celebrated as feats of human science, reason, and ingenuity, but this wonder and delight soon gave way to anxieties about the mechanical simulation or duplication of life in the later part of the century, as identifying precisely what the term “human” designated proved elusive.',
          cite: 'Michael Demson and Christopher R. Clason, “Introduction”, in Romantic Automata: Exhibits, Figures, and Organisms (Bucknell University Press, 2020), 1–18 (3–4).',
        },
      ],
    },
    {
      num: 'V', accent: 'c', tag: 'Remediation',
      title: 'Remediation and New Media',
      question: 'How “new” is New Media?',
      img: 'assets/sourcekit/robertson-phantasmagoria.jpg',
      halves: [
        {
          label: 'New Optical Media',
          lead: 'The Romantic Era saw the invention of many new visual technologies which undermined the difference between representation and reality:',
          quote: '[In the Romantic Era,] the virtual realities produced by the new optical media (deployed in the Eidophusikon, Panorama, and Phantasmagoria, among other popular entertainments) provide exemplary instances of the now uncertain relations between real and virtual worlds, and catalysts for a protracted debate. This debate ranges from Bentham’s suggestions as to how “fictitious entities” might be used to maintain social order (itself a “fictitious entity”, Bentham admits) to, on the other hand, Romantic reflections on the relation between the virtual worlds of art and (the fiction of) reality.',
          cite: 'Peter Otto, Multiplying Worlds: Romanticism, Modernity, and the Emergence of Virtual Reality (Oxford University Press, 2011), 9.',
        },
        {
          label: 'Remediation & The Uncanny',
          lead: 'Today’s New Media often function through Remediation, recycling older forms to generate new images — often evoking The Uncanny (Das Unheimliche), Freud’s “eerie” feeling of encountering something familiar yet fundamentally alien:',
          quote: 'Hyperreality: in a mediated context, an artificially created copy that is perceived as somehow more real than the real thing, or too real to be real: modelled on reality but with an exaggerated intensity, such as computer-generated films with unnaturally bright and vibrant colours (compare uncanny valley). Uncanny Valley: in robotics and computer animation, a phenomenon where a high degree of realism generates hostile emotional responses to computer-generated characters or robots.',
          cite: '“Hyperreality” & “Uncanny Valley”, A Dictionary of Media and Communication, ed. Daniel Chandler and Rod Munday, 2nd ed. (Oxford University Press, 2016).',
        },
      ],
    },
  ];
})();
