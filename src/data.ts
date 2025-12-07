
import { Content, FilmData, ProjectData } from './types';

/* ==========================================================================
   IMPORTS DE IMAGENS
   ========================================================================== */
import ProfilePic from './assets/profile_photo.jpg';

// Filmes
import TresPorUm1 from './assets/TRESPORUM_DEMO_PHOTO.png';
import TresPorUm2 from './assets/TRESPORUM_DEMO_PHOTO2.png';

import Ouco1 from './assets/OUCO_UMA_CIDADE_Still01.jpg';
import Ouco2 from './assets/OUCO_UMA_CIDADE_Still02.jpg';
import Ouco3 from './assets/OUCO_UMA_CIDADE_Still03.jpg';
import Ouco4 from './assets/OUCO_UMA_CIDADE_Still04.jpg';

import Jornada1 from './assets/JORNADANASESTRELAS_Still01.jpg';
import Jornada2 from './assets/JORNADANASESTRELAS_Still02.jpg';
import Jornada3 from './assets/JORNADANASESTRELAS_Still03.jpg';
import Jornada4 from './assets/JORNADANAESTRELAS_Still04.jpg';

// Janela Aberta
import Janela1 from './assets/JANELAABERTA_Still01.jpg';
import Janela2 from './assets/JANELAABERTA_Still02.jpg';
import Janela3 from './assets/JANELAABERTA_Still03.jpg';
import Janela4 from './assets/JANELAABERTA_Still04.jpg';
import Janela5 from './assets/JANELAABERTA_Still05.jpg';

import Padres1 from './assets/OQUEFAZEMOSPADRES_Still01.jpeg';
import Padres2 from './assets/OQUEFAZEMOSPADRES_Still02.jpeg';
import Padres3 from './assets/OQUEFAZEMOSPADRES_Still03.jpg';
import Padres4 from './assets/OQUEFAZEMOSPADRES_Still04.jpg';

import Noite1 from './assets/VAMOSTERANOITESEGUINTE_Still01.png';
import Noite2 from './assets/VAMOSTERANOITESEGUINTE_Still02.png';
import Noite3 from './assets/VAMOSTERANOITESEGUINTE_Still03.png';
import Noite4 from './assets/VAMOSTERANOITESEGUINTE_Still04.png';
import Noite5 from './assets/VAMOSTERANOITESEGUINTE_Still05.png';

import Abril1 from './assets/ABRIL1992_Still01.png';
import Abril2 from './assets/ABRIL1992_Still02.png';
import Abril3 from './assets/ABRIL1992_Still03.png';
import Abril4 from './assets/ABRIL1992_Still04.png';

import Espaco1 from './assets/ESPAÇOTEMPO_Still01.png';
import Espaco2 from './assets/ESPAÇOTEMPO_Still02.png';
import Espaco3 from './assets/ESPAÇOTEMPO_Still03.png';
import Espaco4 from './assets/ESPAÇOTEMPO_Still04.png';

import Atua1 from './assets/ATUAPRESENCA_Still01.png';
import Atua2 from './assets/ATUAPRESENCA_Still02.png';
import Atua3 from './assets/ATUAPRESENCA_Still03.png';
import Atua4 from './assets/ATUAPRESENCA_Still04.png';

// Amargem Stills (Usado em VINTE VINTE QUATRO)
import Amargem1 from './assets/AMARGEM_Still01.jpg';
import Amargem2 from './assets/AMARGEM_Still02.jpg';
import Amargem3 from './assets/AMARGEM_Still03.jpg';
import Amargem4 from './assets/AMARGEM_Still04.jpg';

// Zines
import Zine01 from './assets/ZINE01.png';
import Zine02 from './assets/ZINE02.png';
import Zine03 from './assets/ZINE03.png';
import Zine04 from './assets/ZINE04.png';
import Zine05 from './assets/ZINE05.png';
import Zine06 from './assets/ZINE06.png';
import Zine07 from './assets/ZINE07.png';
import Zine08 from './assets/ZINE08.png';
import Zine09 from './assets/ZINE09.png';
import Zine10 from './assets/ZINE10.png';
import Zine11 from './assets/ZINE11.png';
import Zine12 from './assets/ZINE12.png';
import Zine13 from './assets/ZINE13.png';
import Zine14 from './assets/ZINE14.jpg';
import Zine15 from './assets/ZINE15.png';
import Zine16 from './assets/ZINE16.jpeg';


/* ==========================================================================
   1. CONFIGURAÇÕES GERAIS & LINKS
   ========================================================================== */

export const PROFILE_PIC = ProfilePic;
const SUBSTACK_URL = "https://substack.com/@ciroaraujo"; 

// Links Oficiais
const CV_URL_PT = "https://drive.google.com/file/d/15eVxvgbT3m5cICl9xZC_nd7JOE_TsnfB/view?usp=sharing"; 
const CV_URL_EN = "https://drive.google.com/file/d/1T7-fINrdNNl8eUnqeAZ3K11ycHDaq5pw/view?usp=sharing";
const PORTFOLIO_PDF_URL = "https://drive.google.com/file/d/1nZMsR8OQX6aFUYOpr_JWW9BiecYCVLU5/view?usp=sharing";
const CRITICISM_DRIVE_URL = "https://drive.google.com/drive/folders/1VzuuHOclUs0NexZPrbhGWekPkx8OPnGH?usp=sharing"; 

export const SOCIAL_LINKS = {
    instagram: "https://www.instagram.com/ciroabot/",
    letterboxd: "https://letterboxd.com/ciroaraujo/",
    linkedin: "https://www.linkedin.com/in/ciroperesaraujo/",
    substack: SUBSTACK_URL
};

export const DOC_LINKS = {
    cv_pt: CV_URL_PT,
    cv_en: CV_URL_EN,
    portfolio: PORTFOLIO_PDF_URL,
    drive: CRITICISM_DRIVE_URL
};

/* ==========================================================================
   2. TRADUÇÕES E TEXTOS DO SITE
   ========================================================================== */

export const translations: Record<'pt' | 'en', Content> = {
  pt: {
    // MENU & HERO
    menu_home: "início", menu_films: "filmes", menu_projects: "projetos", menu_archive: "arquivo", menu_contact: "contato",
    title_films: "FILMES", title_projects: "OUTROS PROJETOS",
    role: "REALIZADOR AUDIOVISUAL",
    bio: "Ciro Araujo é realizador, montador, produtor, cineclubista e pesquisador. É Bacharel em Audiovisual pela UnB. Sua prática investiga imagem, memória e paisagens urbanas.",
    collab: "VAMOS CONVERSAR?", blog_btn: "★ LEIA O BLOG ★", blog_title: "LEIA O BLOG", blog_url: SUBSTACK_URL,
    marquee_text: "★ DIREÇÃO ★ FOTOGRAFIA ★ ROTEIRO ★ CRÍTICA ★ CINEMA ★ DIREÇÃO ★ FOTOGRAFIA ★ ROTEIRO ★ CRÍTICA ★ CINEMA",
    
    specs_audio: "IDIOMAS",
    specs_pt: "PORTUGUÊS (NATIVO)",
    specs_en: "INGLÊS (FLUENTE)",
    specs_es: "ESPANHOL (FLUENTE)",

    // FILTERS
    filter_all: "TODOS",
    filter_dir: "DIREÇÃO",
    filter_photo: "FOTOGRAFIA",
    filter_edit: "PÓS-PRODUÇÃO",
    filter_assist: "ASSISTÊNCIA",
    filter_script: "ROTEIRO",

    // SORTING
    sort_label: "ORDENAR POR",
    sort_newest: "MAIS RECENTES",
    sort_oldest: "MAIS ANTIGOS",
    sort_az: "A - Z",
    sort_za: "Z - A",
    year_label: "ANO",
    year_all: "TODOS OS ANOS",

    // STATUS & STAMPS
    status_pre: "EM PRÉ-PRODUÇÃO",
    student_stamp: "FILME UNIVERSITÁRIO",

    // PROJETOS (Geral)
    project_broadcast: "TRANSMITINDO DE BRASÍLIA\nUHF / VHF / DIGITAL",
    tags_curatorship: "CURADORIA", tags_criticism: "CRÍTICA", tags_education: "EDUCAÇÃO", tags_production: "PRODUÇÃO", tags_history: "HISTÓRIA",
    roles_label: "FUNÇÕES:", support_label: "APOIO:", btn_watch: "ASSISTIR VÍDEO", btn_zines: "VER ZINES (GALERIA)", present: "Atualmente",
    btn_photos: "VER FOTOS", btn_poster: "VER CARTAZ",

    // CINEBEIJOCA & OFICINA
    cine_desc: "Cineclube reinaugurado em 2023. Um projeto da Universidade de Brasília, realizado mensalmente no Cinebrasília, tornando-o o cineclube com a maior tela do Brasil. O cineclube visa projetar filmes menos conhecidos de diretores cânones do cinema mundial, transformando em um projeto de base para novos cinéfilos.",
    cine_roles: "Programador e curador; diagramador de zines; edição da vinheta oficial; crítico.",
    oficina_desc: "Oficina realizada para novos interessados em conhecer a história do cinema e entender métodos e práticas para realização cinematográfica. A metodologia traz as duas vertentes para um melhor entendimento de se produzir cinema.",
    oficina_roles: "Idealizador e professor",

    // UCB PROJECTS (2025)
    ucb_title: "PRODUÇÕES UCB",
    ucb_prod_label: "PRODUÇÃO UCB",
    ucb_vozes_title: "VOZES DIVERSAS", ucb_vozes_role: "Operação de Câmera (Ep 4-7) & Edição (Ep 4)", ucb_vozes_credits: "Dir/Prod: Raphael Cardoso",
    ucb_pop_title: "POP AO CUBO", ucb_pop_role: "Apoio Operacional (Ep 1)", ucb_pop_credits: "Dir/Prod: Ciro Marcondes • Apoio: FAP-DF",
    ucb_meta_title: "LAB METAVERSE", ucb_meta_role: "Edição & Apoio Operacional", ucb_meta_credits: "Dir/Prod: Florence Druvet • Apoio: FAP-DF/CNPQ",

    // WORKSHOPS
    work_ia_title: "ÉTICA DE IA NO AUDIOVISUAL", work_ia_role: "Professor", work_ia_context: "III Festival da Economia Criativa - UCB",
    work_cultura_title: "CULTURA INMOVIMENTO", work_cultura_role: "Professor (Imagem/Edição)", work_cultura_context: "SECEC-DF • Inst. AJA Brasil",
    work_prod_label: "PRODUÇÃO:", btn_link: "ACESSAR LINK",

    // CRITICISM ARCHIVE
    crit_title: "ARQUIVO MORTO",
    crit_subtitle: "COLEÇÃO DE CRÍTICAS (2021 - 2023)",
    crit_desc: "Uma coletânea de textos escritos para um antigo portal. Os textos seguiam algumas regras de escrita e, por isso, não estão apresentados em sua melhor forma. Organizados por pastas e acessíveis via nuvem.",
    crit_btn_drive: "ACESSAR DRIVE (ARQUIVO)",
    crit_warning: "⚠ TEXTOS ORIGINAIS EM PORTUGUÊS",

    // FOOTER & DOCS
    btn_cv: "BAIXAR CURRÍCULO (CV)",
    btn_portfolio_pdf: "PORTFÓLIO (PDF)",
    btn_rewind: "REBOBINAR (TOPO)",
    copied_msg: "COPIADO!",
    rights_reserved: "Todos os direitos reservados.",

    // MODAL
    modal_director_note: "Nota do Diretor", modal_festivals: "Festivais e Prêmios", modal_crew: "Equipe",
    modal_stills: "Imagens", modal_production: "Produção e Apoio", modal_watch_trailer: "▶ Ver Trailer"
  },
  en: {
    // MENU & HERO
    menu_home: "home", menu_films: "films", menu_projects: "projects", menu_archive: "archive", menu_contact: "contact",
    title_films: "FILMS", title_projects: "OTHER PROJECTS",
    role: "FILMMAKER",
    bio: "Ciro Araujo is a filmmaker, editor, producer, film club organizer, and researcher. He holds a Bachelor's degree in Audiovisual from UnB. His practice investigates image, memory, and urban landscapes.",
    collab: "LET'S TALK?", blog_btn: "★ READ THE BLOG ★", blog_title: "ESSAYS & WRITING", blog_url: SUBSTACK_URL,
    marquee_text: "★ DIRECTION ★ CINEMATOGRAPHY ★ SCREENWRITING ★ CRITICISM ★ CINEMA ★ DIRECTION ★ CINEMATOGRAPHY ★ SCREENWRITING ★ CRITICISM ★ CINEMA",
    
    specs_audio: "LANGUAGES",
    specs_pt: "PORTUGUESE (NATIVE)",
    specs_en: "ENGLISH (FLUENT)",
    specs_es: "SPANISH (FLUENT)",

    // FILTERS
    filter_all: "ALL",
    filter_dir: "DIRECTION",
    filter_photo: "CINEMATOGRAPHY",
    filter_edit: "POST-PRODUCTION",
    filter_assist: "ASSISTANT DIR.",
    filter_script: "SCREENPLAY",

    // SORTING
    sort_label: "SORT BY",
    sort_newest: "NEWEST FIRST",
    sort_oldest: "OLDEST FIRST",
    sort_az: "A - Z",
    sort_za: "Z - A",
    year_label: "YEAR",
    year_all: "ALL YEARS",

    // STATUS & STAMPS
    status_pre: "IN PRE-PRODUCTION",
    student_stamp: "STUDENT FILM",

    // PROJECTS (General)
    project_broadcast: "BROADCASTING FROM BRASILIA\nUHF / VHF / DIGITAL",
    tags_curatorship: "CURATORSHIP", tags_criticism: "CRITICISM", tags_education: "EDUCATION", tags_production: "PRODUÇÃO", tags_history: "HISTÓRIA",
    roles_label: "ROLES:", support_label: "SUPPORT:", btn_watch: "WATCH VIDEO", btn_zines: "VIEW ZINES (GALLERY)", present: "Present",
    btn_photos: "VIEW PHOTOS", btn_poster: "VIEW POSTER",

    // CINEBEIJOCA & WORKSHOP
    cine_desc: "Film club reopened in 2023. A project of the University of Brasília, held monthly at Cinebrasília, making it the film club with the largest screen in Brazil. The film club aims to screen lesser-known films by canonical directors of world cinema.",
    cine_roles: "Programmer & Curator; Zine Designer; Official Intro Editor; Critic.",
    oficina_desc: "Workshop held for those interested in learning film history and understanding methods and practices for filmmaking. The methodology brings both strands together for a better understanding of producing cinema.",
    oficina_roles: "Creator & Instructor",

    // UCB PROJECTS (2025)
    ucb_title: "UCB PRODUCTIONS",
    ucb_prod_label: "UCB PRODUCTION",
    ucb_vozes_title: "VOZES DIVERSAS", ucb_vozes_role: "Camera Op (Ep 4-7) & Editor (Ep 4)", ucb_vozes_credits: "Dir/Prod: Raphael Cardoso",
    ucb_pop_title: "POP AO CUBO", ucb_pop_role: "Operational Support (Ep 1)", ucb_pop_credits: "Dir/Prod: Ciro Marcondes • Support: FAP-DF",
    ucb_meta_title: "LAB METAVERSE", ucb_meta_role: "Editing & Op Support", ucb_meta_credits: "Dir/Prod: Florence Druvet • Support: FAP-DF/CNPQ",

    // WORKSHOPS
    work_ia_title: "AI ETHICS IN FILM", work_ia_role: "Instructor", work_ia_context: "III Creative Economy Festival - UCB",
    work_cultura_title: "CULTURA INMOVIMENTO", work_cultura_role: "Instructor (Cam/Edit)", work_cultura_context: "SECEC-DF • Inst. AJA Brasil",
    work_prod_label: "PRODUCTION:", btn_link: "VISIT LINK",

    // CRITICISM ARCHIVE
    crit_title: "THE ARCHIVE",
    crit_subtitle: "CRITICISM COLLECTION (2021 - 2023)",
    crit_desc: "A compendium of texts written for an old portal. The texts had some rules for writing and as such it is not presented in its best way. Organized by folders and accessible via cloud.",
    crit_btn_drive: "ACCESS DRIVE (ARCHIVE)",
    crit_warning: "⚠ ORIGINAL TEXTS IN PORTUGUÊS",

    // FOOTER & DOCS
    btn_cv: "DOWNLOAD CV (PDF)",
    btn_portfolio_pdf: "PORTFOLIO (PDF)",
    btn_rewind: "REWIND TO TOP",
    copied_msg: "COPIED!",
    rights_reserved: "All rights reserved.",

    // MODAL
    modal_director_note: "Director's Note", modal_festivals: "Festivais & Awards", modal_crew: "Crew",
    modal_stills: "Stills", modal_production: "Production & Support", modal_watch_trailer: "▶ Watch Trailer"
  }
};

/* ==========================================================================
   3. CATALOGO DE FILMES (FILMOGRAFIA)
   ========================================================================== */

export const filmsData = (lang: 'pt' | 'en'): FilmData[] => [
  
  // --------------------------------------------------------------------------
  // #1 - TRÊS POR UM
  // --------------------------------------------------------------------------
  {
    id: 'f_tres_por_um',
    title: lang === 'pt' ? "TRÊS POR UM" : "THREE FOR ONE",
    type: lang === 'pt' ? "Ficção • Curta-metragem" : "Fiction • Short Film",
    year: translations[lang].status_pre,
    role: lang === 'pt' ? "Direção, Roteiro" : "Direction, Screenplay",
    roleType: 'dir',
    desc: lang === 'pt' ? "Um dono de uma mercearia recebe a visita de três seres estranhos após seu pai desaparecer. Ele dança tango e fala sobre ir embora." : "A store owner receives a visit from three strange beings after his father disappears. He dances tango and talks about leaving.",
    img: TresPorUm1,
    stills: [TresPorUm2],
    
    // Dados Técnicos e Apoio
    production: lang === 'pt' ? "Ciano Produções / Cesto du Cinema" : "Ciano Productions / Cesto du Cinema",
    specs: {
      runtime: "23 min",
      format: "16mm",
      color: "Cor / Color"
    },
    credits: [
      { role: lang === 'pt' ? "Direção/Roteiro" : "Director/Writer", name: "Ciro Araujo" },
      { role: lang === 'pt' ? "Produção" : "Production", name: "Heloísa Schons" }
    ]
  },

  // --------------------------------------------------------------------------
  // #2 - OUÇO UMA CIDADE
  // --------------------------------------------------------------------------
  {
    id: 'f_ouco_uma_cidade',
    title: lang === 'pt' ? "OUÇO UMA CIDADE" : "I HEAR A CITY",
    type: lang === 'pt' ? "Experimental/Ficção • Curta-metragem" : "Experimental/Fiction • Short Film",
    year: "2025",
    role: lang === 'pt' ? "Direção, Roteiro, Montagem" : "Direction, Screenplay, Editing",
    roleType: 'dir',
    
    // Conteúdo
    desc: lang === 'pt' 
      ? "Um viajante e um narrador no pós-apocalipse; eles narram uma história de uma cidade que foi misteriosamente abandonada e sua paisagem destruída. A gênesis de uma cidade do interior é explorada"
      : "A traveler and a narrator in the post-apocalypse; they narrate an abandoned city as we arrive at a destroyed landscape and understand what happened to this small village. We explore the genesis of a countryside city in Brazil.",
    directorStatement: lang === 'pt'
      ? "Ouço Uma Cidade nasce de uma ansiedade compartilhada sobre pequenas cidades, tanto no Brasil quanto globalmente."
      : "I Hear A City stems from a shared anxiety about small towns and cities, both in Brazil and globally. ",
    
    // Mídia
    img: Ouco1,
    videoEmbed: "https://www.youtube.com/embed/g_cDyn_EN0M?si=67LARl6ym7AmzLc1?autoplay=1&mute=0",
    stills: [
      Ouco2,
      Ouco3,
      Ouco4
    ],
    
    // Dados Técnicos
    production: "Cesto du Cinema / LPG - MG",
    specs: {
      runtime: "15min",
      aspectRatio: "1.66:1",
      format: "DCP 2K, 35mm stills",
      color: "P&B, Cor / B&W, Color"
    },
    credits: [
      { role: lang === 'pt' ? "Roteiro" : "Screenplay", name: "Ciro Araujo" },
      { role: lang === 'pt' ? "Assistência de Direção" : "Director Assistant", name: "Giulia Dela Pace & Rafael Ramagem" },
      { role: lang === 'pt' ? "Montagem" : "Editing", name: "Ciro Araujo" }
    ],
    links: {
      letterboxd: "https://letterboxd.com/film/i-hear-a-city/",
    },
  },

  // --------------------------------------------------------------------------
  // #3 - JORNADA NAS ESTRELAS
  // --------------------------------------------------------------------------
  {
    id: 'f_jornada',
    title: lang === 'pt' ? "JORNADA NAS ESTRELAS" : "STAR JOURNEY",
    type: lang === 'pt' ? "Documentário • Curta-metragem" : "Documentary • Short Film",
    year: "2025",
    role: lang === 'pt' ? "Co-Montagem, VFX, Color" : "Co-Editing, VFX, Color",
    roleType: 'edit',
    
    desc: lang === 'pt' ? "Um homem procura fotos de sua avó e descobre a história de amor entre seus avós. Através de arquivos familiares, uma jornada intergaláctica se revela na sala de estar." : "A man searches for photos of his grandmother and discovers the love story between his grandparents. Through family archives, an intergalactic journey reveals itself in the living room.",
    img: Jornada1,
    
    production: "Cesto du Cinema",
    specs: {
      runtime: "18 min",
      aspectRatio: "1,77:1",
      format: "DCP 2K",
      color: "P&B, Cor / B&W, Color"
    },
    credits: [
        { role: lang === 'pt' ? "Direção" : "Director", name: "Angelo Pignaton" },
        { role: lang === 'pt' ? "Montagem" : "Editing", name: "Angelo Pignaton & Ciro Araujo" },
        { role: lang === 'pt' ? "Finalização" : "Color & VFX", name: "Ciro Araujo" }
    ],
    stills: [
        Jornada2,
        Jornada3,
        Jornada4
    ]
  },

  // --------------------------------------------------------------------------
  // #4 - VINTE VINTE QUATRO
  // --------------------------------------------------------------------------
  {
    id: 'f_vinte',
    title: lang === 'pt' ? "VINTE VINTE QUATRO" : "TWENTY TWENTY FOUR",
    type: lang === 'pt' ? "Documentário • Curta-metragem" : "Documentary • Short Film",
    year: "2025",
    role: lang === 'pt' ? "Montagem" : "Editing",
    roleType: 'edit',
    
    desc: lang === 'pt' ? "Uma equipe documental acompanha um Centro de Reeducação para Adolescentes, enquanto os jovens aprendem a filmar." : "A documentary team follows a Juvenile Reeducation Center as the youth learn to film.",
    img: Amargem1, // Placeholder using Amargem assets as fallback if direct assets missing
    stills: [Amargem2, Amargem3, Amargem4],
    
    production: lang === 'pt' ? "Cesto du Cinema / Pulp. / EFA - UnB TV / Apoio: FINATEC / ARA Filmes" : "Cesto du Cinema / Pulp. / EFA - UnB TV / Support: FINATEC / ARA Filmes",
    specs: { 
      runtime: "18 min", 
      color: "P&B", 
      format: "DCP 2K"
    }
  },

  // --------------------------------------------------------------------------
  // #5 - A JANELA ABERTA
  // --------------------------------------------------------------------------
  {
    id: 'f_janela',
    title: lang === 'pt' ? "A JANELA ABERTA" : "THE OPEN WINDOW",
    type: lang === 'pt' ? "Ficção • Curta-metragem" : "Fiction • Short Film",
    year: "2025",
    role: lang === 'pt' ? "Co-Montagem" : "Co-Editing",
    roleType: 'edit',
    
    desc: lang === 'pt' ? "Francisco trabalha numa repartição. Quando volta para casa, seu carro quebra e procura ajuda em uma casa com habitantes estranhos e uma história misteriosa envolvendo a janela da residência." : "Francisco works in an office. When he returns home, his car breaks down and he seeks help in a house with strange inhabitants and a mysterious story involving the window of the residence.",
    img: Janela1,
    
    production: "Grupo Metrópoles de Comunicação",
    specs: {
      runtime: "10 min",
      aspectRatio: "2,35:1",
      format: "Digital",
      color: "Cor / Color"
    },
    credits: [
      { role: lang === 'pt' ? "Direção" : "Director", name: "Lino Meireles" },
      { role: lang === 'pt' ? "Montagem" : "Editing", name: "Ciro Araujo & Umberto Martins" },
    ],
    stills: [
      Janela2,
      Janela3,
      Janela4,
      Janela5
    ]
  },
 // --------------------------------------------------------------------------
  // #6 - O QUE FAZEM OS PADRES
  // --------------------------------------------------------------------------
  {
    id: 'f_padres',
    title: lang === 'pt' ? "O QUE FAZEM OS PADRES" : "WHAT DO THE PRIESTS DO",
    type: lang === 'pt' ? "Ficção • Curta-metragem" : "Fiction • Short Film",
    year: "2024",
    role: lang === 'pt' ? "2º AD" : "2nd AD",
    roleType: 'dir',
    
    desc: lang === 'pt' ? "Paulo e Saulo estão sempre aprontando. Eles vão para a igreja e brincam de fazer filme sobre cowboys, Elvis e os padres depois que celebram a missa." : "Paulo and Saulo are constantly finding new ways to entertain themselves. They go to church and pretend to make movies about cowboys, Elvis, and what the priests do after every Mass.",
    img: Padres1,
    
    production: "Grupo Metrópoles de Comunicação",
    specs: {
      runtime: "18 min",
      aspectRatio: "1,66:1",
      format: "Digital",
      color: "Cor / Color"
    },
    credits: [
      { role: lang === 'pt' ? "Direção" : "Director", name: "Davi Pieri & Rafael Ramagem" },
      { role: lang === 'pt' ? "2º AD" : "2nd AD", name: "Ciro Araujo" },
    ],
    stills: [Padres2, Padres3, Padres4]
  },
  // --------------------------------------------------------------------------
  // #7 - VAMOS TER A NOITE SEGUINTE...
  // --------------------------------------------------------------------------
  {
    id: 'f_noite',
    title: lang === 'pt' ? "VAMOS TER A NOITE SEGUINTE" : "THE NIGHT AFTER",
    type: lang === 'pt' ? "Ficção • Curta-metragem" : "Fiction • Short Film",
    year: "2022",
    role: lang === 'pt' ? "Dir. Foto, 1º AD, VFX" : "DOP, 1st AD, VFX",
    roleType: 'photo',
    
    desc: lang === 'pt' ? "Em uma Salvador fantasma, em um período indefinido, Cleo se vê atravessada por dois sentimentos antagônicos: a solidão das ruínas físicas e políticas de um lugar outrora livre, e a esperança que mantém na última relação que permanece em sua vida - uma amiga de infância, talvez uma antiga e latente paixão." : "In a ghost town of Salvador da Bahia and in an undefined period of time, Cleo sees herself pierced by two antagonic feelings: the loneliness of the physical and political ruins from an once free place, and the hope she keeps in the last relationship that remains in her life - a childhood friend, perhaps an old and latent flame.",
    videoEmbed: "https://www.youtube.com/embed/Ip0JTLWRIG8?si=ul0F9cKnnxUNs4zn?autoplay=1&mute=0",
    img: Noite1,
    
    award: lang === 'pt' ? "Melhor Cinematografia - Short Way 2023 - ISSF" : "Best Cinematography - Short Way 2023 - ISSF",
    stickerStyle: 'star',
    
    production: lang === 'pt' ? "Universidade de Brasília (UnB)" : "University of Brasília (UnB)",
    specs: {
      runtime: "10 min",
      aspectRatio: "2,35:1",
      format: "Digital",
      color: "Cor / Color"
    },
    credits: [
      { role: lang === 'pt' ? "Direção" : "Director", name: "Lucas Almeida & Rafael Rocha" },
      { role: lang === 'pt' ? "Direção de Fotografia" : "DOP", name: "Ciro Araujo & Matheus Leocádio" },
      { role: lang === 'pt' ? "1º AD" : "1st AD", name: "Ciro Araujo" },
      { role: lang === 'pt' ? "VFX" : "VFX", name: "Ciro Araujo" }
    ],
    festivals: [
      "Short Way International Short Film Festival 2023 (São Paulo, Brasil) - Prêmio de Melhor Cinematografia",
      "13º Festival Internacional de Cinema de Balneário Camboriú (Balneário Camboriú, Brasil)",
      "6º MOV Festival - Festival Internacional de Cinema Universitário de Recife (Recife, Brasil)",
      "17º Festival de Taguá - Seletiva Popular (Brasília, Brasil)"
    ],
    stills: [
      Noite2, Noite3, Noite4, Noite5
    ],
    links: {
      letterboxd: "https://letterboxd.com/film/the-night-after-instead-of-the-morning-before/"
    },
  },
 // --------------------------------------------------------------------------
  // #8 - ABRIL, 1992
  // --------------------------------------------------------------------------
  {
    id: 'f_abril',
    title: lang === 'pt' ? "ABRIL, 1992" : "APRIL, 1992",
    type: lang === 'pt' ? "Experimental/Documentário • Curta-metragem" : "Experimental/Documentary • Short Film",
    year: "2021",
    role: lang === 'pt' ? "Direção, Roteiro" : "Direction, Screenplay",
    roleType: 'dir',
    isStudentProject: true, // Marked as Student Film
    
    desc: lang === 'pt' ? "Em Abril de 1992, Alberto Fujimori declarou um “autogolpe”. Os meses logo após foram seguidos de muita turbulência. Curta metragem que experimenta com as falas do ditador misturando visões contemporâneas e fantasmagóricas do bairro de Miraflores, Lima. Editado e gravado em um iPad. Filme universitário." : "In April 1992, Alberto Fujimori declared a “self-coup”. The months that followed were marked by great turbulence. A short film that experiments with the speeches of the dictator mixing contemporary and phantasmagoric visions of the Miraflores neighborhood, Lima. Edited and recorded on an iPad. University film.",
    img: Abril1,
    stills: [Abril2, Abril3, Abril4],
    
    production: lang === 'pt' ? "Universidade de Brasília (UnB)" : "University of Brasília (UnB)",
    specs: {
      runtime: "10 min",
      aspectRatio: "1,85:1",
      format: "Digital",
      color: "Cor / Color"
    },
    credits: [
      { role: lang === 'pt' ? "Direção" : "Director", name: "Ciro Araujo" },    
    ],
  },
   // --------------------------------------------------------------------------
  // #9 - ESPAÇO/TEMPO
  // --------------------------------------------------------------------------
  {
    id: 'f_espacotempo',
    title: lang === 'pt' ? "ESPAÇO/TEMPO" : "SPACE/TIME",
    type: lang === 'pt' ? "Experimental • Curta-metragem" : "Experimental • Short Film",
    year: "2020",
    role: lang === 'pt' ? "Direção, Montagem" : "Direction, Editing",
    roleType: 'dir',
    isStudentProject: true,
    videoEmbed: "https://www.youtube.com/embed/-zMZn-a5kPo?si=RxOA7ID46TIsQaJL?autoplay=1&mute=0",
    desc: lang === 'pt' ? "Uma experimentação durante a pandemia, realizado em isolamento com imagens de 2020. Uma espaçonave chega na Terra e observa a sociedade humana ociosa durante um dia inteiro." : "An experimentation during the pandemic, made in isolation with images from 2020. A spaceship arrives on Earth and observes the idle human society throughout an entire day.",
    img: Espaco1,
    stills: [Espaco2, Espaco3, Espaco4],
    
    production: lang === 'pt' ? "Universidade de Brasília (UnB)" : "University of Brasília (UnB)",
    specs: {
      runtime: "2 min",
      aspectRatio: "1,85:1",
      format: "Digital",
      color: "Cor / Color"
    },
    credits: [
      { role: lang === 'pt' ? "Direção" : "Director", name: "Ciro Araujo" },    
    ],
  },
  // --------------------------------------------------------------------------
  // #10 - A TUA PRESENÇA É A DOR QUE ME FAZ FALTA
  // --------------------------------------------------------------------------
  {
    id: 'f_atua_presenca',
    title: lang === 'pt' ? "A TUA PRESENÇA É A DOR QUE ME FAZ FALTA" : "YOUR PRESENCE IS THE PAIN THAT LACKS ME",
    type: lang === 'pt' ? "Experimental/Ficção • Curta-metragem" : "Experimental/Fiction • Short Film",
    year: "2019",
    role: lang === 'pt' ? "Dir. Foto, Montagem" : "DOP, Editing",
    roleType: 'dir',
    isStudentProject: true, // Marked as Student Film
    
    desc: lang === 'pt' ? "Um homem revê cenas familiares. Seu sangue enquanto isso espirra. Curta-metragem realizado pela Universidade de Brasília." : "A man reviews family scenes. His blood splashes meanwhile. Short film made by the University of Brasília.",
    videoEmbed: "https://www.youtube.com/embed/2OTg8tewwI8?si=7HmtBi_ElH7fJ5I3?autoplay=1&mute=0",
    img: Atua1,
    stills: [Atua2, Atua3, Atua4],
    
    production: lang === 'pt' ? "Universidade de Brasília (UnB)" : "University of Brasília (UnB)",
    specs: {
      runtime: "11 min",
      aspectRatio: "1,77:1",
      format: "Digital",
      color: "Cor / Color"
    },
    credits: [
      { role: lang === 'pt' ? "Direção" : "Director", name: "Matheus Leocadio" },
      { role: lang === 'pt' ? "Direção de Fotografia" : "DOP", name: "Ciro Araujo" },
      { role: lang === 'pt' ? "Montagem" : "Editing", name: "Ciro Araujo" }
    ],
  },
];

export const zineImages = [
  Zine01, Zine02, Zine03, Zine04, Zine05, Zine06, Zine07, Zine08, 
  Zine09, Zine10, Zine11, Zine12, Zine13, Zine14, Zine15, Zine16
];
