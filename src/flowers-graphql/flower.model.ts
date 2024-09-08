import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FlowerModel {
  @Field(() => String)
  id: string;

  @Field()
  name: string;

  @Field()
  color: string;
  @Field()
  quantity: number;
  @Field(() => Float)
  price: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
