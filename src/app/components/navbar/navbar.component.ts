import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  screenWidth: number = window.innerWidth;
  screenHeight: number = window.innerHeight;
  activeSection = 'home';


  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  ngOnInit(){
    console.log('si entre')
    setTimeout(() => {
      window.scrollTo(0,0);
    }, 100);
  }
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'end' });
      this.activeSection = sectionId;
    } else {
      console.warn(`No se encontró el elemento con id: ${sectionId}`);
    }
  }
}
