import { useEffect, useReducer, useRef, useState } from 'react'
import { initialTodos, type TodoCreate } from './todo'
import { todoReducer } from './todo.Reducer'
import TodoHeader from './TodoHeader'
import TodoInsert from './TodoInsert'
import TodoList from './TodoList'
import TodoTeamplate from './TodoTemplate'

function TodoMain() {
  // const [todos,setTodos] = useState<Todo[]>(initialTodos)
   const [todos,dispatch] = useReducer(todoReducer, initialTodos)
  
  // 상단의 '전체','완료','미완료' 보관
  const [completedFilter, setCompletedFilter] = useState<boolean | null>(null)
  const filterdTodos = completedFilter === null ? todos : todos.filter((todo)=>(todo.completed===completedFilter))

  const nextId = useRef(4)
  const onInsert = (todo:TodoCreate) =>{

    const newTodo = {...todo, id: nextId.current, createData:new Date(), lastModifiedData:new Date()}
    console.log('newtodo',newTodo);
    
    dispatch({
      type:'INSERT',
      payload: newTodo
    })
    // 재렌더링이 되어도 값을 유지함
    nextId.current +=1
  }

const onDelete = (id:number) => {
  // todos에서 삭제된 id와 동일한 todo가 아닌 걸 찾아서 setTodos()변경
  //filter() => 새로운 배열
  dispatch({
      type:'DELETE',
      payload: id
    })
}

const onUpdate = (id: number) => {
  // todos에서 id와 동일한 todo를 찾아서 completd의 값을 반대로 변경하기
  dispatch({
      type:'UPDATE',
      payload: id
    })
}
// 완료, 미완료 선택 부분
const getTodosByCompleted = (completed: string) => {
  // setTodos
  setCompletedFilter(completed === ''?null : completed === 'true')
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
        <TodoList todos = {filterdTodos} onDelete={onDelete} onUpdate = {onUpdate} />
      </TodoTeamplate>
    </>
  )
}

export default TodoMain
