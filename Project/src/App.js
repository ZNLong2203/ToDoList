import TodoList from './components/ToDoList';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import { useCallback, useState } from 'react';
import { v4 } from 'uuid';

function App() {
  const [todoList, setTodolist] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onAddBtnClick = useCallback((e) => {
    setTodolist([({ id: v4(), name: textInput, isCompleted: false }), ...todoList]);
    setTextInput('');
  }, [textInput, todoList]); 
  
  const onCheckBtnClick = useCallback((e) => {
      setTodolist(prevState => prevState.map(todo => todo.e === e ? {...todo, isCompleted: true} : todo))
  });

  return (
    <>
   <h3>List need to do</h3>
   <Textfield 
    name = "add-todo" 
    placeholder="Add the work" 
    elemAfterInput = {
      <Button isDisabled={!textInput} appearance="primary" onClick={onAddBtnClick}>
      Add
      </Button>
    }
    css={{padding: "2px 4px 2px"}}
    value={textInput}
    onChange={onTextInputChange}
   ></Textfield>
    <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick}/>
   </>
  );
}

export default App;
