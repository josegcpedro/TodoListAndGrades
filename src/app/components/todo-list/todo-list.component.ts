import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/todo/task.service';
import { Task } from '../../../Task';


@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = []

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) =>{
      this.tasks = data;
      console.log(data)
});
  } 
}

