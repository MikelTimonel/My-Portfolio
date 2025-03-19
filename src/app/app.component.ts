import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { OnInit } from '@angular/core';
import { BannerComponent } from "./components/banner/banner.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import {MatIconModule} from '@angular/material/icon';
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactMeComponent } from "./components/contact-me/contact-me.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent {
  title = 'portfolio';

  showLanguageList = false;
  languagesList = ['Spanish', 'English'];
  constructor(){

  }
  ngOnInit(){

  }
  toggleShowList(){
    this.showLanguageList = !this.showLanguageList;
  }

  changeLanguage(language: string){
    
  }
}
