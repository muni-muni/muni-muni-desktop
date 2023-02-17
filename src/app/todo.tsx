export function TodoList({tasks,deleteTask}) {

    return (
        <div>
            <p>
                Please Write down your tasks for tommorrow
            </p>
            <ol>
            {
                tasks.map((item, index)=> {
                return <li key={index}>{item.title}
                    <button onClick={() => {deleteTask(index)}}> X </button>
                    </li>
                })
            }
            </ol>   
        </div>
    )
}