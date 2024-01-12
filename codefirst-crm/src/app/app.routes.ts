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
         
        ]
      }
];
