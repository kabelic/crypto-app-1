import { createReducer } from "@reduxjs/toolkit"

const todosReducer = createReducer([{value:'todo1',id:1},{value:'todo2',id:2},{value:'todo3',id:3}], (builder) => {
    builder
      .addCase('ADD_TODO', (state, action:any) => {
        // "mutate" the array by calling push()
        state.push(action.payload)
      })
      .addCase('TOGGLE_TODO', (state, action:any) => {
        const todo = state[action.payload.index]
        // "mutate" the object by overwriting a field
        todo.completed = !todo.completed
      })
      .addCase('REMOVE_TODO', (state, action:any) => {
        // Can still return an immutably-updated value if we want to
        return state.filter((todo, i) => i !== action.payload.index)
      })
  })

  export default  todosReducer;