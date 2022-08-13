export type ComponentType = 
  | 'Page'
  | 'Banner'
  | 'NavigationMenuItem'
  | 'PageTemplate'
  | 'NavigationMenu'
  | 'Palette'
  | 'Color'
  | 'PaletteRole'
  | 'Daughter';

export interface Component {
  type: ComponentType;
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
  content_palette: ComponentReference;
}

export interface NavigationMenuProps extends Component {
  type: 'NavigationMenu';
  content_componentName: string;
  content_componentType: string;
  content_navigationMenuItems: ComponentReference[];
}

export interface PaletteProps extends Component {
  type: 'Palette';
  content_componentName: string;
  content_componentType: string;
  content_colors: ComponentReference[];
}

export interface ColorProps extends Component {
  type: 'Color';
  content_componentName: string;
  content_componentType: string;
  content_colorCode: string;
  content_paletteRole: ComponentReference;
  content_lightModeColor: string;
  content_darkModeColor: string;
}

export interface PaletteRoleProps extends Component {
  type: 'PaletteRole';
  content_name: string;
  content_code: string;
}

export interface DaughterProps extends Component {
  type: 'Daughter';
  content_fieldOne: string;
  content_fieldTwo: string;
};
