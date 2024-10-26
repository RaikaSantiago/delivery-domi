import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  updateBackgroundImage() {
    const screenWidth = window.innerWidth;
    let resultUrlImg: string = '';

    if (screenWidth <= 480) {
      resultUrlImg = 'assets/images/fondo2.jpg';
    } else if (screenWidth <= 768) {
      resultUrlImg = 'assets/images/fondo2.jpg';
    } else {
      resultUrlImg = 'assets/images/fondo1.jpg';
    }

    return resultUrlImg;
  }
}
