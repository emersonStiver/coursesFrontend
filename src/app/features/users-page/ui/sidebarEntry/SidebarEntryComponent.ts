import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { EntryParams } from '../../data-access/data-types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar-entry',
  standalone: true,
  imports: [RouterLink, MatIconModule, NgClass],
  template: `
   <li>
  <a
    [routerLink]="entryParams.route"
    class="flex items-center p-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:border hover:border-black"
  >
    <mat-icon class="mr-4 flex-shrink-0">{{ entryParams.icon }}</mat-icon>
    <span
      class="transition-opacity duration-500 whitespace-nowrap font-semibold"
      [ngClass]="{
        'opacity-0 w-0': !isOpen,
        'opacity-100 w-auto': isOpen
      }"
    >
      {{ entryParams.name }}
    </span>
  </a>
</li>

  `,
})
export class SidebarEntryComponent {
  @Input() entryParams!: EntryParams;
  @Input() isOpen!: boolean;
}
