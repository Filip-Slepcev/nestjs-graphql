import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserEntity {
  @Field(() => String)
  id: string;

  @Field(() => String)
  email: string;
}
