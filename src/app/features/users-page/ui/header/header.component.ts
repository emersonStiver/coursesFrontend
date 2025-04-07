import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
   <div class="w-full ">
  <div class="flex items-center w-full rounded-full border border-gray-400 bg-white shadow-sm overflow-hidden px-2">
    <button
      (click)="goBack()"
      class="text-gray-700 hover:bg-gray-100 px-2 py-2 flex-shrink-0"
    >
      ←
    </button>
    <input
      [(ngModel)]="searchTerm"
      type="text"
      placeholder="Search anything"
      class="flex-grow px-2 py-2 text-sm outline-none bg-transparent"
    />
    <button
      (click)="search()"
      class="text-gray-700 hover:bg-gray-100 px-2 py-2 flex-shrink-0"
    >
      🔍
    </button>
  </div>
</div>

  `,
})
export class HeaderComponent {
  searchTerm = '';
  goBack() {
    // handle back action here
    console.log('Back clicked');
  }

  search() {
    console.log('Searching:', this.searchTerm);
  }
}
