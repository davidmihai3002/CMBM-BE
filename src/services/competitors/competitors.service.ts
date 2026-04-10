import { BadRequestException, Injectable } from '@nestjs/common';
import { MOCK_COMPETITORS, Utils } from 'src/common';
import { CompetitorRequestDTO } from 'src/modules';

@Injectable()
export class CompetitorsService {
  constructor(private utils: Utils) {}

  getAllCompetitors() {
    return MOCK_COMPETITORS;
  }

  registerCompetitor(competitor: CompetitorRequestDTO) {
    if (!competitor) {
      throw new BadRequestException(
        "We're having trouble registering you right now. Please contact support for assistance",
      );
    }

    if (!this.canRegisterEmail(competitor.email)) {
      throw new BadRequestException('Email is already registered');
    }

    if (!this.canRegisterPhoneNumber(competitor.phone)) {
      throw new BadRequestException('Phone number is already registered');
    }

    return this.addNewCompetitor(competitor);
  }

  addNewCompetitor(competitor: CompetitorRequestDTO) {
    const id = this.utils.getUUID();
    const createdAt = this.utils.getCurrentDate();
    const newCompetitor = {
      id,
      ...competitor,
      createdAt,
    };
    return newCompetitor;
  }

  canRegisterEmail(email: string) {
    const allEmails = MOCK_COMPETITORS.map((competitor) => competitor.email);
    return !allEmails.includes(email);
  }

  canRegisterPhoneNumber(phone: string) {
    const allPhoneNumbers = MOCK_COMPETITORS.map(
      (competitor) => competitor.phone,
    );
    return !allPhoneNumbers.includes(phone);
  }
}
