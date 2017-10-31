import {Component} from '@angular/core';
import {TodoService} from '../../../shared/services/todo.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
    constructor (
        private _todoService: TodoService
    ) {}

    getTodoList (): Array<string> {
        return this._todoService.getTodoItems();
    }

    todoEmpty (): Boolean {
        return this._todoService.getTodoItems().length ? false : true;
    }

    markTodoComplete(id) {
        const result = this._todoService.markTodoComplete(id);
        if (result) {
            alert('Todo completed');
        } else {
            alert('Could not mark todo as complete');
        }
    }
}
