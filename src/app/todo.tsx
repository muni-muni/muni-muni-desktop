export function TodoList({tasks,deleteTask}) {

    return (
        <div>
            <p>
                Hello world, I have once again arrived
            </p>
            <ol>
            {
                tasks.map((item, index)=> {
                return <li key={index}>{item.title}
                    <button onClick={() => {deleteTask(index)}}/>
                    </li>
                })
            }
            </ol>   
        </div>
    )
}