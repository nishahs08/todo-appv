import {Component} from '@angular/core';
import {TodoService} from '../../../shared/services/todo.service';
@Component({
    selector: 'app-todo-create',
    templateUrl: './todo-create.component.html'
})

export class TodoCreateComponent {

    todoItem: String;

    constructor(
        private _todoService: TodoService
    ) {}

    createTodoItem () {
        const result = this._todoService.addTodo(this.todoItem);
        if (!result) {
            alert('Todo item already added');
        } else {
            alert('Added todo');
            this.todoItem = '';
        }
    }
}
