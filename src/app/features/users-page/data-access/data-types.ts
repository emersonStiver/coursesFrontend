export type EntryParams = {
    name: string;
    route: string;
    icon: string;
}

export interface Module {
    moduleName: string;
    moduleDescription: string;
    orderIndex: number;
    durationMinutes: number;
  }
  
  export interface Course {
    courseCode: string;
    courseName: string;
    courseDescription: string;
    courseCategory: string;
    courseLevel: string;
    createdAt: string;
    duration: number;
    coverImg: string;
    hasFinalExam: boolean;
    instructorName: string;
    modules: Module[];
  }

  export interface MyCourse {
    id: number;
    courseCode: string;
    courseName: string;
    courseDescription: string;
    coverImageUrl: string;
    courseCategory: string;
    courseLevel: string;
    durationHours: number;
    createdAt: string;  
    updatedAt: string;  
    teacherId: number;
    hasFinalExam: boolean;
    providesCertificate: boolean;
  }
  