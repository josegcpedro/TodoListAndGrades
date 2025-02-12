import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../Task';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task
  @Output() onDeleteTask = new EventEmitter<Task>();
  faTimes = faTimes;

  constructor(library: FaIconLibrary) {
    library.addIcons(faTimes);
  }

  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }
}
