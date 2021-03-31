import {
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

export class EtdBaseEntity {
  @CreateDateColumn({ type: 'timestamp' })
  readonly createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  readonly updatedAt?: Date;

  @VersionColumn({
    select: false,
    default: 1,
  })
  readonly _version?: number;
}
