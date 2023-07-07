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
import { DeleteFilesService } from './services/delete-files/delete-files.service';

@Controller()
export class AppController {
  constructor(private readonly deleteFileService: DeleteFilesService) {}

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
    await this.deleteFileService.deleteFile(fileName);
  }

  @Post('/productFile')
  @UseInterceptors(
    FileInterceptor('productFile', {
      storage: diskStorage({
        destination: 'C:\\Users\\norma\\img-providers\\productsImg',
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
  uploadProductImg(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    console.log('File', file.path);

    return file;
  }

  @Delete('/productFile/:fileName')
  async deleteProductPicture(@Param('fileName') fileName: string) {
    await this.deleteFileService.deleteProductImg(fileName);

    return { message: 'Archivo Eliminado' };
  }
}
