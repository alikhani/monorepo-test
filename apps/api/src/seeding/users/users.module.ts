import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersSeedingService } from './users.services';
import { UserEntity } from '../../app/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersSeedingService],
  exports: [UsersSeedingService],
})
export class UsersSeederModule {}
