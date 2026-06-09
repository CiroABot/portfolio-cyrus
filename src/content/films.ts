/* ==========================================================================
   FILMS  —  your filmography
   --------------------------------------------------------------------------
   EVERY film below has the SAME fields, in the SAME order. You never delete a
   line — if something doesn't apply, leave it empty:
       text          → { pt: '', en: '' }
       single text   → ''
       list          → []
       yes/no        → false

   TO ADD A FILM:
     1. Put the images in /public/assets  (e.g. MYFILM_Still01.jpg)
     2. Copy the MODELO block below, paste it where you want it to appear
        (top of the list = shown first), and fill every line.
     3. Give it a unique `slug`. Your editor will warn you if a field is missing.

   ──────────────────────────────────────────────────────────────────────────
   MODELO (copy everything between the lines):
   ──────────────────────────────────────────────────────────────────────────
   {
     slug: '',
     title:             { pt: '', en: '' },
     kind:              { pt: '', en: '' },
     year: 2025,                                  // number, or 'pre-production'
     role:              { pt: '', en: '' },
     categories: ['dir'],                         // 1+ of: dir, photo, edit, script, assist, prod

     synopsis:          { pt: '', en: '' },
     directorStatement: { pt: '', en: '' },       // optional
     production:        { pt: '', en: '' },        // optional

     cover: '/assets/',
     stills: [],

     specs: { runtime: '', aspectRatio: '', format: '', color: '' },
     credits: [
       // { role: { pt: '', en: '' }, name: '' },
     ],
     festivals: [],

     videoEmbed: '',                              // YouTube /embed/ url, or ''
     highlights: [],                              // [{ type: 'award'|'premiere'|'selection', label: { pt: '', en: '' } }]
     isStudentProject: false,
     links: { imdb: '', letterboxd: '', pressKit: '' },
   },
   ──────────────────────────────────────────────────────────────────────────
   See ./types.ts for what each field means.
   ========================================================================== */

import { FilmEntry } from "./types";

export const films: FilmEntry[] = [
  // ------------------------------------------------------------------ #1
  {
    slug: "tres-por-um",
    title: { pt: "TRÊS POR UM", en: "THREE FOR ONE" },
    kind: { pt: "Ficção • Curta-metragem", en: "Fiction • Short Film" },
    year: "pre-production",
    role: {
      pt: "Direção, Roteiro, Co-produção",
      en: "Direction, Screenplay, Co-production",
    },
    categories: ["dir", "script", "prod"],

    synopsis: {
      pt: "Um dono de uma mercearia recebe a visita de três seres estranhos após seu pai desaparecer. Ele dança tango e fala sobre ir embora.",
      en: "A store owner receives a visit from three strange beings after his father disappears. He dances tango and talks about leaving.",
    },
    directorStatement: { pt: "", en: "" },
    production: {
      pt: "Ciano Produções / Cesto du Cinema / FAC-DF",
      en: "Ciano Productions / Cesto du Cinema / FAC-DF",
    },

    cover: "/assets/TRESPORUM_DEMO_PHOTO.png",
    stills: ["/assets/TRESPORUM_DEMO_PHOTO2.png"],

    specs: {
      runtime: "~25 min",
      aspectRatio: "",
      format: "digital",
      color: "Cor / Color",
    },
    credits: [
      {
        role: { pt: "Direção/Roteiro", en: "Director/Writer" },
        name: "Ciro Araujo",
      },
      { role: { pt: "Produção", en: "Production" }, name: "Heloísa Schons" },
      { role: { pt: "Co-produção", en: "Co-production" }, name: "Ciro Araujo" },
    ],
    festivals: [],

    videoEmbed: "",
    highlights: [],
    isStudentProject: false,
    links: { imdb: "", letterboxd: "", pressKit: "" },
  },
  // ------------------------------------------------------------------ #1
  {
    slug: "festa-do-paulinho",
    title: { pt: "Festa do Paulinho", en: "Paulinho's Party" },
    kind: { pt: "Ficção • Curta-metragem", en: "Fiction • Short Film" },
    year: 2026, // number, or 'pre-production'
    role: { pt: "Dir. Foto, Color", en: "DoP, Color" },
    categories: ["photo", "edit"],

    synopsis: {
      pt: "Paulinho anda pelos cinemas e faz uma festa.",
      en: "Paulinho goes to the cinema and throws a party.",
    },
    directorStatement: { pt: "", en: "" }, // optional
    production: { pt: "Cesto du Cinema", en: "Cesto du Cinema" }, // optional

    cover: "/assets/festadopaulinho_5.jpg",
    stills: [
      "/assets/festadopaulinho_1.jpg",
      "/assets/festadopaulinho_2.jpg",
      "/assets/festadopaulinho_3.jpg",
      "/assets/festadopaulinho_4.jpg",
      "/assets/festadopaulinho_5.jpg",
    ],

    specs: {
      runtime: "20min",
      aspectRatio: "1.66:1",
      format: "digital",
      color: "color",
    },
    credits: [
      // { role: { pt: '', en: '' }, name: '' },
      { role: { pt: "Direção", en: "Director" }, name: "Rafael Ramagem" },
      {
        role: { pt: "Direção de Fotografia", en: "Cinematography" },
        name: "Ciro Araujo",
      },
    ],
    festivals: [],

    videoEmbed: "",
    highlights: [],
    isStudentProject: false,
    links: { imdb: "", letterboxd: "", pressKit: "" },
  },
  // ------------------------------------------------------------------ #2
  {
    slug: "um-gosto-assim",
    title: { pt: "UM GOSTO ASSIM", en: "A TASTE LIKE THIS" },
    kind: { pt: "Ficção • Curta-metragem", en: "Fiction • Short Film" },
    year: 2026, // number, or 'pre-production'
    role: { pt: "Color e Distribuição", en: "Color and Distribution" },
    categories: ["edit", "prod"],

    synopsis: {
      pt: "Meses após a morte de seu pai e entre noitadas com diferentes mulheres, Laura se dedica a organizar as coisas que ele deixou. Num blog mantido em segredo, ela descobre que, no fim da vida, Inácio teve uma relação com outro homem. Laura busca então se reconciliar com a figura do pai.",
      en: "Months after the death of his father, Laura organizes the things he left behind. In a secret blog, she discovers that, at the end of life, Inácio had a relationship with another man. Laura then seeks to reconcile with the father's figure.",
    },
    directorStatement: { pt: "", en: "" }, // optional
    production: { pt: "", en: "" }, // optional

    cover: "/assets/assim01.jpg",
    stills: [
      "/assets/assim01.jpg",
      "/assets/assim02.jpg",
      "/assets/assim03.jpg",
    ],

    specs: {
      runtime: "20min",
      aspectRatio: "1.77:1",
      format: "digital",
      color: "color",
    },
    credits: [
      { role: { pt: "Direção", en: "Director" }, name: "Helena Versiani" },
      { role: { pt: "Produção", en: "Production" }, name: "Gabriela de Mello" },
      {
        role: { pt: "Cor e Finalização", en: "Color and Finishing" },
        name: "Ciro Araujo",
      },
      {
        role: {
          pt: "Consultoria em Distribuição",
          en: "Distribution Consultancy",
        },
        name: "Ciro Araujo",
      }, // { role: { pt: '', en: '' }, name: '' },
    ],
    festivals: ["15ª Mostra Ecofalante de Cinema"],

    videoEmbed: "",
    highlights: [
      {
        type: "premiere",
        label: {
          pt: "15ª Mostra Ecofalante",
          en: "15th Ecofalante Film Festival",
        },
      },
    ],
    isStudentProject: true,
    links: { imdb: "", letterboxd: "", pressKit: "" },
  },
  // ------------------------------------------------------------------ #2
  {
    slug: "ouco-uma-cidade",
    title: { pt: "OUÇO UMA CIDADE", en: "I HEAR A CITY" },
    kind: {
      pt: "Experimental/Ficção • Curta-metragem",
      en: "Experimental/Fiction • Short Film",
    },
    year: 2026,
    role: {
      pt: "Direção, Roteiro, Montagem",
      en: "Direction, Screenplay, Editing",
    },
    categories: ["dir", "script", "edit"],

    synopsis: {
      pt: "Um viajante e um narrador no pós-apocalipse; eles narram uma história de uma cidade que foi misteriosamente abandonada e sua paisagem destruída. A gênesis de uma cidade do interior é explorada",
      en: "A traveler and a narrator in the post-apocalypse; they narrate an abandoned city as we arrive at a destroyed landscape and understand what happened to this small village. We explore the genesis of a countryside city in Brazil.",
    },
    directorStatement: {
      pt: "Ouço Uma Cidade nasce de uma ansiedade compartilhada sobre pequenas cidades, tanto no Brasil quanto globalmente.",
      en: "I Hear A City stems from a shared anxiety about small towns and cities, both in Brazil and globally. ",
    },
    production: {
      pt: "Cesto du Cinema / LPG - MG",
      en: "Cesto du Cinema / LPG - MG",
    },

    cover: "/assets/OUCO_UMA_CIDADE_Still01.jpg",
    stills: [
      "/assets/OUCO_UMA_CIDADE_Still02.jpg",
      "/assets/OUCO_UMA_CIDADE_Still03.jpg",
      "/assets/OUCO_UMA_CIDADE_Still04.jpg",
    ],

    specs: {
      runtime: "15min",
      aspectRatio: "1.66:1",
      format: "DCP 2K, 35mm stills",
      color: "P&B, Cor / B&W, Color",
    },
    credits: [
      { role: { pt: "Roteiro", en: "Screenplay" }, name: "Ciro Araujo" },
      {
        role: { pt: "Assistência de Direção", en: "Director Assistant" },
        name: "Giulia Dela Pace & Rafael Ramagem",
      },
      { role: { pt: "Montagem", en: "Editing" }, name: "Ciro Araujo" },
    ],
    festivals: [
      "36th Onion City Experimental Film Festival",
      "1º Festival de Cine Desde las Vísceras",
      "13è GOLLUT - Festival de cinema a Ribes de Freser",
    ],

    videoEmbed:
      "https://www.youtube.com/embed/g_cDyn_EN0M?si=67LARl6ym7AmzLc1&autoplay=1&mute=0",
    highlights: [
      {
        type: "premiere",
        label: {
          pt: "36th Onion City Film Festival",
          en: "36th Onion City Film Festival",
        },
      },
    ],
    isStudentProject: false,
    links: {
      imdb: "",
      letterboxd: "https://letterboxd.com/film/i-hear-a-city/",
      pressKit: "",
    },
  },

  // ------------------------------------------------------------------ #3
  {
    slug: "jornada-nas-estrelas",
    title: { pt: "JORNADA NAS ESTRELAS", en: "STAR JOURNEY" },
    kind: {
      pt: "Documentário • Curta-metragem",
      en: "Documentary • Short Film",
    },
    year: 2026,
    role: { pt: "Co-Montagem, VFX, Color", en: "Co-Editing, VFX, Color" },
    categories: ["edit"],

    synopsis: {
      pt: "Um homem procura fotos de sua avó e descobre a história de amor entre seus avós. Através de arquivos familiares, uma jornada intergaláctica se revela na sala de estar.",
      en: "A man searches for photos of his grandmother and discovers the love story between his grandparents. Through family archives, an intergalactic journey reveals itself in the living room.",
    },
    directorStatement: { pt: "", en: "" },
    production: { pt: "Cesto du Cinema", en: "Cesto du Cinema" },

    cover: "/assets/JORNADANASESTRELAS_Still01.jpg",
    stills: [
      "/assets/JORNADANASESTRELAS_Still02.jpg",
      "/assets/JORNADANASESTRELAS_Still03.jpg",
      "/assets/JORNADANAESTRELAS_Still04.jpg",
    ],

    specs: {
      runtime: "18 min",
      aspectRatio: "1,77:1",
      format: "DCP 2K",
      color: "P&B, Cor / B&W, Color",
    },
    credits: [
      { role: { pt: "Direção", en: "Director" }, name: "Angelo Pignaton" },
      {
        role: { pt: "Montagem", en: "Editing" },
        name: "Angelo Pignaton & Ciro Araujo",
      },
      { role: { pt: "Finalização", en: "Color & VFX" }, name: "Ciro Araujo" },
    ],
    festivals: [],

    videoEmbed: "",
    highlights: [],
    isStudentProject: false,
    links: { imdb: "", letterboxd: "", pressKit: "" },
  },

  // ------------------------------------------------------------------ #4
  {
    slug: "vinte-vinte-quatro",
    title: { pt: "VINTE VINTE QUATRO", en: "TWENTY TWENTY FOUR" },
    kind: {
      pt: "Documentário • Curta-metragem",
      en: "Documentary • Short Film",
    },
    year: 2026,
    role: { pt: "Montagem, Color", en: "Editing, Color" },
    categories: ["edit"],

    synopsis: {
      pt: "Uma equipe documental acompanha um Centro de Reeducação para Adolescentes, enquanto os jovens aprendem a filmar.",
      en: "A documentary team follows a Juvenile Reeducation Center as the youth learn to film.",
    },
    directorStatement: { pt: "", en: "" },
    production: {
      pt: "Cesto du Cinema / Pulp. / EFA - UnB TV / Apoio: FINATEC / ARA Filmes",
      en: "Cesto du Cinema / Pulp. / EFA - UnB TV / Support: FINATEC / ARA Filmes",
    },

    cover: "/assets/AMARGEM_Still01.jpg",
    stills: [
      "/assets/AMARGEM_Still02.jpg",
      "/assets/AMARGEM_Still03.jpg",
      "/assets/AMARGEM_Still04.jpg",
    ],

    specs: {
      runtime: "18 min",
      aspectRatio: "",
      format: "DCP 2K",
      color: "P&B",
    },
    credits: [
      { role: { pt: "Direção", en: "Director" }, name: "Davi Pieri" },
      {
        role: { pt: "Montagem", en: "Editing" },
        name: "Ciro Araujo & Davi Pieri",
      },
      { role: { pt: "Finalização", en: "Color & VFX" }, name: "Ciro Araujo" },
    ],
    festivals: [
      "29ª Mostra de Tiradentes",
      "1º Festival Internacional de Cinema de Alegre",
    ],

    videoEmbed: "",
    highlights: [
      {
        type: "premiere",
        label: {
          pt: "29ª Mostra de Tiradentes",
          en: "29th Tiradentes Film Festival",
        },
      },
    ],
    isStudentProject: false,
    links: { imdb: "", letterboxd: "", pressKit: "" },
  },

  // ------------------------------------------------------------------ #5
  {
    slug: "a-janela-aberta",
    title: { pt: "A JANELA ABERTA", en: "THE OPEN WINDOW" },
    kind: { pt: "Ficção • Curta-metragem", en: "Fiction • Short Film" },
    year: 2025,
    role: { pt: "Co-Montagem", en: "Co-Editing" },
    categories: ["edit"],

    synopsis: {
      pt: "Francisco trabalha numa repartição. Quando volta para casa, seu carro quebra e procura ajuda em uma casa com habitantes estranhos e uma história misteriosa envolvendo a janela da residência.",
      en: "Francisco works in an office. When he returns home, his car breaks down and he seeks help in a house with strange inhabitants and a mysterious story involving the window of the residence.",
    },
    directorStatement: { pt: "", en: "" },
    production: {
      pt: "Grupo Metrópoles de Comunicação",
      en: "Grupo Metrópoles de Comunicação",
    },

    cover: "/assets/JANELAABERTA_Still01.jpg",
    stills: [
      "/assets/JANELAABERTA_Still02.jpg",
      "/assets/JANELAABERTA_Still03.jpg",
      "/assets/JANELAABERTA_Still04.jpg",
      "/assets/JANELAABERTA_Still05.jpg",
    ],

    specs: {
      runtime: "10 min",
      aspectRatio: "2,35:1",
      format: "Digital",
      color: "Cor / Color",
    },
    credits: [
      { role: { pt: "Direção", en: "Director" }, name: "Lino Meireles" },
      {
        role: { pt: "Montagem", en: "Editing" },
        name: "Ciro Araujo & Umberto Martins",
      },
    ],
    festivals: [],

    videoEmbed: "",
    highlights: [],
    isStudentProject: false,
    links: { imdb: "", letterboxd: "", pressKit: "" },
  },

  // ------------------------------------------------------------------ #6
  {
    slug: "o-que-fazem-os-padres",
    title: { pt: "O QUE FAZEM OS PADRES", en: "WHAT DO THE PRIESTS DO" },
    kind: { pt: "Ficção • Curta-metragem", en: "Fiction • Short Film" },
    year: 2024,
    role: { pt: "2º AD", en: "2nd AD" },
    categories: ["assist"],

    synopsis: {
      pt: "Paulo e Saulo estão sempre aprontando. Eles vão para a igreja e brincam de fazer filme sobre cowboys, Elvis e os padres depois que celebram a missa.",
      en: "Paulo and Saulo are constantly finding new ways to entertain themselves. They go to church and pretend to make movies about cowboys, Elvis, and what the priests do after every Mass.",
    },
    directorStatement: { pt: "", en: "" },
    production: {
      pt: "Universidade de Brasília",
      en: "University of Brasilia",
    },

    cover: "/assets/OQUEFAZEMOSPADRES_Still01.jpeg",
    stills: [
      "/assets/OQUEFAZEMOSPADRES_Still02.jpeg",
      "/assets/OQUEFAZEMOSPADRES_Still03.jpg",
      "/assets/OQUEFAZEMOSPADRES_Still04.jpg",
    ],

    specs: {
      runtime: "18 min",
      aspectRatio: "1,66:1",
      format: "Digital",
      color: "Cor / Color",
    },
    credits: [
      {
        role: { pt: "Direção", en: "Director" },
        name: "Davi Pieri & Rafael Ramagem",
      },
      { role: { pt: "2º AD", en: "2nd AD" }, name: "Ciro Araujo" },
    ],
    festivals: [],

    videoEmbed: "",
    highlights: [],
    isStudentProject: true,
    links: { imdb: "", letterboxd: "", pressKit: "" },
  },

  // ------------------------------------------------------------------ #7
  {
    slug: "vamos-ter-a-noite-seguinte",
    title: { pt: "VAMOS TER A NOITE SEGUINTE", en: "THE NIGHT AFTER" },
    kind: { pt: "Ficção • Curta-metragem", en: "Fiction • Short Film" },
    year: 2022,
    role: { pt: "Dir. Foto, 1º AD, VFX", en: "DOP, 1st AD, VFX" },
    categories: ["photo", "assist", "edit"],

    synopsis: {
      pt: "Em uma Salvador fantasma, em um período indefinido, Cleo se vê atravessada por dois sentimentos antagônicos: a solidão das ruínas físicas e políticas de um lugar outrora livre, e a esperança que mantém na última relação que permanece em sua vida - uma amiga de infância, talvez uma antiga e latente paixão.",
      en: "In a ghost town of Salvador da Bahia and in an undefined period of time, Cleo sees herself pierced by two antagonic feelings: the loneliness of the physical and political ruins from an once free place, and the hope she keeps in the last relationship that remains in her life - a childhood friend, perhaps an old and latent flame.",
    },
    directorStatement: { pt: "", en: "" },
    production: {
      pt: "Universidade de Brasília (UnB)",
      en: "University of Brasília (UnB)",
    },

    cover: "/assets/VAMOSTERANOITESEGUINTE_Still01.png",
    stills: [
      "/assets/VAMOSTERANOITESEGUINTE_Still02.png",
      "/assets/VAMOSTERANOITESEGUINTE_Still03.png",
      "/assets/VAMOSTERANOITESEGUINTE_Still04.png",
      "/assets/VAMOSTERANOITESEGUINTE_Still05.png",
    ],

    specs: {
      runtime: "10 min",
      aspectRatio: "2,35:1",
      format: "Digital",
      color: "Cor / Color",
    },
    credits: [
      {
        role: { pt: "Direção", en: "Director" },
        name: "Lucas Almeida & Rafael Rocha",
      },
      {
        role: { pt: "Direção de Fotografia", en: "DOP" },
        name: "Ciro Araujo & Matheus Leocádio",
      },
      { role: { pt: "1º AD", en: "1st AD" }, name: "Ciro Araujo" },
      { role: { pt: "VFX", en: "VFX" }, name: "Ciro Araujo" },
    ],
    festivals: [
      "Short Way International Short Film Festival 2023 (São Paulo, Brasil) - Prêmio de Melhor Cinematografia",
      "13º Festival Internacional de Cinema de Balneário Camboriú (Balneário Camboriú, Brasil)",
      "6º MOV Festival - Festival Internacional de Cinema Universitário de Recife (Recife, Brasil)",
      "17º Festival de Taguá - Seletiva Popular (Brasília, Brasil)",
    ],

    videoEmbed:
      "https://www.youtube.com/embed/Ip0JTLWRIG8?si=ul0F9cKnnxUNs4zn&autoplay=1&mute=0",
    highlights: [
      {
        type: "award",
        label: {
          pt: "Melhor Fotografia — Short Way 2023",
          en: "Best Cinematography — Short Way 2023",
        },
      },
    ],
    isStudentProject: true,
    links: {
      imdb: "",
      letterboxd:
        "https://letterboxd.com/film/the-night-after-instead-of-the-morning-before/",
      pressKit: "",
    },
  },

  // ------------------------------------------------------------------ #8
  {
    slug: "abril-1992",
    title: { pt: "ABRIL, 1992", en: "APRIL, 1992" },
    kind: {
      pt: "Experimental/Documentário • Curta-metragem",
      en: "Experimental/Documentary • Short Film",
    },
    year: 2021,
    role: { pt: "Direção, Roteiro", en: "Direction, Screenplay" },
    categories: ["dir", "script"],

    synopsis: {
      pt: "Em Abril de 1992, Alberto Fujimori declarou um “autogolpe”. Os meses logo após foram seguidos de muita turbulência. Curta metragem que experimenta com as falas do ditador misturando visões contemporâneas e fantasmagóricas do bairro de Miraflores, Lima. Editado e gravado em um iPad. Filme universitário.",
      en: "In April 1992, Alberto Fujimori declared a “self-coup”. The months that followed were marked by great turbulence. A short film that experiments with the speeches of the dictator mixing contemporary and phantasmagoric visions of the Miraflores neighborhood, Lima. Edited and recorded on an iPad. University film.",
    },
    directorStatement: { pt: "", en: "" },
    production: {
      pt: "Universidade de Brasília (UnB)",
      en: "University of Brasília (UnB)",
    },

    cover: "/assets/ABRIL1992_Still01.png",
    stills: [
      "/assets/ABRIL1992_Still02.png",
      "/assets/ABRIL1992_Still03.png",
      "/assets/ABRIL1992_Still04.png",
    ],

    specs: {
      runtime: "10 min",
      aspectRatio: "1,85:1",
      format: "Digital",
      color: "Cor / Color",
    },
    credits: [{ role: { pt: "Direção", en: "Director" }, name: "Ciro Araujo" }],
    festivals: [],

    videoEmbed: "",
    highlights: [],
    isStudentProject: true,
    links: { imdb: "", letterboxd: "", pressKit: "" },
  },

  // ------------------------------------------------------------------ #9
  {
    slug: "espaco-tempo",
    title: { pt: "ESPAÇO/TEMPO", en: "SPACE/TIME" },
    kind: {
      pt: "Experimental • Curta-metragem",
      en: "Experimental • Short Film",
    },
    year: 2020,
    role: { pt: "Direção, Montagem", en: "Direction, Editing" },
    categories: ["dir", "edit"],

    synopsis: {
      pt: "Uma experimentação durante a pandemia, realizado em isolamento com imagens de 2020. Uma espaçonave chega na Terra e observa a sociedade humana ociosa durante um dia inteiro.",
      en: "An experimentation during the pandemic, made in isolation with images from 2020. A spaceship arrives on Earth and observes the idle human society throughout an entire day.",
    },
    directorStatement: { pt: "", en: "" },
    production: {
      pt: "Universidade de Brasília (UnB)",
      en: "University of Brasília (UnB)",
    },

    cover: "/assets/ESPACOTEMPO_Still01.png",
    stills: [
      "/assets/ESPACOTEMPO_Still02.png",
      "/assets/ESPACOTEMPO_Still03.png",
      "/assets/ESPACOTEMPO_Still04.png",
    ],

    specs: {
      runtime: "2 min",
      aspectRatio: "1,85:1",
      format: "Digital",
      color: "Cor / Color",
    },
    credits: [{ role: { pt: "Direção", en: "Director" }, name: "Ciro Araujo" }],
    festivals: [],

    videoEmbed:
      "https://www.youtube.com/embed/-zMZn-a5kPo?si=RxOA7ID46TIsQaJL&autoplay=1&mute=0",
    highlights: [],
    isStudentProject: true,
    links: { imdb: "", letterboxd: "", pressKit: "" },
  },

  // ------------------------------------------------------------------ #10
  {
    slug: "a-tua-presenca",
    title: {
      pt: "A TUA PRESENÇA É A DOR QUE ME FAZ FALTA",
      en: "YOUR PRESENCE IS THE PAIN THAT LACKS ME",
    },
    kind: {
      pt: "Experimental/Ficção • Curta-metragem",
      en: "Experimental/Fiction • Short Film",
    },
    year: 2019,
    role: { pt: "Dir. Foto, Montagem", en: "DOP, Editing" },
    categories: ["photo", "edit"],

    synopsis: {
      pt: "Um homem revê cenas familiares. Seu sangue enquanto isso espirra. Curta-metragem realizado pela Universidade de Brasília.",
      en: "A man reviews family scenes. His blood splashes meanwhile. Short film made by the University of Brasília.",
    },
    directorStatement: { pt: "", en: "" },
    production: {
      pt: "Universidade de Brasília (UnB)",
      en: "University of Brasília (UnB)",
    },

    cover: "/assets/ATUAPRESENCA_Still01.png",
    stills: [
      "/assets/ATUAPRESENCA_Still02.png",
      "/assets/ATUAPRESENCA_Still03.png",
      "/assets/ATUAPRESENCA_Still04.png",
    ],

    specs: {
      runtime: "11 min",
      aspectRatio: "1,77:1",
      format: "Digital",
      color: "Cor / Color",
    },
    credits: [
      { role: { pt: "Direção", en: "Director" }, name: "Matheus Leocadio" },
      { role: { pt: "Direção de Fotografia", en: "DOP" }, name: "Ciro Araujo" },
      { role: { pt: "Montagem", en: "Editing" }, name: "Ciro Araujo" },
    ],
    festivals: [],

    videoEmbed:
      "https://www.youtube.com/embed/2OTg8tewwI8?si=7HmtBi_ElH7fJ5I3&autoplay=1&mute=0",
    highlights: [],
    isStudentProject: true,
    links: { imdb: "", letterboxd: "", pressKit: "" },
  },
];
