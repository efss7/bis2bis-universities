import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { CreateUniversityDto } from './create-university.dto';

export class UpdateUniversityDto extends PartialType(CreateUniversityDto) {
  @ApiProperty({ description: 'Domínio da Universidade' })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  domains: string[];

  @ApiProperty({ description: 'Página web da Universidade' })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  web_pages: string[];

  @ApiProperty({ description: 'Nome completo da Universidade' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
