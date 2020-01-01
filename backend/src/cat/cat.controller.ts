import {
  Controller,
  Logger,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CatDto } from './cat.dto';

@Controller('cat')
export class CatController {
  private logger = new Logger('CatController');
  constructor(private catService: CatService) {}

  @Post()
  createCat(@Body() catDto: CatDto) {
    this.logger.debug(`Creating new Cat with DTO: ${JSON.stringify(catDto)}`);
    return this.catService.createCat(catDto);
  }

  @Get('/all')
  fetchAll() {
    this.logger.debug(`Listing all cats`);
    return this.catService.fetchAll();
  }

  @Get('/:id')
  showCat(@Param('id') id: string) {
    this.logger.debug(`Editing cat with id: ${id}`);
    return this.catService.showCat(id);
  }

  @Put('/:id')
  async editCat(@Param('id') id: string, @Body() catDto: CatDto) {
    this.logger.debug(
      `Editing cat with id: ${id}, DTO: ${JSON.stringify(catDto)}`,
    );
    return this.catService.editCat(id, catDto);
  }

  @Delete('/:id')
  deleteActivity(@Param('id') id: string) {
    this.logger.debug(`Deleting cat with id: ${id}`);
    return this.catService.deleteCat(id);
  }
}
