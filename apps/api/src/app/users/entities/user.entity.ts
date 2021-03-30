import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
  PrimaryColumn,
} from 'typeorm';

import { EtdBaseEntity } from '../../common/base.entity';
import { UserRoleEntity } from './user-role.entity';

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity({ name: 'User' })
export class UserEntity extends EtdBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @PrimaryColumn({ length: 255, nullable: false })
  email: string;

  @Column({ type: 'timestamp', nullable: true })
  readonly lastSeenAt?: Date;

  // User status
  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.INACTIVE,
    nullable: false,
  })
  value: UserStatus;

  // Role
  @ManyToOne(() => UserRoleEntity, (role) => role.users, { nullable: true })
  @JoinColumn({ referencedColumnName: 'id' })
  role: UserRoleEntity | string;

  @RelationId('role')
  roleId: string;
}
