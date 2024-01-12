import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from "./Layout/sidenav/sidenav.component";
import { CommonMatModule } from './common-mat/common-mat.module'

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, SidenavComponent]
})
export class AppComponent {
  title = 'codefirst-crm';
}
