import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'register',
                component: RegisterComponent,
            },
            {
                path: '',
                loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WebRoutingModule {}
