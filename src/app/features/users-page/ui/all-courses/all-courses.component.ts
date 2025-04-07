
import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Course } from '../../data-access/data-types';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, NgFor],
  template: `
    <div class="w-full px-2 sm:px-4">
      <h3>All Courses</h3>
      <div
      class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"

      >
        <app-course-card
          *ngFor="let course of courses"
          [course]="course"
          class="w-full h-full"
        />
      </div>
    </div>
  `,
})
export class AllCoursesComponent {
  @Input() courses: Course[] = [];
}
