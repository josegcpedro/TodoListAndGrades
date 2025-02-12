import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/todo/task.service';
import { Task } from '../../../Task';
import { TaskItemComponent } from '../task-item/task-item.component'; // Importando o componente standalone
import { CommonModule } from '@angular/common'; // Necessário para diretivas do Angular, como *ngFor

@Component({
  selector: 'app-todo-list',
  standalone: true, // Definindo como standalone
  imports: [TaskItemComponent, CommonModule], // Importando TaskItemComponent e CommonModule
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe();
  }
}
