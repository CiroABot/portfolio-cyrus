

export type Language = 'pt' | 'en';

/** The role buckets a film can be tagged with — the single source of truth
    for portfolio filtering. A film can belong to several at once. */
export type FilmCategory = 'dir' | 'photo' | 'edit' | 'script' | 'assist' | 'prod';

/** A spotlight shown as a badge on the film: an award won, a notable premiere,
    or an official selection. (A premiere can matter more than a minor award.) */
export type HighlightType = 'award' | 'premiere' | 'selection';
export interface FilmHighlight {
  type: HighlightType;
  label: string;
}

export interface Content {
  menu_home: string;
  menu_films: string;
  menu_projects: string;
  menu_archive: string;
  menu_contact: string;
  title_films: string;
  title_projects: string;
  role: string;
  bio: string;
  collab: string;
  blog_btn: string;
  blog_title: string; // New
  blog_url: string;
  marquee_text: string;
  cine_desc: string;
  cine_roles: string;
  roles_label: string;
  support_label: string;
  btn_watch: string;
  btn_zines: string;
  present: string;
  oficina_desc: string;
  oficina_roles: string;
  btn_photos: string;
  btn_poster: string;
  
  // Audio Specs
  specs_audio: string;
  specs_pt: string;
  specs_en: string;
  specs_es: string;
  
  // Filters
  filter_all: string;
  filter_dir: string;
  filter_photo: string;
  filter_edit: string;
  filter_assist: string;
  filter_script: string;
  filter_prod: string;
  
  // Sorting & Controls
  sort_label: string;
  sort_newest: string;
  sort_oldest: string;
  sort_az: string;
  sort_za: string;
  year_label: string;
  year_all: string;

  // Search & extra filtering
  search_label: string;
  search_placeholder: string;
  genre_label: string;
  genre_all: string;
  clear_filters: string;
  results_label: string;
  no_results: string;

  // Highlight badge kickers
  hl_award: string;
  hl_premiere: string;
  hl_selection: string;

  // Status & Stamps
  status_pre: string;
  student_stamp: string;

  // Project Tags & Headers
  project_broadcast: string;
  tags_curatorship: string;
  tags_criticism: string;
  tags_education: string;
  tags_production: string;
  tags_history: string;

  // UCB TV Projects (2025)
  ucb_title: string;
  ucb_vozes_title: string;
  ucb_vozes_role: string;
  ucb_vozes_credits: string;
  ucb_pop_title: string;
  ucb_pop_role: string;
  ucb_pop_credits: string;
  ucb_meta_title: string;
  ucb_meta_role: string;
  ucb_meta_credits: string;
  ucb_prod_label: string;

  // Workshops
  work_ia_title: string;
  work_ia_role: string;
  work_ia_context: string;
  work_cultura_title: string;
  work_cultura_role: string;
  work_cultura_context: string;
  work_prod_label: string;
  btn_link: string;

  // Criticism Section (NEW)
  crit_title: string;
  crit_subtitle: string;
  crit_desc: string;
  crit_btn_drive: string;
  crit_warning: string;

  // Footer & Documents
  btn_cv: string;
  btn_portfolio_pdf: string;
  btn_rewind: string;
  copied_msg: string; // New
  rights_reserved: string;

  // Modal Translations
  modal_director_note: string;
  modal_festivals: string;
  modal_crew: string;
  modal_stills: string;
  modal_production: string;
  modal_watch_trailer: string;
}

export interface Credit {
  role: string;
  name: string;
}

export interface TechSpecs {
  runtime?: string;
  aspectRatio?: string;
  format?: string;
  color?: string; // e.g. "Cor / P&B"
}

export interface ExternalLinks {
  imdb?: string;
  letterboxd?: string;
  pressKit?: string; // URL to PDF or Drive
}

export interface FilmData {
  id: string;
  title: string;
  type: string;
  year: string;
  role: string;
  categories: FilmCategory[];
  desc: string;
  img: string;
  videoEmbed?: string;
  logo?: string; 
  highlights?: FilmHighlight[];
  
  // New Property for Student Films
  isStudentProject?: boolean;

  directorStatement?: string;
  specs?: TechSpecs;
  credits?: Credit[];
  festivals?: string[];
  stills?: string[];
  links?: ExternalLinks;
  production?: string; 
}

export interface ProjectData {
  id: string;
  title: string;
  year: string;
  desc: string;
  roles: string;
  support: string;
  hasVideo?: boolean;
  videoUrl?: string;
  hasZine?: boolean;
  hasPoster?: boolean;
  posterUrl?: string;
}