import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AboutComponent } from './components/about/about.component';
import { ArticleComponent } from './components/article/article.component';
import { CreateComponent } from './components/create/create.component';

import { AppComponent } from './app.component';
import { DesarolloWebComponent } from './components/articles/comenzar-programacion-general/desarollo-web.component';
import { DesarolloWebJuniorComponent } from './components/articles/desarollo-web-junior/desarollo-web-junior.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ArticleComponent,
    CreateComponent,
    DesarolloWebComponent,
    DesarolloWebJuniorComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
