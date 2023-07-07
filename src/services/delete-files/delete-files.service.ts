import { Injectable } from '@nestjs/common';

import * as fs from 'fs';

@Injectable()
export class DeleteFilesService {
  deleteFile(logo: string) {
    fs.unlink(`C:\\Users\\norma\\img-providers/${logo}`, (res) => {
      console.log('Imagen del Proveedor eliminada!');
    });
  }

  deleteProductImg(img: string) {
    fs.unlink(`C:\\Users\\norma\\img-providers\\productsImg/${img}`, (res) => {
      console.log('Imagen del Producto eliminada!');
    });
  }
}
