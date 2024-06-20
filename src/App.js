import './App.css';
import TodoCard from "./components/TodoCard";
import {useState} from "react";

const InitialState = [
    {
        id: 1,
        title: 'Важная задача',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque doloremque excepturi illo itaque, maxime molestias nihil obcaecati qui quod vero.',
        done: false
    },
    {
        id: 2,
        title: 'Вторая задача',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque doloremque excepturi illo itaque, maxime molestias nihil obcaecati qui quod vero.',
        done: true
    },
    {
        id: 3,
        title: 'Хлеба купи',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque doloremque excepturi illo itaque, maxime molestias nihil obcaecati qui quod vero.',
        done: false
    }
]

function App() {

    const [todoList, setTodoList] = useState(InitialState)
    const [formTitle, setFormTitle] = useState('')
    const [formDescr, setFormDescr] = useState('')
    const [errorMessage, setErrorMassage] = useState('')

    function handlerActionForm () {

        if (!formTitle || !formDescr) {
            setErrorMassage('Необходимо заполнить все поля!')
            return
        }

        setErrorMassage('')

        // debugger
        const newElement = {
            id: Date.now(),
            title: formTitle,
            description: formDescr,
        }
        setTodoList(prevState => [newElement, ...prevState])
        setFormTitle('')
        setFormDescr('')
    }

    function handlerDone(buttonId) {

        const todoId = todoList.filter(todo => todo.id === buttonId)[0].id
        const changedList = todoList.map((todo) => {
            // debugger
            if (todo.id === todoId) {
                // debugger
                return {
                    ...todo,
                    done: !todo.done,
                }
            }
            return todo
        })
        setTodoList(changedList)
    }

    function handlerDelete(buttonId) {
        setTodoList(todoList.filter(el => el.id !== buttonId))
    }

    return (
        <div className="App">
            <h3>Добавить задачу</h3>
            <h4 className="error">{errorMessage}</h4>
            <div className='input-form'>
                <label htmlFor="title">Заголовок:</label>
                <input type="text"
                       id="title"
                       value={formTitle}
                       onChange={(event) => setFormTitle(event.target.value)}/>
                <label htmlFor="description">Описание:</label>
                <textarea
                    id="description"
                    cols="30"
                    rows="10"
                    value={formDescr}
                    onChange={(event) => setFormDescr(event.target.value)}/>
                <button onClick={handlerActionForm}>ДОБАВИТЬ</button>
            </div>
            <hr/>
            <h2>Список задач</h2>
            {todoList.map((todo) =>
                <TodoCard title={todo.title}
                          description={todo.description}
                          id={todo.id}
                          done={todo.done}
                          handlerDone={handlerDone}
                          handlerDelete={handlerDelete}
                          key={todo.id}/>
            )}

        </div>
    );
}

export default App;
