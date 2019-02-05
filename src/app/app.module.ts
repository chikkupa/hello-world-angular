import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/courses.service';
import { TodoComponent } from './todo/todo.component';
import { TodoServices } from './todo/todos.service';
import { from } from 'rxjs';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    TodoComponent,
    SignupFormComponent,
    FavoriteComponent,
    PanelComponent,
    ContactFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CourseService,
    TodoServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
