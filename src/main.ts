import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create(AppModule, appOptions);

  // add swagger.
  const config = new DocumentBuilder()
    .setTitle('nestjs-demo-example')
    .setDescription('API of nestjs-demo-example')
    .setVersion('1.0')
    // .addTag('nestjs-demo-example')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
