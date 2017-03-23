import {STUDENTS} from '../mocks';
import {Injectable} from '@angular/core';

@Injectable()

export class StudentDataService{
	getStudentsData(){
		return STUDENTS;
	}
}