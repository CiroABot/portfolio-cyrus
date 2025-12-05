
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
   3. DATA (FILMS & ZINES)
   ========================================================================== */

export const zineImages = [
    Zine01, Zine02, Zine03, Zine04, Zine05, Zine06, Zine07, Zine08, 
    Zine09, Zine10, Zine11, Zine12, Zine13, Zine14, Zine15, Zine16
];

export const filmsData = (lang: 'pt' | 'en'): FilmData[] => {
    const t = translations[lang];

    return [
        {
            id: "tres-por-um",
            title: "Três Por Um",
            type: lang === 'pt' ? "Curta-metragem" : "Short Film",
            year: t.status_pre,
            role: lang === 'pt' ? "Direção & Roteiro" : "Direction & Screenplay",
            roleType: "dir",
            desc: lang === 'pt' ? 
                  "Três histórias distintas que se entrelaçam em uma narrativa única sobre perda, memória e a passagem do tempo em uma cidade em constante transformação." :
                  "Three distinct stories intertwine in a unique narrative about loss, memory, and the passage of time in a constantly transforming city.",
            img: TresPorUm1,
            stills: [TresPorUm1, TresPorUm2],
            isStudentProject: true,
            production: "UnB",
            specs: { runtime: "15 min", color: "Cor / P&B" }
        },
        {
            id: "ouco-uma-cidade",
            title: "Ouço Uma Cidade",
            type: lang === 'pt' ? "Curta-metragem" : "Short Film",
            year: "2023",
            role: lang === 'pt' ? "Direção, Roteiro & Montagem" : "Direction, Screenplay & Edit",
            roleType: "dir",
            desc: lang === 'pt' ? 
                  "Um ensaio poético sobre os sons que habitam Brasília e como eles moldam a experiência urbana de seus habitantes." :
                  "A poetic essay on the sounds that inhabit Brasília and how they shape the urban experience of its inhabitants.",
            img: Ouco1,
            stills: [Ouco1, Ouco2, Ouco3, Ouco4],
            videoEmbed: "https://www.youtube.com/embed/placeholder",
            isStudentProject: true,
            production: "UnB",
            specs: { runtime: "20 min", color: "Cor" },
            award: lang === 'pt' ? "Melhor Som - Fest. Brasília" : "Best Sound - Brasilia Fest"
        },
        {
            id: "jornada-nas-estrelas",
            title: "Jornada Nas Estrelas",
            type: lang === 'pt' ? "Videoclipe" : "Music Video",
            year: "2023",
            role: lang === 'pt' ? "Direção & Montagem" : "Direction & Edit",
            roleType: "dir",
            desc: "Videoclipe oficial para a faixa 'Jornada Nas Estrelas'.",
            img: Jornada1,
            stills: [Jornada1, Jornada2, Jornada3, Jornada4],
            videoEmbed: "https://www.youtube.com/embed/placeholder",
            specs: { runtime: "4 min", color: "Cor" }
        },
        {
            id: "janela-aberta",
            title: "Janela Aberta",
            type: lang === 'pt' ? "Curta-metragem" : "Short Film",
            year: "2022",
            role: lang === 'pt' ? "Direção de Fotografia" : "Cinematography",
            roleType: "photo",
            desc: lang === 'pt' ? "Um olhar íntimo sobre o cotidiano através de uma janela que nunca se fecha." : "An intimate look at everyday life through a window that never closes.",
            img: Janela1,
            stills: [Janela1, Janela2, Janela3, Janela4, Janela5],
            isStudentProject: true,
            specs: { runtime: "12 min", color: "Cor" }
        },
        {
            id: "o-que-fazemos-padres",
            title: "O Que Fazemos Com Os Padres?",
            type: lang === 'pt' ? "Curta-metragem" : "Short Film",
            year: "2022",
            role: lang === 'pt' ? "Montagem" : "Editing",
            roleType: "edit",
            desc: lang === 'pt' ? "Documentário investigativo sobre a influência religiosa na política local." : "Investigative documentary about religious influence on local politics.",
            img: Padres1,
            stills: [Padres1, Padres2, Padres3, Padres4],
            specs: { runtime: "18 min", color: "Cor" }
        },
        {
            id: "vamos-ter-a-noite",
            title: "Vamos Ter A Noite Seguinte",
            type: lang === 'pt' ? "Curta-metragem" : "Short Film",
            year: "2021",
            role: lang === 'pt' ? "Direção de Fotografia" : "Cinematography",
            roleType: "photo",
            desc: lang === 'pt' ? "Uma narrativa noturna sobre encontros e desencontros em uma metrópole." : "A nocturnal narrative about encounters and missed connections in a metropolis.",
            img: Noite1,
            stills: [Noite1, Noite2, Noite3, Noite4, Noite5],
            specs: { runtime: "14 min", color: "Cor" }
        },
        {
            id: "abril-1992",
            title: "Abril 1992",
            type: lang === 'pt' ? "Curta-metragem" : "Short Film",
            year: "2021",
            role: lang === 'pt' ? "Assistência de Direção" : "Assistant Director",
            roleType: "dir",
            desc: lang === 'pt' ? "Reconstrução histórica de eventos marcantes de abril de 1992." : "Historical reconstruction of striking events from April 1992.",
            img: Abril1,
            stills: [Abril1, Abril2, Abril3, Abril4],
            specs: { runtime: "10 min", color: "Cor" }
        },
        {
            id: "espaco-tempo",
            title: "Espaço Tempo",
            type: lang === 'pt' ? "Experimental" : "Experimental",
            year: "2020",
            role: lang === 'pt' ? "Montagem & Cor" : "Editing & Color",
            roleType: "edit",
            desc: lang === 'pt' ? "Videoarte explorando a relatividade do tempo durante o isolamento." : "Video art exploring the relativity of time during isolation.",
            img: Espaco1,
            stills: [Espaco1, Espaco2, Espaco3, Espaco4],
            specs: { runtime: "5 min", color: "Cor" }
        },
        {
            id: "a-tua-presenca",
            title: "A Tua Presença",
            type: lang === 'pt' ? "Curta-metragem" : "Short Film",
            year: "2020",
            role: lang === 'pt' ? "Roteiro" : "Screenplay",
            roleType: "dir",
            desc: lang === 'pt' ? "Um drama intimista sobre ausência e saudade." : "An intimate drama about absence and longing.",
            img: Atua1,
            stills: [Atua1, Atua2, Atua3, Atua4],
            specs: { runtime: "13 min", color: "P&B" }
        },
        {
            id: "amargem",
            title: "Amargem",
            type: lang === 'pt' ? "Fotografia Still" : "Still Photography",
            year: "2024",
            role: lang === 'pt' ? "Fotografia" : "Photography",
            roleType: "photo",
            desc: lang === 'pt' ? "Série fotográfica documental sobre as margens do Lago Paranoá." : "Documentary photographic series about the margins of Lake Paranoá.",
            img: Amargem1,
            stills: [Amargem1, Amargem2, Amargem3, Amargem4],
            specs: { color: "Cor" }
        }
    ];
};
