
export default function TodoCard({title, description, id, done, handlerDone, handlerDelete}) {
    // debugger
    return (
        <>
            <div className={done ? "todo-card done-theme" : "todo-card"}>
                <div className='todo__descr'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className='todo__images'>
                    <button id={"done-" + id} onClick={() => handlerDone(id)}><img src="/done.png" alt=""/></button>
                    <button id={"delete-" + id} onClick={() => handlerDelete(id)}><img src="/thrash.png" alt=""/></button>
                </div>
            </div>
        </>
    )

}