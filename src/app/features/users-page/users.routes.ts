import { Routes } from "@angular/router";
import { UsersPageComponent } from "./feature/users-page/users-page.component";
import { OverviewComponent } from "./feature/overview/overview.component";
import { MyCoursesComponent } from "./feature/my-courses/my-courses.component";
import { SettingsComponent } from "./feature/settings/settings.component";
import { WishlistComponent } from "./feature/wishlist/wishlist.component";

export const USERS_ROUTES: Routes = [
    {
        path:'',
        component: UsersPageComponent,
        children: [
            {
                path:'',
                component: OverviewComponent
            },
            {
                path:'wishlist',
                component: WishlistComponent
            },
            {
                path: 'my-courses',
                component: MyCoursesComponent
            },
            {
                path:"settings",
                component: SettingsComponent

            },
            {
                path:'**',
                redirectTo: ''
            }
        ]
    }
]