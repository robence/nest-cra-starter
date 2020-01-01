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
    const cat: Cat = await new this.catModel(catDto).save();

    return cat;
  }

  fetchAll(): Promise<Cat[]> {
    return this.catModel.find();
  }

  async editArticle(id: string, catDto: CatDto): Promise<Document & Cat> {
    const cat = await this.catModel.findById(id);

    const { age, breed, name } = catDto;

    cat.age = age;
    cat.breed = breed;
    cat.name = name;

    await cat.save();

    return cat;
  }

  deleteArticle(id: string): Promise<Document & Cat> {
    return this.catModel.findByIdAndRemove(id);
  }
}
