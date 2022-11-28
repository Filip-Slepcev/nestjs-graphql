import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { UserEntity } from './user.entity';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(private readonly databaseSerivce: DatabaseService) {}

  async createUser(email: string): Promise<UserEntity> {
    return await this.databaseSerivce.user.create({
      data: { email },
    });
  }

  async getUserByEmail(email: string): Promise<UserEntity> {
    return await this.databaseSerivce.user.findFirst({
      where: { email },
    });
  }

  createToken({ id, email }: UserEntity) {
    return jwt.sign({ id, email }, 'secret');
  }
}
