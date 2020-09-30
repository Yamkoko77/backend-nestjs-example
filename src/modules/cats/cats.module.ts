import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CatsGateway } from './cats.gateway'
import { MongooseModule } from '@nestjs/mongoose/dist';
import { CatSchema } from '../schemas/cat.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: 'cats', schema: CatSchema}])],
  providers: [CatsService, CatsGateway],
  controllers: [CatsController]
})
export class CatsModule {}
