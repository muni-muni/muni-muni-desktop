export function TodoList({tasks}) {
    return (
        <div>
            <p>
                Hello world, I have once again arrived
            </p>
            {
                tasks.map((item, index)=> {
                return <p key={index}>{item.title}</p>
                })
            }   
        </div>
    )
}