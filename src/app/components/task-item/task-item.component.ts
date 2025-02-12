import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask = new EventEmitter<Task>();
  @Output() onToggleDone = new EventEmitter<Task>();

  faTimes = faTimes;

  onDelete() {
    this.onDeleteTask.emit(this.task);
  }

  onToggle(task:Task){
    this.onToggleDone.emit(task);
  }
}
 