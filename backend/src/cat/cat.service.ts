import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

import { CatDto } from './cat.dto';
import { Cat } from './cat.model';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(Cat)
    private readonly catModel: ReturnModelType<typeof Cat>,
  ) {}

  async createCat(catDto: CatDto): Promise<Cat> {
    return await new this.catModel(catDto).save();
  }

  fetchAll() {
    return this.catModel.find();
  }

  showCat(id: string) {
    return this.catModel.findById(id);
  }

  async editCat(id: string, catDto: CatDto) {
    const cat = await this.catModel.findById(id);

    const { age, breed, name } = catDto;

    cat.age = age;
    cat.breed = breed;
    cat.name = name;

    await cat.save();

    return cat;
  }

  deleteCat(id: string) {
    return this.catModel.findByIdAndRemove(id);
  }
}
