import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';  
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { PruebaimgComponent } from './components/pruebaimg/pruebaimg.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    NavbarComponent, 
    BannerComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactMeComponent,
    PruebaimgComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
