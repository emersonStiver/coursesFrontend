import { Routes } from "@angular/router";
import { TeacherDashboardComponent } from "./teacher-dashboard/teacher-dashboard.component";
import { TeacherSettingsComponent } from "./teacher-settings/teacher-settings.component";
import { ManageCoursesComponent } from "./manage-courses/manage-courses.component";
import { TeachersPageComponent } from "./teachers-page/teachers-page.component";
import { GradebookComponent } from "./gradebook/gradebook.component";


export const TEACHERS_ROUTES: Routes = [
  {
    path: '',
    component: TeachersPageComponent,
    children: [
      {
        path: '',
        component: TeacherDashboardComponent
      },
      {
        path: 'manage-courses',
        component: ManageCoursesComponent
      },
      {
        path: 'gradebook',
        component: GradebookComponent
      },
      {
        path: 'settings',
        component: TeacherSettingsComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];
