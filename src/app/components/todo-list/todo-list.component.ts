import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/todo/task.service';
import { Task } from '../../../Task';
import { TaskItemComponent } from '../task-item/task-item.component'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-todo-list',
  standalone: true, 
  imports: [TaskItemComponent, CommonModule], 
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
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter((t) => t.id !== task.id)));
  }

  toggleDone(task: Task){
    task.done = !task.done;
    this.taskService.updateTask(task).subscribe();
  }
}
