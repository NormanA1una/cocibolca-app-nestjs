import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'C:\\Users\\norma\\img-providers',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);

          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;

          callback(null, filename);
        },
      }),
    }),
  )
  uploadImg(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    console.log('File', file.path);

    return file;
  }

  @Delete('/file/:fileName')
  async deletePicture(@Param('fileName') fileName: string) {
    await fs.unlink(`C:\\Users\\norma\\img-providers/${fileName}`, (res) => {
      console.log(res);
    });

    return { message: 'Archivo Eliminado' };
  }
}
