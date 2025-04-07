import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SidebarEntryComponent } from '../sidebarEntry/SidebarEntryComponent';
import { EntryParams } from '../../data-access/data-types';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, NgFor, NgIf, MatIconModule, SidebarEntryComponent],
  template: `
    <div class="h-full bg-white">
      <nav>
        <ul>
          @for (item of sidebarOptions; track $index) {
            <app-sidebar-entry
              [entryParams]="item"
              [isOpen]="isSidebarOpen"
            ></app-sidebar-entry>
          }
        </ul>
      </nav>
    </div>
  `,
})
export class SidebarComponent {
  @Input() isSidebarOpen: boolean = true;

  sidebarOptions: EntryParams[] = [
    { name: 'Home', route: 'home', icon: 'home' },
    { name: 'My Courses', route: 'my-courses', icon: 'folder_open' },
    { name: 'Wishlist', route: 'wishlist', icon: 'favorite' },
    { name: 'Settings', route: 'settings', icon: 'settings' },
    { name: 'Logout', route: 'logout', icon: 'logout' },
  ];
}
