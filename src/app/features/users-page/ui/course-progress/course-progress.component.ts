
import { NgFor, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-progress',
  standalone: true,
  imports: [NgStyle, NgFor],
  template: `
    <div class="w-[230px] shrink-0 bg-white border-l p-4 h-full">
  <h2 class="text-lg font-semibold mb-4">Your Progress</h2>
  <div *ngFor="let course of courses" class="mb-4 bg-gray-100 rounded-xl p-3 shadow-sm">
    <p class="font-medium">{{ course.courseTitle }}</p>
    <div class="h-2 rounded bg-gray-300 mt-2 mb-1">
      <div
        class="h-full rounded bg-green-500"
        [ngStyle]="{
          width: (course.completedModules / course.totalModules) * 100 + '%'
        }"
      ></div>
    </div>
    <p class="text-sm text-gray-600">
      {{ course.completedModules }} / {{ course.totalModules }} modules
    </p>
  </div>
</div>

  `
})
export class CourseProgressComponent {
  @Input() courses: {
    courseTitle: string;
    totalModules: number;
    completedModules: number;
  }[] = [];
}
