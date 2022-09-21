import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { CreateUniversityDto } from './create-university.dto';

export class UpdateUniversityDto extends PartialType(CreateUniversityDto) {
  _id: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  domains: string[];

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  web_pages: string[];

  @IsString()
  @IsNotEmpty()
  alpha_two_code: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  'state-province'?: string;
}
