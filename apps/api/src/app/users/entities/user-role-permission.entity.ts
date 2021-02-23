import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

import { EtdBaseEntity } from '../../common/base.entity';

export enum UserPermissionValue {
    NONE = 'none',
    READ = 'read',
    WRITE = 'write'
}

@Entity({ name: 'UserRolePermission' })
export class UserRolePermissionEntity extends EtdBaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({ length: 255, unique: true, readonly: true, nullable: false })
    handle?: string;

    @Column({ length: 255, nullable: false })
    displayName: string;

    @Column({ type: 'text', nullable: true })
    description?: string;
}
