import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common'
import { CatModel } from '../models/cats.model';
import { CatsInterface, CatTalkInterface } from './cats.interface'
import { CatsService } from './cats.service'

@Controller('cats')
export class CatsController {

  constructor(private catsService: CatsService) { }

  @Get()
  async findAllCats(): Promise<CatsInterface[]> {
    return this.catsService.findAllCats();
  }

  @Get(':id')
  async getCat(@Param('id') id: string): Promise<CatsInterface> {
    return this.catsService.getCatById(id);
  }
  @Get('talks')
  async getCatTalkMessages(): Promise<CatTalkInterface[]> {
    return []
  }

  @Post()
  async createCat(@Body() body: CatModel): Promise<CatsInterface> {
    return this.catsService.createCat(body);
  }

  @Delete(':id')
  async removeCat(@Param('id') id: string): Promise<string> {

    const removeId = await this.catsService.removeCat(id);
    return `remove cat ${removeId} complete`;
  }

}
