import React, {useState} from 'react';
import { useStateValue } from "../StateProvider/StateProvider";


function ListInput() {

    const [{todoList}, dispatch] = useStateValue('');
    const [newTask, setnewTask] = useState('')
    const addToList = (e) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_TO_LIST',
            item: {
                task: newTask,
            },
        });
        // console.log(newTask);
        setnewTask('');
    }

    return (
        <div>
        <form >
            <input type="text" 
                value={newTask}
                onChange={e => {
                    setnewTask(e.target.value)
                }}
            />
            <button onClick={addToList}>Add</button>
        </form>
        </div>
    )
}

export default ListInput
