import { UserStatusEnum } from '@monorepo-test/api-interfaces';
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

@Entity({ name: 'User' })
export class UserEntity extends EtdBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @PrimaryColumn({ length: 255, nullable: false })
  email: string;

  @Column({ type: 'timestamp', nullable: true })
  readonly lastSeenAt?: Date;

  // @Column({ length: 255, nullable: false })
  // name: string;

  // User status
  @Column({
    type: 'enum',
    enum: UserStatusEnum,
    default: UserStatusEnum.INACTIVE,
    nullable: false,
  })
  value: UserStatusEnum;

  // Role
  @ManyToOne(() => UserRoleEntity, (role) => role.users, { nullable: true })
  @JoinColumn({ referencedColumnName: 'id' })
  role: UserRoleEntity | string;

  @RelationId('role')
  roleId: string;
}
