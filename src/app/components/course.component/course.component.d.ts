export interface ICourse {
    id: string;
    description: string;
    duration: string;
    date: string;
}

export interface ICourseComponent {  
    course: ICourse;
}
