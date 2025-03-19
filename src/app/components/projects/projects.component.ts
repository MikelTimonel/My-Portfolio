import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { zoomInOnEnterAnimation, slideInDownOnEnterAnimation, slideOutDownOnLeaveAnimation, zoomOutOnLeaveAnimation } from 'angular-animations';
import { IProject } from '../../models/project.interface';
@Component({
  selector: 'app-projects',
  imports: [CommonModule, MatIconModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
    zoomInOnEnterAnimation(),
    slideInDownOnEnterAnimation(),
    slideOutDownOnLeaveAnimation(),
    zoomOutOnLeaveAnimation(),
  ]
})

export class ProjectsComponent {

  deactivateHover: boolean = false;
  statePanel = '';
  private intervalRef: any;
  projectList: IProject[] = [{
    id: '1',
    currentPicture: 'trex.png',
    title: 'Proyecto1',
    description: 'el mejor proyecto',
    pictures: ['trex.png', 'LogoMT.svg', 'header.jpeg']
  },
  {
    id: '2',
    currentPicture: 'trex.png',
    title: 'Proyecto2',
    description: 'el mejor proyecto',
    pictures: ['trex.png', 'LogoMT.svg', 'header.jpeg']
  },
  {
    id: '3',
    currentPicture: 'trex.png',
    title: 'Proyecto3',
    description: 'el mejor proyecto',
    pictures: ['trex.png', 'LogoMT.svg', 'header.jpeg']
  },
  {
    id: '4',
    currentPicture: 'trex.png',
    title: 'Proyecto4',
    description: 'el mejor proyecto',
    pictures: ['trex.png', 'LogoMT.svg', 'header.jpeg']
  },
  {
    id: '5',
    currentPicture: 'trex.png',
    title: 'Global Accounters App',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptas animi, enim aperiam molestias maiores doloribus sapiente natus cumque corporis, autem mollitia delectus commodi accusamus quae eos ab vero amet similique id! Aliquam repellat nesciunt incidunt, perferendis nisi deleniti est.',
    pictures: ['trex.png', 'LogoMT.svg', 'header.jpeg']
  },
  {
    id: '6',
    currentPicture: 'trex.png',
    title: `Meow's Whiskers: A Sostenibility Journey`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto ut totam. Numquam vitae adipisci repellat. Placeat totam consequatur error ullam nisi dolor id minima recusandae!',
    pictures: ['trex.png', 'LogoMT.svg', 'header.jpeg']
  }
  ];
  currentProject: IProject[] = [];
  selectedProject: string = '';
  sectionToShow: string = '';
  imagesToShow = ['BannerProjects.svg', 'BannerProjectsBottom.svg', 'LogoMT.svg', 'Pacman.svg'];
  imageToShow = this.imagesToShow[0];
  show = false;
  screenWidth: number = window.innerWidth;
  intervalId: any;
  pruban: boolean = true;
  currentScroll: number = 0;
  maxScroll?: number;
  fading: boolean = false;

  backToProjects(project: IProject){
    project.currentPicture = project.pictures[0];
    this.currentProject = [];
    let projectsList = document.getElementById('projectsList') as HTMLElement;
    this.statePanel = '';
    this.stopImageChange();
    setTimeout(() => {
      this.currentScroll = projectsList.scrollLeft;
      console.log(this.currentScroll);
    }, 600);
  }
  selectProject(project: IProject) {
    let projectToShow =this.projectList.find((proyecto: IProject) => proyecto.id === project.id);
    this.changeImage(project);
    if (projectToShow){
      this.currentProject.push(projectToShow);
    }
    setTimeout(() => {
      const projectsList = document.getElementById('projectsList');
      if (projectsList) {
        projectsList.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 160);
    this.statePanel = 'expanded';
  }

  scrollProjects(scrollRight: boolean) {
    let projectsList = document.getElementById('projectsList') as HTMLElement;
    this.maxScroll = projectsList.scrollWidth - projectsList.clientWidth;
    if (!projectsList) {
      console.error("No se encontró el contenedor 'projectsList'.");
      return;
    }
    if (scrollRight) {
      projectsList.scrollBy({ left: this.statePanel === 'expanded' ? this.screenWidth + 150 : 286, behavior: 'smooth' });
    } else {
      projectsList.scrollBy({ left: this.statePanel === 'expanded' ? -this.screenWidth - 150 : -286, behavior: 'smooth' });
    }
    projectsList.addEventListener('scrollend', () => {
      this.currentScroll = projectsList.scrollLeft;
    }, { once: true });
  }

  backToRoles() {
    this.sectionToShow = '';
    clearInterval(this.intervalId);
  }
  changeImage(project: IProject) {
    let currentIndex = 0;
    this.intervalRef = setInterval(() => {
      this.fading = true;
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % project.pictures.length;
        project.currentPicture = project.pictures[currentIndex];
        this.fading = false;
      }, 400);
    }, 7000);
  }
  
  stopImageChange() {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
      this.intervalRef= null;
    }
  }
  

  showSection(section: string) {
    this.sectionToShow = section;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenWidth = window.innerWidth;
  }
}
