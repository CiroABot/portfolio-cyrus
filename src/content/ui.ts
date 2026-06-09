/* ==========================================================================
   UI STRINGS  —  menus, buttons, labels, section intros, modal text
   --------------------------------------------------------------------------
   These are the fixed bits of interface copy (not films/projects). Each key
   exists once per language. Films and projects have their OWN files.
   ========================================================================== */

import { Content } from '../types';
import { SOCIAL_LINKS } from './site';

const SUBSTACK_URL = SOCIAL_LINKS.substack;

export const translations: Record<'pt' | 'en', Content> = {
  pt: {
    // MENU & HERO
    menu_home: 'início', menu_films: 'filmes', menu_projects: 'projetos', menu_archive: 'arquivo', menu_contact: 'contato',
    title_films: 'FILMES', title_projects: 'OUTROS PROJETOS',
    role: 'REALIZADOR AUDIOVISUAL',
    bio: 'Ciro Araujo é realizador, montador, produtor, cineclubista e pesquisador. É Bacharel em Audiovisual pela UnB. Sua prática investiga imagem, memória e paisagens urbanas.',
    collab: 'VAMOS CONVERSAR?', blog_btn: '★ LEIA O BLOG ★', blog_title: 'LEIA O BLOG', blog_url: SUBSTACK_URL,
    marquee_text: '★ DIREÇÃO ★ FOTOGRAFIA ★ ROTEIRO ★ CRÍTICA ★ CINEMA ★ DIREÇÃO ★ FOTOGRAFIA ★ ROTEIRO ★ CRÍTICA ★ CINEMA',

    specs_audio: 'IDIOMAS',
    specs_pt: 'PORTUGUÊS (NATIVO)',
    specs_en: 'INGLÊS (FLUENTE)',
    specs_es: 'ESPANHOL (FLUENTE)',

    // FILTERS
    filter_all: 'TODOS',
    filter_dir: 'DIREÇÃO',
    filter_photo: 'FOTOGRAFIA',
    filter_edit: 'PÓS-PRODUÇÃO',
    filter_assist: 'ASSISTÊNCIA',
    filter_script: 'ROTEIRO',
    filter_prod: 'PRODUÇÃO',

    // SORTING
    sort_label: 'ORDENAR POR',
    sort_newest: 'MAIS RECENTES',
    sort_oldest: 'MAIS ANTIGOS',
    sort_az: 'A - Z',
    sort_za: 'Z - A',
    year_label: 'ANO',
    year_all: 'TODOS OS ANOS',
    search_label: 'BUSCAR',
    search_placeholder: 'Título do filme...',
    genre_label: 'GÊNERO',
    genre_all: 'TODOS OS GÊNEROS',
    clear_filters: 'LIMPAR',
    results_label: 'RESULTADOS',
    no_results: '[ NENHUM SINAL DETECTADO NESTA FREQUÊNCIA ]',
    hl_award: 'PRÊMIO',
    hl_premiere: 'ESTREIA',
    hl_selection: 'SELEÇÃO',

    // STATUS & STAMPS
    status_pre: 'EM PRÉ-PRODUÇÃO',
    student_stamp: 'FILME UNIVERSITÁRIO',

    // PROJETOS (Geral)
    project_broadcast: 'TRANSMITINDO DE BRASÍLIA\nUHF / VHF / DIGITAL',
    tags_curatorship: 'CURADORIA', tags_criticism: 'CRÍTICA', tags_education: 'EDUCAÇÃO', tags_production: 'PRODUÇÃO', tags_history: 'HISTÓRIA',
    roles_label: 'FUNÇÕES:', support_label: 'APOIO:', btn_watch: 'ASSISTIR VÍDEO', btn_zines: 'VER ZINES (GALERIA)', present: 'Atualmente',
    btn_photos: 'VER FOTOS', btn_poster: 'VER CARTAZ',

    // CINEBEIJOCA & OFICINA
    cine_desc: 'Cineclube reinaugurado em 2023. Um projeto da Universidade de Brasília, realizado mensalmente no Cinebrasília, tornando-o o cineclube com a maior tela do Brasil. O cineclube visa projetar filmes menos conhecidos de diretores cânones do cinema mundial, transformando em um projeto de base para novos cinéfilos.',
    cine_roles: 'Programador e curador; diagramador de zines; edição da vinheta oficial; crítico.',
    oficina_desc: 'Oficina realizada para novos interessados em conhecer a história do cinema e entender métodos e práticas para realização cinematográfica. A metodologia traz as duas vertentes para um melhor entendimento de se produzir cinema.',
    oficina_roles: 'Idealizador e professor',

    // UCB PROJECTS (2025)
    ucb_title: 'PRODUÇÕES UCB',
    ucb_prod_label: 'PRODUÇÃO UCB',
    ucb_vozes_title: 'VOZES DIVERSAS', ucb_vozes_role: 'Operação de Câmera (Ep 4-7) & Edição (Ep 4)', ucb_vozes_credits: 'Dir/Prod: Raphael Cardoso',
    ucb_pop_title: 'POP AO CUBO', ucb_pop_role: 'Apoio Operacional (Ep 1)', ucb_pop_credits: 'Dir/Prod: Ciro Marcondes • Apoio: FAP-DF',
    ucb_meta_title: 'LAB METAVERSE', ucb_meta_role: 'Edição & Apoio Operacional', ucb_meta_credits: 'Dir/Prod: Florence Druvet • Apoio: FAP-DF/CNPQ',

    // WORKSHOPS
    work_ia_title: 'ÉTICA DE IA NO AUDIOVISUAL', work_ia_role: 'Professor', work_ia_context: 'III Festival da Economia Criativa - UCB',
    work_cultura_title: 'CULTURA INMOVIMENTO', work_cultura_role: 'Professor (Imagem/Edição)', work_cultura_context: 'SECEC-DF • Inst. AJA Brasil',
    work_prod_label: 'PRODUÇÃO:', btn_link: 'ACESSAR LINK',

    // CRITICISM ARCHIVE
    crit_title: 'ARQUIVO MORTO',
    crit_subtitle: 'COLEÇÃO DE CRÍTICAS (2021 - 2023)',
    crit_desc: 'Uma coletânea de textos escritos para um antigo portal. Os textos seguiam algumas regras de escrita e, por isso, não estão apresentados em sua melhor forma. Organizados por pastas e acessíveis via nuvem.',
    crit_btn_drive: 'ACESSAR DRIVE (ARQUIVO)',
    crit_warning: '⚠ TEXTOS ORIGINAIS EM PORTUGUÊS',

    // FOOTER & DOCS
    btn_cv: 'BAIXAR CURRÍCULO (CV)',
    btn_portfolio_pdf: 'PORTFÓLIO (PDF)',
    btn_rewind: 'REBOBINAR (TOPO)',
    copied_msg: 'COPIADO!',
    rights_reserved: 'Todos os direitos reservados.',

    // MODAL
    modal_director_note: 'Nota do Diretor', modal_festivals: 'Festivais e Prêmios', modal_crew: 'Equipe',
    modal_stills: 'Imagens', modal_production: 'Produção e Apoio', modal_watch_trailer: '▶ Ver Trailer',
  },
  en: {
    // MENU & HERO
    menu_home: 'home', menu_films: 'films', menu_projects: 'projects', menu_archive: 'archive', menu_contact: 'contact',
    title_films: 'FILMS', title_projects: 'OTHER PROJECTS',
    role: 'FILMMAKER',
    bio: "Ciro Araujo is a filmmaker, editor, producer, film club organizer, and researcher. He holds a Bachelor's degree in Audiovisual from UnB. His practice investigates image, memory, and urban landscapes.",
    collab: "LET'S TALK?", blog_btn: '★ READ THE BLOG ★', blog_title: 'ESSAYS & WRITING', blog_url: SUBSTACK_URL,
    marquee_text: '★ DIRECTION ★ CINEMATOGRAPHY ★ SCREENWRITING ★ CRITICISM ★ CINEMA ★ DIRECTION ★ CINEMATOGRAPHY ★ SCREENWRITING ★ CRITICISM ★ CINEMA',

    specs_audio: 'LANGUAGES',
    specs_pt: 'PORTUGUESE (NATIVE)',
    specs_en: 'ENGLISH (FLUENT)',
    specs_es: 'SPANISH (FLUENT)',

    // FILTERS
    filter_all: 'ALL',
    filter_dir: 'DIRECTION',
    filter_photo: 'CINEMATOGRAPHY',
    filter_edit: 'POST-PRODUCTION',
    filter_assist: 'ASSISTANT DIR.',
    filter_script: 'SCREENPLAY',
    filter_prod: 'PRODUCTION',

    // SORTING
    sort_label: 'SORT BY',
    sort_newest: 'NEWEST FIRST',
    sort_oldest: 'OLDEST FIRST',
    sort_az: 'A - Z',
    sort_za: 'Z - A',
    year_label: 'YEAR',
    year_all: 'ALL YEARS',
    search_label: 'SEARCH',
    search_placeholder: 'Film title...',
    genre_label: 'GENRE',
    genre_all: 'ALL GENRES',
    clear_filters: 'CLEAR',
    results_label: 'RESULTS',
    no_results: '[ NO SIGNAL DETECTED FOR THIS FREQUENCY ]',
    hl_award: 'AWARD',
    hl_premiere: 'PREMIERE',
    hl_selection: 'SELECTION',

    // STATUS & STAMPS
    status_pre: 'IN PRE-PRODUCTION',
    student_stamp: 'STUDENT FILM',

    // PROJECTS (General)
    project_broadcast: 'BROADCASTING FROM BRASILIA\nUHF / VHF / DIGITAL',
    tags_curatorship: 'CURATORSHIP', tags_criticism: 'CRITICISM', tags_education: 'EDUCATION', tags_production: 'PRODUCTION', tags_history: 'HISTORY',
    roles_label: 'ROLES:', support_label: 'SUPPORT:', btn_watch: 'WATCH VIDEO', btn_zines: 'VIEW ZINES (GALLERY)', present: 'Present',
    btn_photos: 'VIEW PHOTOS', btn_poster: 'VIEW POSTER',

    // CINEBEIJOCA & WORKSHOP
    cine_desc: 'Film club reopened in 2023. A project of the University of Brasília, held monthly at Cinebrasília, making it the film club with the largest screen in Brazil. The film club aims to screen lesser-known films by canonical directors of world cinema.',
    cine_roles: 'Programmer & Curator; Zine Designer; Official Intro Editor; Critic.',
    oficina_desc: 'Workshop held for those interested in learning film history and understanding methods and practices for filmmaking. The methodology brings both strands together for a better understanding of producing cinema.',
    oficina_roles: 'Creator & Instructor',

    // UCB PROJECTS (2025)
    ucb_title: 'UCB PRODUCTIONS',
    ucb_prod_label: 'UCB PRODUCTION',
    ucb_vozes_title: 'VOZES DIVERSAS', ucb_vozes_role: 'Camera Op (Ep 4-7) & Editor (Ep 4)', ucb_vozes_credits: 'Dir/Prod: Raphael Cardoso',
    ucb_pop_title: 'POP AO CUBO', ucb_pop_role: 'Operational Support (Ep 1)', ucb_pop_credits: 'Dir/Prod: Ciro Marcondes • Support: FAP-DF',
    ucb_meta_title: 'LAB METAVERSE', ucb_meta_role: 'Editing & Op Support', ucb_meta_credits: 'Dir/Prod: Florence Druvet • Support: FAP-DF/CNPQ',

    // WORKSHOPS
    work_ia_title: 'AI ETHICS IN FILM', work_ia_role: 'Instructor', work_ia_context: 'III Creative Economy Festival - UCB',
    work_cultura_title: 'CULTURA INMOVIMENTO', work_cultura_role: 'Instructor (Cam/Edit)', work_cultura_context: 'SECEC-DF • Inst. AJA Brasil',
    work_prod_label: 'PRODUCTION:', btn_link: 'VISIT LINK',

    // CRITICISM ARCHIVE
    crit_title: 'THE ARCHIVE',
    crit_subtitle: 'CRITICISM COLLECTION (2021 - 2023)',
    crit_desc: 'A compendium of texts written for an old portal. The texts had some rules for writing and as such it is not presented in its best way. Organized by folders and accessible via cloud.',
    crit_btn_drive: 'ACCESS DRIVE (ARCHIVE)',
    crit_warning: '⚠ ORIGINAL TEXTS IN PORTUGUESE',

    // FOOTER & DOCS
    btn_cv: 'DOWNLOAD CV (PDF)',
    btn_portfolio_pdf: 'PORTFOLIO (PDF)',
    btn_rewind: 'REWIND TO TOP',
    copied_msg: 'COPIED!',
    rights_reserved: 'All rights reserved.',

    // MODAL
    modal_director_note: "Director's Note", modal_festivals: 'Festivals & Awards', modal_crew: 'Crew',
    modal_stills: 'Stills', modal_production: 'Production & Support', modal_watch_trailer: '▶ Watch Trailer',
  },
};
