export interface IBreadcrumb {
  childrenLabel: string;
  parentLink?: ILinkComponent;
}

export interface ILinkComponent {
  link: string;
  label: string;
}
