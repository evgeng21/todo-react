import './App.css';
import TodoCard from "./components/TodoCard";
import {useState} from "react";
import {InitialState} from "./InitialState";
import InputForm from "./components/InputForm";
import Modal from "./components/Modal";



function App() {

    const [todoList, setTodoList] = useState(InitialState)
    const [formTitle, setFormTitle] = useState('')
    const [formDescr, setFormDescr] = useState('')
    const [errorMessage, setErrorMassage] = useState('')
    const [modalActive, setModalActive] = useState(false)
    const [idCurrentTodo, setIdCurrentTodo] = useState(0)

    function handlerActionForm () {

        if (!formTitle || !formDescr) {
            setErrorMassage('Необходимо заполнить все поля!')
            return
        }

        setErrorMassage('')

        // debugger
        if (idCurrentTodo === 0) {
            const newElement = {
                id: Date.now(),
                title: formTitle,
                description: formDescr,
            }
            setTodoList(prevState => [newElement, ...prevState])
        } else {
            const changedList = todoList.map((todo) => {
                // debugger
                if (todo.id === idCurrentTodo) {
                    // debugger
                    return {
                        ...todo,
                        title: formTitle,
                        description: formDescr,
                    }
                }
                return todo
            })
            setTodoList(changedList)
            setModalActive(false)
            setIdCurrentTodo(0)
        }


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

    function openChangeForm(todoId) {
        const todoElement = todoList.filter(todo => todo.id === todoId)[0]
        setFormTitle(todoElement.title)
        setFormDescr(todoElement.description)
        setModalActive(true)
        setIdCurrentTodo(todoElement.id)
    }

    function closeChangeForm() {
        setModalActive(false)
        setIdCurrentTodo(0)
        setFormTitle('')
        setFormDescr('')
        setErrorMassage('')
    }

    return (
        <div className="App">
            <h3>Добавить задачу</h3>
            <h4 className="error">{errorMessage}</h4>
            <InputForm
                formTitle={formTitle}
                setFormTitle={setFormTitle}
                formDescr={formDescr}
                setFormDescr={setFormDescr}
                handlerActionForm={handlerActionForm}
                btnTitle="ДОБАВИТЬ"
            />
            <hr/>
            <h2>Список задач</h2>
            {todoList.map((todo) =>
                <TodoCard title={todo.title}
                          description={todo.description}
                          id={todo.id}
                          done={todo.done}
                          handlerDone={handlerDone}
                          handlerDelete={handlerDelete}
                          setActive={openChangeForm}
                          key={todo.id}/>
            )}
            <Modal active={modalActive} setActive={closeChangeForm}>
                <h3>Изменить задачу</h3>
                <h4 className="error">{errorMessage}</h4>
                <InputForm
                    formTitle={formTitle}
                    setFormTitle={setFormTitle}
                    formDescr={formDescr}
                    setFormDescr={setFormDescr}
                    handlerActionForm={handlerActionForm}
                    btnTitle="ИЗМЕНИТЬ"
                    todoId={idCurrentTodo}
                />
            </Modal>
        </div>
    );
}

export default App;
