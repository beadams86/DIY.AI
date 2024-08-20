import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'diagnostics', component: AppComponent},
    {path: 'tutorials', component: AppComponent},
    {path: 'contact', component: AppComponent},
];
