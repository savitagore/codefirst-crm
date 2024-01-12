import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import{CommonMatModule } from '../../common-mat/common-mat.module'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonMatModule,MatToolbarModule,MatIconModule,MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter<boolean>();

  user: string = 'Enea';

  // constructor(private authService: AuthService) { }

  logout(): void {
    console.log('Logged out');
  }
}
