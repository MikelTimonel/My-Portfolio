import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {

  private intervalId: any;
  private rolesAndName = ['Miguel Angel Timote', 'Desarrollador Frontend', 'Diseñador UX/UI', 'Desarrollador de Videojuegos'];
  rotatingText: string = this.rolesAndName[0];
  timeToChange = 3200;
  timeToChangeSubsequent = 5000;
  timeToChangeInitial = 4300;
  ngOnInit(): void{
    this.startInitialInterval();
  }
  startInitialInterval() {
    let index = 1;
    
    this.intervalId = setTimeout(() => {
      this.rotatingText = this.rolesAndName[index];
      index = (index + 1) % this.rolesAndName.length;
  
      this.startSubsequentInterval(index);
      
    }, this.timeToChangeInitial);
  }
  
  startSubsequentInterval(index: number) {
    this.intervalId = setInterval(() => {
      this.rotatingText = this.rolesAndName[index];
      
      index = (index + 1) % this.rolesAndName.length;
    }, this.timeToChangeSubsequent);
  }
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
