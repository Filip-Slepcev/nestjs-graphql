import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import { GymEntity } from '../gym.entity';
import { CreateGymDto } from './create-gym.dto';

@InputType()
export class UpdateGymDto extends PartialType(CreateGymDto) {}
