import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CompetitorsController } from './controllers';
import { CompetitorsService } from './services';
import { Utils } from './common';
import { RegistrationMiddleWare } from './common/middlewares/registration.middleware';

@Module({
  imports: [],
  controllers: [CompetitorsController],
  providers: [CompetitorsService, Utils],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RegistrationMiddleWare)
      .forRoutes({ path: 'competitors', method: RequestMethod.POST });
  }
}
