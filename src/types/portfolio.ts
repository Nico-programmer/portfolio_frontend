// ==========================
// Biography
// ==========================

export interface Biography {
  id: number;

  full_name: string;

  profession: string;

  short_description: string;

  about: string;

  profile_picture: string | null;

  cv: string | null;

  available_for_work: boolean;

  created_at: string;

  updated_at: string;
}

// ==========================
// Technology
// ==========================

export interface Technology {
  id: number;

  category:
    | "language"
    | "frontend"
    | "backend"
    | "database"
    | "devops"
    | "tool";

  name: string;

  slug: string;

  icon: string | null;

  level: number;

  order: number;

  is_visible: boolean;

  created_at: string;

  updated_at: string;
}

// ==========================
// Project Images
// ==========================

export interface ProjectImage {
  id: number;
  image: string;
  alt_text: string;
  order: number;
}

// ==========================
// Project
// ==========================

export interface Project {
  id: number
  title: string
  short_description: string
  description: string
  thumbnail: string | null

  github_url: string | null
  demo_url: string | null

  status: "completed" | "in_progress" | "archived"
  featured: boolean
  technologies: Technology[]

  images: ProjectImage[]
  order: number
  is_visible: boolean

  created_at: string
  updated_at: string
}

// ==========================
// Experience
// ==========================

export interface Experience {
  id: number;

  company: string;
  position: string;
  description: string;

  company_logo: string | null;
  location: string | null;

  start_date: string;
  end_date: string | null;

  current_job: boolean;

  technologies: Technology[];

  order: number;
  is_visible: boolean;

  created_at: string;
  updated_at: string;
}

// ==========================
// Education
// ==========================

export interface Education {
  id: number;

  institution: string;
  degree: string;
  description: string;

  institution_logo: string | null;

  start_date: string;
  end_date: string | null;

  currently_studying: boolean;

  certificate_url: string;

  order: number;
  is_visible: boolean;

  created_at: string;
  updated_at: string;
}

// ==========================
// Social Links
// ==========================

export interface SocialLink {
  id: number;

  name: string;

  icon: string;

  url: string;

  order: number;

  is_visible: boolean;

  created_at: string;

  updated_at: string;
}

// ==========================
// Portfolio Response
// ==========================

export interface PortfolioResponse {
  biography: Biography;

  technologies: Technology[];

  projects: Project[];

  experiences: Experience[];

  education: Education[];

  social_links: SocialLink[];
}