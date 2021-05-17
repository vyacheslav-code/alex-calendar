export enum AppLinks {
  Weather = "weather",
  Schedule = "schedule",
}

export type ScheduleResponse = {
    data: {
      weeks: Weeks;
    };
};

export type Weeks = {
  [key: string]: {
    days: {
      [day: string]: Day;
    };
  };
};

type Day = {
  day_name: string;
  lessons: Lesson[];
};

type Lesson = {
  lesson_name: string;
  lesson_room: string;
  lesson_type: string;
  teacher_name: string;
  time_start: string;
  time_end: string;
};
