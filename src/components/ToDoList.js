import React from 'react';
import Todo from "./ToDo";

export default function TodoList({todoList, onCheckBtnClick}) {
    return (
        <>
        {
            todoList.map((todo) => <Todo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick} />)
        }
            {/* <Todo />
            <Todo />
            <Todo /> */}
        </>
    );
}