import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UniversitiesModule } from './universities/universities.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), UniversitiesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
