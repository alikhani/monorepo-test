export interface ICategory {
  id?: string;
  displayName: CategoryEnum;
  description?: string;
  areaId: string;
}

export enum CategoryEnum {
  JAVASCRIPT = 'javascript',
  PYTHON = 'python',
  JAVA = 'java',
}
