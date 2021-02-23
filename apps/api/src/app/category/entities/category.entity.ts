import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { EtdBaseEntity } from '../../common/base.entity';
import { CategoryAreaEntity } from './category-area.entity';


@Entity({ name: 'Category' })
export class CategoryEntity extends EtdBaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({ length: 255, unique: true, readonly: true, nullable: false })
    handle?: string;

    @Column({ length: 255, nullable: false })
    displayName?: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @ManyToOne(
        () => CategoryAreaEntity,
        (area) => area.categories
    )
    @JoinColumn({ referencedColumnName: 'id' })
    area: CategoryAreaEntity | string;
}
