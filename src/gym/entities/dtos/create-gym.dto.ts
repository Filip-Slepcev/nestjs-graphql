import { Field, InputType, OmitType } from '@nestjs/graphql';
import { GymEntity } from '../gym.entity';

@InputType()
export class CreateGymDto extends OmitType(GymEntity, ['id'], InputType) {}
