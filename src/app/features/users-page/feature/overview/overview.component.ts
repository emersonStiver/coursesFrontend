// src/app/features/home/components/overview.component.ts

import { Component, OnInit } from '@angular/core';
import { RecentSearchComponent } from '../../ui/recent-search/recent-search.component';
import { AllCoursesComponent } from '../../ui/all-courses/all-courses.component';
import { CourseService } from '../../../../shared/data-access/course-service.service';
import { Course } from '../../data-access/data-types';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecentSearchComponent, AllCoursesComponent, NgIf],
  template: `
    <div class="flex flex-col gap-4 p-4">
      <ng-container *ngIf="courses.length > 0">
        <app-recent-search [courses]="recentCourses" />
        <app-all-courses [courses]="courses" />
      </ng-container>
    </div>
  `
})
export class OverviewComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => (this.courses = data),
      error: (err: any) => console.error('Failed to fetch courses', err),
    });
  }
  

  get recentCourses(): Course[] {
    return this.courses.slice(0, 4); // last 4 or adjust logic as needed
  }
}
