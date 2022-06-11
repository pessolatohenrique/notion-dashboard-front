export interface IDatabaseResponseList {
  items: Array<IDatabaseResponse>;
}

export interface IDatabaseSearchForm {
  id: string;
}

export interface IDatabaseResponse {
  id: string;
  title: string;
  url: string;
  archived: boolean;
}
