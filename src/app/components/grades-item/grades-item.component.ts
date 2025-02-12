import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grade } from '../../../Grade';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-grades-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './grades-item.component.html',
  styleUrl: './grades-item.component.css'
})
export class GradesItemComponent {
  @Input() grade!: Grade;
  @Output() onDeleteGrade = new EventEmitter<Grade>();


  faTimes = faTimes;

  onDelete() {
    this.onDeleteGrade.emit(this.grade);
  }
}
