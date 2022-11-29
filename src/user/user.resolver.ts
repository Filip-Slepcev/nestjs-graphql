import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { AuthGuard } from './auth.gaurd';
import { User, UserInfo } from './user.decorator';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserEntity)
  @UseGuards(new AuthGuard())
  me(@User() user: UserInfo) {
    return user;
  }
  @Mutation(() => String)
  async login(@Args('email') email: string): Promise<string> {
    let user = await this.userService.getUserByEmail(email);

    if (!user) {
      user = await this.userService.createUser(email);
    }

    return this.userService.createToken(user);
  }
}
