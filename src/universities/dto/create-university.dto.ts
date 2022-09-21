import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateUniversityDto {
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
  'state-province'?: string;
}
