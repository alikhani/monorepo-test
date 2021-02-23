import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService) {}

    @Get('me')
    async findMetrics(@Res() res: Response) {
        res.json({ message: 'hello' });
    }
}