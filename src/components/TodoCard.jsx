
export default function TodoCard({title, description, id, done, handlerDone, handlerDelete, setActive}) {
    // debugger
    return (
        <>
            <div className={done ? "todo-card done-theme" : "todo-card"}>
                <div className='todo__descr'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className='todo__images' onClick={e => e.stopPropagation()}>
                    <button id={"done-" + id} onClick={() => handlerDone(id)}><img src="/done.png" alt=""/></button>
                    <button id={"delete-" + id} onClick={() => handlerDelete(id)}><img src="/thrash.png" alt=""/></button>
                    <button id={"delete-" + id} onClick={() => setActive(id)}><img src="https://i0.wp.com/statisticsbyjim.com/wp-content/uploads/2023/01/change.png?resize=300%2C300&ssl=1" alt=""/></button>
                </div>
            </div>
        </>
    )

}