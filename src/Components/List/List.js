import React from 'react';
import './List.css';
import { useStateValue } from "../StateProvider/StateProvider";

function List(props) {

    const [{todoList}, dispatch] = useStateValue();
    const remove = (e) => {

        dispatch({
            type: 'REMOVE_FROM_LIST',
            item: {
                id: props.id,
            },
        });
    }

    return (
        <div className='list'>
            <div className="list_hai">
                <h4 className='id'>{props.id}</h4>
                <h4 className='title'>{props.title}</h4>
                <h4 className='deadline'>{props.deadline}</h4>
                <button 
                    className='btn-class'
                    onClick={remove}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

export default List;
