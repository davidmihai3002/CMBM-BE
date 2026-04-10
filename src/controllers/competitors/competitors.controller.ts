import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { type CompetitorRequestDTO } from 'src/modules';
import { CompetitorsService } from 'src/services';

@Controller('competitors')
export class CompetitorsController {
  constructor(private competitorsService: CompetitorsService) {}

  @Get()
  @HttpCode(200)
  getCompetitors() {
    return this.competitorsService.getAllCompetitors();
  }

  @Post()
  @HttpCode(200)
  registerCompetitor(@Body() competitor: CompetitorRequestDTO) {
    return this.competitorsService.registerCompetitor(competitor);
  }
}
