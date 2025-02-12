import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "todolist",
        component: HomeComponent
    },
    {
        path: "notes",
        component: HomeComponent
    },
];
