interface ICourse {
    courseId: string;
    description: string;
    duration: string;
    date: string;
}

export interface ICourseComponent {  
    course: ICourse;
}
