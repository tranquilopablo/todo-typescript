export interface Task {
    name: string;
    done: boolean;
    category?: Category;
  }

  // export type Category = 'general' | 'work' | 'gym' | 'hobby';


  export enum Category {
    GENERAL = "general",
    WORK = "work",
    GYM = "gym",
    HOBBY = "hobby",
  }