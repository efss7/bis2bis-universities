import { Module } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { UniversitiesController } from './universities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UniversitiesSchema } from './schemas/universities.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'University',
        schema: UniversitiesSchema,
      },
    ]),
  ],
  controllers: [UniversitiesController],
  providers: [UniversitiesService],
})
export class UniversitiesModule {}
