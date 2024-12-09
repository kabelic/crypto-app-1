'use client'
import StoreProvider from "./storeProvider";
import { useAppSelector } from "@/lib/hooks";

const List = () => {
  const todos = useAppSelector((state) => state.todos);
  return(
    <div>
      <h1>This is list component..!</h1>
      {todos.map((todo) => <li key={todo.id}>{todo.value}</li>)}
    </div>
  )
}

export default function Home() {
  return (
    <StoreProvider>
    <List/>
    </StoreProvider>
  );
}
