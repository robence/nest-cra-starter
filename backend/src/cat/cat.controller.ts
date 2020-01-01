import { Controller, Logger, Post, Body, Get } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatDto } from './cat.dto';
import { Cat } from './cat.model';

@Controller('cat')
export class CatController {
  private logger = new Logger('CatController');
  constructor(private catService: CatService) {}

  @Post()
  createCat(@Body() catDto: CatDto): Promise<Cat> {
    this.logger.debug(`Creating new Cat with DTO: ${JSON.stringify(catDto)}`);
    return this.catService.createCat(catDto);
  }

  @Get('/all')
  fetchAll(): Promise<Cat[]> {
    return this.catService.fetchAll();
  }
}
