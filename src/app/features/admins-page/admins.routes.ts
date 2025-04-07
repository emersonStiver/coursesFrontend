import { Routes } from '@angular/router';
import { AdminsPageComponent } from './admins-page/admins-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';

export const ADMINS_ROUTES: Routes = [
  {
    path: '',
    component: AdminsPageComponent,
    children: [
      {
        path: '',
        component: AdminDashboardComponent
      },
      {
        path: 'manage-users',
        component: ManageUsersComponent
      },
      {
        path: 'manage-courses',
        component: ManageCoursesComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: '',
        redirectTo: ''
      }
    ]
  }
];