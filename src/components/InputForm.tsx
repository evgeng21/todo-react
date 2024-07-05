import React from 'react';

const InputForm = ({formTitle, setFormTitle, formDescr, setFormDescr, handlerActionForm, btnTitle, todoId}: 
    {
        formTitle: string,
        setFormTitle: (text: string) => void,
        formDescr: string,
        setFormDescr: (text: string) => void,
        handlerActionForm: (id: number) => void,
        btnTitle: string,
        todoId: number
    }
) => {
    return (
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
            <button onClick={() => handlerActionForm(todoId)}>{btnTitle}</button>
        </div>
    );
};

export default InputForm;