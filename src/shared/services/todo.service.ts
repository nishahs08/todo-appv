import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

    private todoList: Array<any>;
    private completedList: Array<any>;

    private id: number;

    constructor () {
        this.todoList = [];
        this.completedList = [];
        this.id = 1;
    }

    addTodo (item): Boolean {
        if (this.todoList.find(todo => todo.item === item)) {
            return false;
        }
        this.todoList.push({ id: this.id, item: item });
        this.id = this.id + 1;
        return true;
    }

    getTodoItems(): Array<any> {
        return this.todoList;
    }

    markTodoComplete (id) {
        const completedTodo = this.todoList.find(todo => todo.id === id);

        if (completedTodo !== null) {
            const indexOfTodo = this.todoList.indexOf(completedTodo);
            this.todoList.splice(indexOfTodo, 1);
            this.completedList.push(completedTodo);
            return true;
        }
        return false;
    }

    getCompletedTodos (): Array<any> {
        return this.completedList;
    }
}
