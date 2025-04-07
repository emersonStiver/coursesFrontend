import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../ui/header/header.component';
import { SidebarComponent } from '../../ui/sidebar/sidebar.component';
import { CourseProgressComponent } from '../../ui/course-progress/course-progress.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, CourseProgressComponent, NgIf, NgClass],
  templateUrl: './users-page.component.html',
})
export class UsersPageComponent {

  leftSidebarOpen = true;
  rightSidebarOpen = true;

  toggleLeftSidebar() {
    this.leftSidebarOpen = !this.leftSidebarOpen;
  }

  toggleRightSidebar() {
    this.rightSidebarOpen = !this.rightSidebarOpen;
  }



  courses = [
    { courseTitle: 'Intro to Java', totalModules: 10, completedModules: 3 },
    { courseTitle: 'Advanced Java', totalModules: 12, completedModules: 9 },
  ];



}
