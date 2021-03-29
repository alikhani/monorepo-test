export interface ICategoryArea {
  id?: string;
  displayName: CategoryAreaEnum;
  description?: string;
}

export enum CategoryAreaEnum {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
}
