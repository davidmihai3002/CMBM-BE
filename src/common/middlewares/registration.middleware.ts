import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request } from 'express';

@Injectable()
export class RegistrationMiddleWare implements NestMiddleware {
  constructor() {}
  async use(req: Request, next: NextFunction) {
    // const phoneNumber = req.body.phone;
    // const emailAddress = req.body.email;
    // const competitorName = req.body.name;
    // const age = req.body.age;
    // const education = req.body.education;
    // const competedIn = req.body.competedIn;
    // const profileImgUrl = req.body.profileImgUrl;

    // req.body.phone = phoneNumber.trim();
    // req.body.email = emailAddress.trim();
    // req.body.name = competitorName.trim();
    // req.body.age = age.trim();
    // req.body.education = education.trim();
    // req.body.competedIn = competedIn
    //   ? competedIn.map((comp) => comp.trim())
    //   : null;
    // req.body.profileImgUrl = profileImgUrl.trim();
    next();
  }
}
