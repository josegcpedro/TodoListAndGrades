import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grade } from '../../../Grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  private apiUrl = 'http://localhost:3000/grades'

  constructor(private http: HttpClient) { }

  getGrades(): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.apiUrl)
  }

  deleteGrade(grade:Grade): Observable<Grade>{
    return this.http.delete<Grade>(`${this.apiUrl}/${grade.id}`)
  }

  addGrade(grade: Grade): Observable<Grade>{
    return this.http.post<Grade>(`${this.apiUrl}`, grade)
  }
}
