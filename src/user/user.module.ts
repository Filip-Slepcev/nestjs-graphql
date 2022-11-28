import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [UserService, UserResolver],
  imports: [DatabaseModule],
})
export class UserModule {}
