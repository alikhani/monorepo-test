export interface IUserRolePremission {
  id?: string;
  handle?: string;
  displayName: UserPermissionEnum;
  description?: string;
}

export enum UserPermissionEnum {
  NONE = 'none',
  READ = 'read',
  WRITE = 'write',
}
