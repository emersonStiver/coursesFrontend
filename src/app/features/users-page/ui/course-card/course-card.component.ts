import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { Course } from '../../data-access/data-types';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col w-72 m-4">
      <img [src]="coverImg" alt="{{ course.courseName }}" class="w-full h-40 object-cover" />
      <div class="p-4">
        <h2 class="text-lg font-bold">{{ course.courseName }}</h2>
        <p class="text-sm text-gray-600">{{ course.instructorName }}</p>
        <p class="text-xs text-gray-500">{{ course.courseCategory }} | {{ course.courseLevel }}</p>
        <p class="text-sm mt-2">{{ course.courseDescription }}</p>
        <p class="text-xs text-gray-500 mt-2">
          Duration: {{ course.duration }}h
          <span *ngIf="course.hasFinalExam">| Final Exam</span>
        </p>
      </div>
    </div>
  `,
})
export class CourseCardComponent implements OnInit {
  @Input() course!: Course;
  coverImg: string = '';

  ngOnInit() {
    const images = ['/img1.png', '/img2.jpg', '/img3.jpg', '/img4.avif', '/img5.webp'];
    this.coverImg = images[Math.floor(Math.random() * images.length)];
  }
}

