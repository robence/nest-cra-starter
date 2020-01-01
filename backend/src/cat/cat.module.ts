import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { Cat } from './cat.model';

@Module({
  imports: [TypegooseModule.forFeature([Cat])],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
