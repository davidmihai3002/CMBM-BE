import { Module } from '@nestjs/common';
import { CompetitorsController } from './controllers';
import { CompetitorsService } from './services';

@Module({
  imports: [],
  controllers: [CompetitorsController],
  providers: [CompetitorsService],
})
export class AppModule {}
