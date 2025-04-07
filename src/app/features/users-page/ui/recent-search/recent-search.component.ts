
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Course } from '../../data-access/data-types';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-recent-search',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, NgFor],
  template: `
    <div>
      <div class="flex justify-between items-center mb-4 ">
        <h2 class="text-xl font-semibold">Recent Courses</h2>
        <div class="space-x-2">
          <button class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300" (click)="scroll('left')">
            ◀
          </button>
          <button class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300" (click)="scroll('right')">
            ▶
          </button>
        </div>
      </div>

      <div #scrollContainer class="flex gap-4 overflow-x-auto scroll-smooth pb-2">
        <app-course-card
          *ngFor="let course of courses"
          [course]="course"
          class="min-w-[280px] max-w-[280px] shrink-0"
        />
      </div>
    </div>
  `,
})
export class RecentSearchComponent {
  @Input() courses: Course[] = [];
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  scroll(direction: 'left' | 'right') {
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }
}
