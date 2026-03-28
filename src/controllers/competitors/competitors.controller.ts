import { Controller, Get } from '@nestjs/common';
import { CompetitorsService } from 'src/services';

@Controller('competitors')
export class CompetitorsController {
  constructor(private competitorsService: CompetitorsService) {}

  @Get()
  getCompetitors() {
    return this.competitorsService.getAllCompetitors();
  }
}
