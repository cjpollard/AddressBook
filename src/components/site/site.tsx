import { Component, Listen, State } from '@stencil/core';

@Component({
    tag: 'todo-site',
    styleUrl: 'site.scss'
})
export class Site {

    @State() todos: Todo[] = [
        {task: 'Cook', completed: false},
        {task: 'Read', completed: true},
        {task: 'Sleep', completed: false}
    ];

    @Listen('newTodo')
    newTodo(e) {
        const newTodo = {
            task: e.detail,
            completed: false
        };
        this.todos = [...this.todos, newTodo];
    }

    @Listen('toggleTodo')
    toggleTodo(e): void {
        const todo = e.detail;
        this.todos = this.todos.map(x => {
        if (x.task === todo.task) {
            const updated = {
                task: x.task,
                completed: !x.completed
            };
            return updated;
        }
            return x;
        })
    }

    render() {
        return (
            <div class="wrapper">
                <nav>
                    <div class="container">
                        <h2>TODO</h2>
                    </div>
                </nav>
                <div class="container">
                    <div class="row">
                        <div class="col-md-offset-4 col-md-4 col-sm 12">
                            <todo-form></todo-form>
                            <todo-list todos={this.todos}></todo-list>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

interface Todo {
    task: string;
    completed: boolean;
}