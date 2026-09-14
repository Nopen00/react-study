import { useEffect, useRef, useState } from 'react'
import './App.css'
import TodoHeader from './components/TodoHeader'
import TodoInsert from './components/TodoInsert'
import TodoTeamplate from './components/TodoTemplate'
import { initialTodos, type Todo, type TodoCreate } from './types/todo'
import TodoList from './components/TodoList'

function App() {
  const [todos,setTodos] = useState<Todo[]>(initialTodos)

  const nextId = useRef(4)
  const onInsert = (todo:TodoCreate) =>{
    // todo 변경
    // id: nextId.current
    // ...: {} 들어온걸 개별로 풀어서
    const newTodo = {...todo, id: nextId.current, createData:new Date(), lastModifiedData:new Date()}
    console.log('newtodo',newTodo);
    
    setTodos([
      //원문 복사
      ...todos,
      // 새로운 todo 추가
      newTodo,
    ])
    // 재렌더링이 되어도 값을 유지함
    nextId.current +=1
  }

const onDelete = (id:number) => {
  // todos에서 삭제된 id와 동일한 todo가 아닌 걸 찾아서 setTodos()변경
  //filter() => 새로운 배열
  setTodos(todos.filter((todo)=> todo.id !== id))
}

const onUpdate = (id: number) => {
  // todos에서 id와 동일한 todo를 찾아서 completd의 값을 반대로 변경하기
  setTodos(
    todos.map((todo)=> 
      todo.id === id ? {...todo, completed: !todo.completed, lastModifiedDate:new Date()}: todo
    )
  );
}
// 완료, 미완료 선택 부분
const getTodosByCompleted = (completed: boolean) => {
  // setTodos
}

// todos값 확인
// 컴포넌트 생명주기에 코드를 실행하고 싶을때
useEffect(()=> {
  console.log('todos',todos);
  
},[todos])

  return (
    <>
      <TodoTeamplate>
        <TodoHeader getTodosByCompleted = {getTodosByCompleted}/>
        <TodoInsert onInsert = {onInsert}/>
        <TodoList todos = {todos} onDelete={onDelete} onUpdate = {onUpdate} />
      </TodoTeamplate>
    </>
  )
}

export default App
