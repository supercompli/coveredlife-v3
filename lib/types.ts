export interface Policy {
  title: string;
  description: string;
  detailedDescription: string[];
  href: string;
  category: 'Director' | 'Group' | 'Personal';
}

export interface NavLink {
  title: string;
  href: string;
}

export interface NavItem {
  label: string;
  options?: NavLink[];
  groups?: {
    title: string;
    options: NavLink[];
  }[];
}
