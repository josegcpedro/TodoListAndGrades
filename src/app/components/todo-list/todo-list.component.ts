import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/todo/task.service';
import { Task } from '../../../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';


@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = []

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }
}

