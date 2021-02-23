import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { EtdBaseEntity } from '../../common/base.entity';
import { CategoryEntity } from './category.entity';


@Entity({ name: 'CategoryArea' })
export class CategoryAreaEntity extends EtdBaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({ length: 255, unique: true, readonly: true, nullable: false })
    handle?: string;

    @Column({ length: 255, nullable: false })
    displayName?: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @OneToMany(
        () => CategoryEntity,
        (categories) => categories.area
    )
    @JoinColumn({ referencedColumnName: 'id' })
    categories: CategoryEntity[] | string[];
}
