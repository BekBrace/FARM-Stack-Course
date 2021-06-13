// @bekbrace
// FARMSTACK Tutorial - Sunday 13.06.2021

import TodoItem from './Todo'

export default function TodoView(props) {
    return (
        <div>
            <ul>
                {props.todoList.map(todo => <TodoItem todo={todo} />)}
            </ul>
        </div>
    )
}