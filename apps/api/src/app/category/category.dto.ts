import { Transform } from 'class-transformer';
import {
    IsBoolean,
    IsDate,
    IsNumberString,
    IsOptional,
    IsString,
    IsUUID,
    MaxLength,
    IsNumber
} from 'class-validator';

export class CreateCategoryDto {
    @IsString()
    @MaxLength(255)
    readonly displayName: string;

    @IsOptional()
    @IsString()
    @MaxLength(255)
    readonly handle?: string;

    @IsOptional()
    @IsString()
    readonly description?: string;

    @IsOptional()
    @IsUUID()
    areaId?: string;
}

export class PatchCategoryDto {
    @IsOptional()
    @IsString()
    @MaxLength(255)
    readonly displayName?: string;

    @IsOptional()
    @IsString()
    readonly description?: string;

    @IsOptional()
    @IsUUID()
    area?: string;
}

export class CreateCategoryAreaDto {
    @IsString()
    @MaxLength(255)
    readonly displayName: string;

    @IsOptional()
    @IsString()
    @MaxLength(255)
    readonly handle?: string;

    @IsOptional()
    @IsString()
    readonly description?: string;
}

export class PatchCategoryAreaDto {
    @IsOptional()
    @IsString()
    @MaxLength(255)
    readonly displayName?: string;

    @IsOptional()
    @IsString()
    readonly description?: string;
}