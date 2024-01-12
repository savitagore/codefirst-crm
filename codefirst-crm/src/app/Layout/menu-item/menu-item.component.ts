import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {  MenuItem } from '../../Core/Model/menu.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule,MatExpansionModule,MatListModule,MatIconModule,RouterModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {
  @Input() menu: MenuItem[]=[];
}
