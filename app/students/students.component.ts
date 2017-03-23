import {
    Component
} from '@angular/core';
import {
    Student
} from './student';
import {
    StudentDataService
} from '../services/students-data.service';
import {
    StudentDataFileService
} from '../services/students-data-file.service';
@Component({
    selector: 'students',
    templateUrl: 'app/students/students.component.html',
    styleUrls: ['app/students/students.component.css']
})
export class StudentsComponent {
    students: Student[];
    constructor(private studentDataService: StudentDataFileService) {}
    ngOnInit() {
        this.studentDataService.getStudentsData().subscribe(data => this.students = data, error => alert("Error is: " + error), () => console.log("finished"));
    }
    averageGpa() {
        let sum = 0;
        if (Array.isArray(this.students)) {
            for (let student of this.students) {
                sum += student.gpa;
            }
            return sum / this.students.length;
        } else {
            return 0.0;
        }
    }
upQuantity(student) {
    student.penAmount++;
}
downQuantity(student) {
    student.penAmount--;
    if (student.penAmount < 0) {
        student.penAmount = 0;
    }
}
getCoord(event) {
    console.log(event.clientX + ", " + event.clientY);
}
}