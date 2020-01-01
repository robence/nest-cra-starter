import { prop } from '@typegoose/typegoose';
import { IsString, IsNumber } from 'class-validator';

export class Cat {
  @prop({ required: true })
  @IsString()
  name: string;

  @prop({ required: true })
  @IsNumber()
  age: number;

  @prop({ required: true })
  @IsString()
  breed: string;
}
