import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GradesComponent } from './components/grades/grades.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "todolist",
        component: TodoListComponent
    },
    {
        path: "notes",
        component: GradesComponent
    },
];
