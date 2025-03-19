import { Component } from '@angular/core';

@Component({
  selector: 'app-pruebaimg',
  templateUrl: './pruebaimg.component.html',
  styleUrl: './pruebaimg.component.scss',
})
export class PruebaimgComponent {
  fadeOut: boolean = false;
  imagesToShow = ['BannerProjects.svg', 'BannerProjectsBottom.svg', 'LogoMT.svg', 'Pacman.svg'];
  imageToShow = this.imagesToShow[0];
  intervalId: any;


  ngOnInit(): void{
    this.changeImage();
  }
  changeImage() {
    let index = 1;
    this.intervalId = setInterval(() => {
      this.fadeOut = true;

      setTimeout(() => {
        this.imageToShow = this.imagesToShow[index];
        this.fadeOut = false;

        if (this.imageToShow !== this.imagesToShow[this.imagesToShow.length - 1]) {
          index++;
        } else {
          index = 0;
        }
      }, 500);

    }, 4000);
  }
}
