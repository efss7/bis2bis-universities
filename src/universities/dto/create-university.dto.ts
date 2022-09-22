import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateUniversityDto {
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

  @ApiProperty({ description: 'Sigla do país da Universidade' })
  @IsString()
  @IsNotEmpty()
  alpha_two_code: string;

  @ApiProperty({ description: 'Nome completo da Universidade' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'País em que a Universidade se encontra' })
  @IsString()
  @IsNotEmpty()
  country: string;

  @ApiProperty({ description: 'Estado do Pais que a Universidade se encontra' })
  @IsString()
  'state-province'?: string;
}
