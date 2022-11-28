import { Test, TestingModule } from '@nestjs/testing';
import { GymResolver } from './gym.resolver';

describe('GymResolver', () => {
  let resolver: GymResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GymResolver],
    }).compile();

    resolver = module.get<GymResolver>(GymResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
