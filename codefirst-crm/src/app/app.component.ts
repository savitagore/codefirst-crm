import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from "./Layout/sidenav/sidenav.component";
import { CommonMatModule } from './common-mat/common-mat.module'
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, SidenavComponent,FormsModule]
})
export class AppComponent {
  title = 'codefirst-crm';
}
