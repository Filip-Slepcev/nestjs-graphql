import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export interface UserInfo {
  id: string;
  email: string;
}

export const User = createParamDecorator(
  (data: any, context: ExecutionContext) => {
    return GqlExecutionContext.create(context).getContext().user;
  },
);
