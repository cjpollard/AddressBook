import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.scss'
})
export class TodoList {

    @Prop() todos: Todo[];
    @Event() toggleTodo: EventEmitter;

    completedClass(todo: Todo) : string {
        return todo.completed ? 'completed' : '';
    }

    handleToggleTodo = (todo) => {
        this.toggleTodo.emit(todo);
    }

    render() {
        return (
            <div class="todo-list">
                <ul>
                    {this.todos.map(todo => <li class={this.completedClass(todo)}
                        onClick={this.handleToggleTodo.bind(this, todo)}>{todo.task}</li>)}
                </ul>
            </div>
        );
    }
}

export interface Todo {
    task: string;
    completed: boolean;
}