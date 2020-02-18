
export const dataList = {
    toDolist: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
          }
        ]
    }



    export const todoReducer = (state, action) => {

    switch (action.type) {
      case 'ADD_TODO':
          const addTodo = {
              item: action.payLoad,
              completed: false,
              id: Date.now()
          }
        return {
          ...state,
          todo: [...state.toDolist, addTodo]
        };
      default:
        return state;
    }
}
