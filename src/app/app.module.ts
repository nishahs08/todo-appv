import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {TodoService} from '../shared/services/todo.service';

import { AppComponent } from './app.component';
import {TodoComponent} from './todo/todo.component';
import {TodoCreateComponent} from './todo/create/todo-create.component';
import {TodoListComponent} from './todo/list/todo-list.component';
import {TodoCompletedComponent} from './todo/completed/todo-completed.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoCreateComponent,
    TodoListComponent,
    TodoCompletedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
