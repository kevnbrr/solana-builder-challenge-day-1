export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  modules: Module[];
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
  progress: number;
}

export interface Lesson {
  id: string;
  title: string;
  type: 'article' | 'quiz';
  content: string;
  duration: number;
  completed: boolean;
  quiz?: Quiz;
}

export interface Quiz {
  questions: Question[];
  passingScore: number;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface CourseCategory {
  id: string;
  title: string;
  description: string;
  courses: string[]; // Array of course IDs
}

export interface User {
  progress: {
    [courseId: string]: {
      completedLessons: string[];
      badges: string[];
      quizScores: {
        [lessonId: string]: number;
      };
    };
  };
}