import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { AboutComponent } from './components/about/about.component';

import { DesarolloWebComponent } from './components/articles/comenzar-programacion-general/desarollo-web.component';
import { DesarolloWebJuniorComponent } from './components/articles/desarollo-web-junior/desarollo-web-junior.component';
  const appRoutes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'about', component: AboutComponent},
    {path:'por-donde-empezar-a-programar', component: DesarolloWebComponent},
    {path:'por-donde-empezar-en-el-desarollo-web', component: DesarolloWebJuniorComponent}
  ];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
