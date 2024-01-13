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
      title: 'DashBoard',
      icon: 'dashboard',
      link: '/home',
      color: '#ff7f0e',
    },
    {
      title: 'User Manager',
      icon: 'supervised_user_circle ',
      link: '/user',
      color: '#ff7f0e',
    },
    {
      title: 'Academics',
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
    {
      title: 'Student Manager',
      icon: 'account_circle',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Add Candidte',
          icon: 'money',
          link: '/user/candidate',
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
    {
      title: 'Teacher Manager',
      icon: 'supervisor_account',
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
    {
      title: 'Library Manager',
      icon: 'library_books',
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
    {
      title: 'Exam',
      icon: 'assignment',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Language Topics',
          icon: 'money',
          link: '/exam/language',
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
    {
      title: 'Gallery Manager',
      icon: 'perm_media',
      link: '/user',
      color: '#ff7f0e',
    },
    {
      title: 'Video Lecture Manager',
      icon: 'play_circle_filled',
      link: '/user',
      color: '#ff7f0e',
    },
    {
      title: 'Doubts Class',
      icon: 'video_call',
      link: '/user',
      color: '#ff7f0e',
    },
    {
      title: 'Enquiry',
      icon: 'perm_phone_msg',
      link: '/user',
      color: '#ff7f0e',
    },
    {
      title: 'Certificate',
      icon: 'verified_user',
      link: '/user',
      color: '#ff7f0e',
    }
  ];
}
