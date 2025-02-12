import { Component, OnInit } from '@angular/core';
import { GradeService } from '../../services/grades/grade.service';
import { Grade } from '../../../Grade';

@Component({
  selector: 'app-grades',
  imports: [],
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css'
})
export class GradesComponent implements OnInit {
  grades: Grade[] = []

  constructor(private gradeService: GradeService) { }

  ngOnInit(): void {
    this.gradeService.getGrades().subscribe((data) => {
      this.grades = data;
    })
  }
}
