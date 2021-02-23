import {
    Entity,
    JoinColumn,
    OneToMany,
    PrimaryGeneratedColumn,
    Column,
    JoinTable,
    ManyToMany
} from 'typeorm';

import { EtdBaseEntity } from '../../common/base.entity';
import { UserRolePermissionEntity } from './user-role-permission.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'UserRole' })
export class UserRoleEntity extends EtdBaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({ length: 255, unique: true, readonly: true, nullable: false })
    handle?: string;

    @Column({ length: 255, nullable: false })
    displayName: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    // Connected users
    @OneToMany(
        () => UserEntity,
        (user) => user.role
    )
    @JoinColumn({ referencedColumnName: 'id' })
    users: UserEntity[] | string[];

    // Connected permissions
    @ManyToMany(() => UserRolePermissionEntity)
    @JoinTable()
    permissions: UserRolePermissionEntity[];
}
