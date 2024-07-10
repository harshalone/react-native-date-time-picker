// src/index.d.ts

declare module 'my-date-time-picker' {
    import { ComponentType } from 'react';
  
    interface DateInputProps {
      setDate: (date: string) => void;
      title?: string;
      required?: boolean;
      wrapperClass?: string;
    }
  
    interface TimeInputProps {
      setTime: (time: string) => void;
      title?: string;
      required?: boolean;
      wrapperClass?: string;
    }
  
    export const DateInput: ComponentType<DateInputProps>;
    export const TimeInput: ComponentType<TimeInputProps>;
  }
  