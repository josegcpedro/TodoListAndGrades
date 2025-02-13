import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Grade } from '../../../Grade';

@Component({
  selector: 'app-add-grade',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-grade.component.html',
  styleUrl: './add-grade.component.css'
})
export class AddGradeComponent {
  @Output() onAddGrade = new EventEmitter<Grade>();

  subject: string = "";
  value: number = 0;

  onSubmit() {
    if (!this.subject || this.value <= 0 ) {
      alert("Adicione uma nota superior a 0 e escolha uma categoria");
      return;
    }


    const newGrade: Grade = {
      subject: this.subject,
      value: this.value,
    };

    this.onAddGrade.emit(newGrade);
    this.subject = "";
    this.value = 0;
  }
}
