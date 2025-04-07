// src/app/shared/mock/mock-courses.ts

import { Course } from '../../features/users-page/data-access/data-types';

export const MOCK_MY_COURSES = [
  {
    id: 1,
    courseCode: 'CS101',
    courseName: 'Intro to Java',
    courseDescription: 'Learn Java basics.',
    coverImageUrl: 'https://example.com/java.jpg',
    courseCategory: 'PROGRAMMING',
    courseLevel: 'BEGINNER',
    durationHours: 21,
    createdAt: '2025-04-06T19:44:40.000Z',
    updatedAt: '2025-04-06T19:44:40.000Z',
    teacherId: 1,
    hasFinalExam: true,
    providesCertificate: true
  },
  {
    id: 2,
    courseCode: 'CS102',
    courseName: 'Advanced Java',
    courseDescription: 'Deep dive into Java.',
    coverImageUrl: 'https://example.com/advjava.jpg',
    courseCategory: 'PROGRAMMING',
    courseLevel: 'INTERMEDIATE',
    durationHours: 30,
    createdAt: '2025-04-06T19:44:40.000Z',
    updatedAt: '2025-04-06T19:44:40.000Z',
    teacherId: 1,
    hasFinalExam: true,
    providesCertificate: true
  }
];


export const MOCK_COURSES: Course[] = [
  {
    courseCode: "CS101",
    courseName: "Intro to Java",
    courseDescription: "Learn Java basics.",
    courseCategory: "PROGRAMMING",
    courseLevel: "BEGINNER",
    createdAt: "2025-04-06T19:44:40",
    duration: 21,
    coverImg: "https://example.com/java.jpg",
    hasFinalExam: true,
    instructorName: "Alice",
    modules: [
      { moduleName: "Java Basics", moduleDescription: "Variables and flow.", orderIndex: 1, durationMinutes: 2 },
      { moduleName: "OOP Concepts", moduleDescription: "Classes and objects.", orderIndex: 2, durationMinutes: 3 }
    ]
  },
  {
    courseCode: "CS102",
    courseName: "Advanced Java",
    courseDescription: "Deep dive into Java.",
    courseCategory: "PROGRAMMING",
    courseLevel: "INTERMEDIATE",
    createdAt: "2025-04-06T19:44:40",
    duration: 30,
    coverImg: "https://example.com/advjava.jpg",
    hasFinalExam: true,
    instructorName: "Alice",
    modules: [
      { moduleName: "Generics", moduleDescription: "Advanced typing.", orderIndex: 1, durationMinutes: 4 },
      { moduleName: "Streams", moduleDescription: "Stream API.", orderIndex: 2, durationMinutes: 5 }
    ]
  },
  {
    courseCode: "DS101",
    courseName: "Intro to Data Analysis",
    courseDescription: "Work with data in Python.",
    courseCategory: "SOCIAL_SCIENCE",
    courseLevel: "BEGINNER",
    createdAt: "2025-04-06T19:44:40",
    duration: 25,
    coverImg: "https://example.com/data.jpg",
    hasFinalExam: true,
    instructorName: "Clara",
    modules: [
      { moduleName: "DataFrames", moduleDescription: "Using Pandas.", orderIndex: 1, durationMinutes: 3 },
      { moduleName: "Visualization", moduleDescription: "Basic charts.", orderIndex: 2, durationMinutes: 2 }
    ]
  },
  {
    courseCode: "PH101",
    courseName: "Modern Physics",
    courseDescription: "Explore quantum mechanics.",
    courseCategory: "PHYSICS",
    courseLevel: "ADVANCED",
    createdAt: "2025-04-06T19:44:40",
    duration: 40,
    coverImg: "https://example.com/physics.jpg",
    hasFinalExam: true,
    instructorName: "Clara",
    modules: [
      { moduleName: "Quantum Physics", moduleDescription: "Basics of QM.", orderIndex: 1, durationMinutes: 5 }
    ]
  },
  {
    courseCode: "AC101",
    courseName: "Accounting Principles",
    courseDescription: "Learn fundamentals of accounting.",
    courseCategory: "ECONOMICS",
    courseLevel: "BEGINNER",
    createdAt: "2025-04-06T19:44:40",
    duration: 15,
    coverImg: "https://example.com/accounting.jpg",
    hasFinalExam: false,
    instructorName: "Eva",
    modules: [
      { moduleName: "Accounting Basics", moduleDescription: "Balance sheets.", orderIndex: 1, durationMinutes: 2 }
    ]
  },
  {
    courseCode: "AC201",
    courseName: "Corporate Finance",
    courseDescription: "Intermediate corporate accounting.",
    courseCategory: "ECONOMICS",
    courseLevel: "INTERMEDIATE",
    createdAt: "2025-04-06T19:44:40",
    duration: 18,
    coverImg: "https://example.com/finance.jpg",
    hasFinalExam: true,
    instructorName: "Eva",
    modules: []
  },
  {
    courseCode: "CS103",
    courseName: "Spring Boot Basics",
    courseDescription: "Intro to Spring Boot.",
    courseCategory: "PROGRAMMING",
    courseLevel: "BEGINNER",
    createdAt: "2025-04-06T19:44:40",
    duration: 22,
    coverImg: "https://example.com/spring.jpg",
    hasFinalExam: true,
    instructorName: "Alice",
    modules: [
      { moduleName: "Spring Setup", moduleDescription: "Setting up Spring Boot.", orderIndex: 1, durationMinutes: 4 }
    ]
  },
  {
    courseCode: "CS104",
    courseName: "REST API Development",
    courseDescription: "Build REST APIs.",
    courseCategory: "COMPUTER_SCIENCE",
    courseLevel: "INTERMEDIATE",
    createdAt: "2025-04-06T19:44:40",
    duration: 28,
    coverImg: "https://example.com/rest.jpg",
    hasFinalExam: true,
    instructorName: "Alice",
    modules: []
  },
  {
    courseCode: "MT101",
    courseName: "Linear Algebra",
    courseDescription: "Matrix math and vector spaces.",
    courseCategory: "MATHEMATICS",
    courseLevel: "ADVANCED",
    createdAt: "2025-04-06T19:44:40",
    duration: 35,
    coverImg: "https://example.com/matrix.jpg",
    hasFinalExam: true,
    instructorName: "Clara",
    modules: [
      { moduleName: "Matrix Algebra", moduleDescription: "Solving systems.", orderIndex: 1, durationMinutes: 3 }
    ]
  },
  {
    courseCode: "PH201",
    courseName: "Thermodynamics",
    courseDescription: "Study energy systems.",
    courseCategory: "PHYSICS",
    courseLevel: "INTERMEDIATE",
    createdAt: "2025-04-06T19:44:40",
    duration: 20,
    coverImg: "https://example.com/thermo.jpg",
    hasFinalExam: true,
    instructorName: "Clara",
    modules: []
  }
];
