import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import{PageHeaderComponent} from '../../Layout/page-header/page-header.component'


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule,PageHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
