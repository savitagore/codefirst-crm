import { Routes } from '@angular/router';
import { LoyoutComponent } from './Layout/loyout/loyout.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: '',
        component: LoyoutComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path:'user',
            loadChildren : () => import('././Pages/Users/users/users.module').then(m => m.UsersModule)
          },
          {
            path:'exam',
            loadChildren:()=> import('./Pages/exams/exams.module').then(m=>m.ExamsModule)
          }
         
        ]
      }
];
