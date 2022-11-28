import { Module } from '@nestjs/common';
import { GymService } from './gym.service';
import { GymResolver } from './gym.resolver';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [GymService, GymResolver],
  imports: [DatabaseModule],
})
export class GymModule {}
