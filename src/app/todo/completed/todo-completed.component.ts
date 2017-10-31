import {Component} from '@angular/core';
import {TodoService} from '../../../shared/services/todo.service';

@Component({
    selector: 'app-todo-completed',
    templateUrl: './todo-completed.component.html'
})
export class TodoCompletedComponent {
    constructor (
        private _todoService: TodoService
    ) {}

    completedTodoEmpty(): Boolean {
        return this._todoService.getCompletedTodos().length ? false : true;
    }

    getCompletedList (): Array<any> {
        return this._todoService.getCompletedTodos();
    }
}
