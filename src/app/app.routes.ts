import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { View } from './view/view';
import { Update } from './update/update';
import { Create } from './create/create';

export const routes: Routes = [
    {path:'',redirectTo: 'dashboard', pathMatch:'full'},
    {path:'dashboard', component:Dashboard},
    {path:'create', component: Create},
    {path: 'view/:id', component: View},
    {path: 'update/:id', component: Update}
];
