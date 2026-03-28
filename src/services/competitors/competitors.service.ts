import { Injectable } from '@nestjs/common';
import { MOCK_COMPETITORS } from 'src/common';

@Injectable()
export class CompetitorsService {
  getAllCompetitors() {
    return MOCK_COMPETITORS;
  }
}
