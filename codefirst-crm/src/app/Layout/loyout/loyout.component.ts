import { Component } from '@angular/core';
import { Menu } from '../../Core/Model/menu.model';
import{MenuItemComponent } from '../menu-item/menu-item.component';
import { HeaderComponent} from '../header/header.component'
import { RouterModule, Routes } from '@angular/router';
import {  MatSidenavModule } from '@angular/material/sidenav';



@Component({
  selector: 'app-loyout',
  standalone: true,
  imports: [MenuItemComponent,HeaderComponent,RouterModule,MatSidenavModule],
  templateUrl: './loyout.component.html',
  styleUrl: './loyout.component.scss'
})
export class LoyoutComponent {
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home',
      color: '#ff7f0e',
    },
    {
      title: 'Statistics',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Sales',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        },
        {
          title: 'Customers',
          icon: 'people',
          color: '#ff7f0e',
          link: '/customers',
        },
      ],
    },
  ];
}
