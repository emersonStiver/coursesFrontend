import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Course, MyCourse } from '../../data-access/data-types';
import { CourseService } from '../../../../shared/data-access/course-service.service';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [NgFor],
  templateUrl: './my-courses.component.html',
})
export class MyCoursesComponent implements OnInit {
  courses: MyCourse[] = [];

  private readonly randomImages = [
    '/img1.png',
    '/img2.jpg',
    '/img3.jpg',
    '/img4.avif',
    '/img5.webp',
  ];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getMyCourses().subscribe({
      next: (data: MyCourse[]) => {
        this.courses = data.map(course => ({
          ...course,
          coverImageUrl: this.getRandomCoverImage(),
        }));
      },
      error: (err: any) => console.error('Failed to fetch courses', err),
    });
  }

  private getRandomCoverImage(): string {
    const index = Math.floor(Math.random() * this.randomImages.length);
    return this.randomImages[index];
  }
}
