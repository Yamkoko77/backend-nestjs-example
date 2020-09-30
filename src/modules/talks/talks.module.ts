import { Module } from '@nestjs/common';
import { TalksService } from './talks.service';

@Module({
  providers: [TalksService]
})
export class TalksModule {}
