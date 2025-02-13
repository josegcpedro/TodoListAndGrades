import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Task>();

  task: string = "";
  category: string = "";
  done: boolean = false;

  onSubmit() {
    if (!this.task) {
      alert("Adicione uma tarefa");
      return;
    }


    const newTask: Task = {
      title: this.task,
      category: this.category,
      done: this.done
    };

    this.onAddTask.emit(newTask);

    this.category = "";
    this.task = "";
    this.done = false;
  }
}
