import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateGymDto } from './entities/dtos/create-gym.dto';
import { UpdateGymDto } from './entities/dtos/update-gym.dto';
import { GymEntity } from './entities/gym.entity';
import { GymService } from './gym.service';

@Resolver(() => GymEntity)
export class GymResolver {
  constructor(private readonly gymService: GymService) {}

  @Query(() => [GymEntity])
  async getAllGyms(): Promise<GymEntity[]> {
    return await this.gymService.getAllGyms();
  }

  @Mutation(() => GymEntity)
  async createGym(@Args('gym') gym: CreateGymDto): Promise<GymEntity> {
    return await this.gymService.createGym(gym);
  }

  @Mutation(() => GymEntity)
  async updateGym(
    @Args('id') id: number,
    @Args('gym') gym: UpdateGymDto,
  ): Promise<GymEntity> {
    return await this.gymService.updateGym(id, gym);
  }

  @Mutation(() => GymEntity)
  async deleteGym(@Args('id') id: number): Promise<GymEntity> {
    return await this.gymService.deleteGym(id);
  }
}
