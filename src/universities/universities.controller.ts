import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Res,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Universities')
@Controller('universities')
export class UniversitiesController {
  constructor(private readonly universityService: UniversitiesService) {}

  @Post()
  async create(
    @Body() createUniversityDto: CreateUniversityDto,
    @Res() res: Response,
  ) {
    await this.universityService.create(createUniversityDto);
    res.status(HttpStatus.CREATED).send('Universidade criada com sucesso');
  }

  @Get()
  findAll() {
    return this.universityService.findAll();
  }

  @Get('s')
  find(@Query('country') country: string, @Query('page') page: string) {
    return this.universityService.findByCountryAndPage(country, +page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.universityService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUniversityDto: UpdateUniversityDto,
    @Res() res: Response,
  ) {
    await this.universityService.update(id, updateUniversityDto);
    res.status(HttpStatus.CREATED).send('Universidade atualizada com sucesso');
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    await this.universityService.remove(id);
    res.status(HttpStatus.CREATED).send('Universidade excluída com sucesso');
  }
}
