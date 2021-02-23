import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
    getUserByEmail(email: string, manager = getManager()) {
        return manager.findOneOrFail(UserEntity, { email });
    }
}
