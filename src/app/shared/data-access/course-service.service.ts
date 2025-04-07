import { Injectable } from '@angular/core';
import { Course, MyCourse } from '../../features/users-page/data-access/data-types';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MOCK_COURSES, MOCK_MY_COURSES } from './mock-courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  

  getCourses(): Observable<Course[]>{
    return of(MOCK_COURSES);
  }

  getMyCourses(): Observable<MyCourse[]> {
    return of(MOCK_MY_COURSES);
  }


  // private readonly baseUrl = 'http://localhost:8081/api/v1/courses';

  // constructor(private http: HttpClient) {}

  // getCourses(): Observable<Course[]> {
  //   return this.http.get<Course[]>(`${this.baseUrl}/get-courses`);
  // }
}