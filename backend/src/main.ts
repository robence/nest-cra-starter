import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { json } from 'body-parser';

import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap(): Promise<void> {
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);

  app.use(json({ limit: '50mb' }));

  app.setGlobalPrefix('api');

  app.enableCors();

  const configService: ConfigService = app.get(ConfigService);

  const port = configService.get('PORT');
  // await app.listen(port);
  await app.listen(5000);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
