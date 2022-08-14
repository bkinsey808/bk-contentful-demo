export type Theme = 'Global' | 'Monochrome' | 'BlueTint' | 'DarkMonochrome';

  export type ComponentType = 
  | 'Page'
  | 'Banner'
  | 'NavigationMenuItem'
  | 'PageTemplate'
  | 'NavigationMenu'
  | 'Daughter'
  | 'Theme';

export interface Component {
  type: ComponentType;
  theme?: Theme;
}

export interface ComponentReference  {
  type: ComponentType;
  id: string;
}

export interface PageProps extends Component {
  type: 'Page';
  content_title: string;
  content_slug: string;
  content_pageTemplateComponent: ComponentReference;
  content_content: ComponentReference[];
}

export interface BannerProps extends Component {
  type: 'Banner';
  content_componentName: string;
  content_componentType: string;
  content_height: string;
}

export interface NavigationMenuItemProps extends Component {
  type: 'NavigationMenuItem';
  content_componentName: string;
  content_componentType: string;
  content_label: string;
  content_url: string;
  content_navigationMenuItems: ComponentReference[];
}

export interface PageTemplateProps extends Component {
  type: 'PageTemplate';
  content_componentName: string;
  content_componentType: string;
  content_theme: ComponentReference;
}

export interface NavigationMenuProps extends Component {
  type: 'NavigationMenu';
  content_componentName: string;
  content_componentType: string;
  content_navigationMenuItems: ComponentReference[];
}

export interface DaughterProps extends Component {
  type: 'Daughter';
  content_fieldOne: string;
  content_fieldTwo: string;
}

export interface ThemeProps extends Component {
  type: 'Theme';
  content_id: string;
};
