import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './components/about/about.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

import { AppComponent } from './app.component';
import { DesarolloWebComponent } from './components/articles/comenzar-programacion-general/desarollo-web.component';
import { DesarolloWebJuniorComponent } from './components/articles/desarollo-web-junior/desarollo-web-junior.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ArticleListComponent,
    ArticleComponent,
    DesarolloWebComponent,
    DesarolloWebJuniorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    EditorModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
