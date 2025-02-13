import { Component, OnInit } from '@angular/core';
import { GradeService } from '../../services/grades/grade.service';
import { Grade } from '../../../Grade';
import { CommonModule } from '@angular/common';
import { GradesItemComponent } from '../grades-item/grades-item.component';
import { AddGradeComponent } from '../add-grade/add-grade.component';

@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [CommonModule, GradesItemComponent, AddGradeComponent],
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']

})
export class GradesComponent implements OnInit {
  grades: Grade[] = []

  constructor(private gradeService: GradeService) { }

  ngOnInit(): void {
    this.gradeService.getGrades().subscribe((data) => {
    this.grades = data;
    })
  }

  deleteGrade(grade: Grade): void {
    this.gradeService.deleteGrade(grade).subscribe(() => (this.grades = this.grades.filter((g) => g.id !== grade.id)));
  }

  addGrade(grade: Grade){
    this.gradeService.addGrade(grade).subscribe((grade) => this.grades.push(grade))
  }
}
