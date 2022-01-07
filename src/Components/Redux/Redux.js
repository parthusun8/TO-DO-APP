export const initialstate = {
    todoList: [],
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_LIST':
            return ({
                ...state,
                todoList: [...state.todoList, action.item],
            });
        case 'REMOVE_FROM_LIST':
            
            const index = state.todoList.findIndex(
                (todoListItem) => todoListItem.id == action.id
            );
            // console.log(index);
            let newtodoList = [...state.todoList];
                if(index >=0) {
                    newtodoList.splice(index, 1);
                } else {
                    console.warn(`Cant remove task (id: ${action.id}) as it's not in todoList!!`);
                }
            console.log(state);
        default:
            return({
                ...state,
                todoList: newtodoList,
            }) 
    }
}

export default reducer;