import { useRef } from 'react'
import { deleteTodo, postTodo, putTodo } from './apis/todoApi'
import './App.css'
import Loading from './components/Loading'
import TodoHeader from './components/TodoHeader'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import TodoTeamplate from './components/TodoTemplate'
import useFetch from './hooks/useFetch'
import { type TodoCreate } from './types/todo'

function App() {
  const {todos, loading, fetchData, completedFilter, setCompletedFilter} = useFetch()


  

  const nextId = useRef(4)
  const onInsert = async (todo:TodoCreate) =>{
    // todo 변경
    // id: nextId.current
    // ...: {} 들어온걸 개별로 풀어서
    const newTodo = {...todo, id: nextId.current, createData:new Date(), lastModifiedData:new Date()}
    console.log('newtodo',newTodo);

    // 데이터 삽입 서버 요청
    const result = await postTodo(newTodo);

    if (result.message == 'success'){
      // 서버로 전체 데이터 요청
      fetchData(completedFilter);
      // 재랜더링이 되어도 값을 유지함
      nextId.current += 1
    }
  }

  const onDelete = async (id:string) => {
    // todos에서 삭제된 id와 동일한 todo가 아닌 걸 찾아서 setTodos()변경
    //filter() => 새로운 배열
    const result = await deleteTodo(id)
    if (result.message === 'success') fetchData(completedFilter)
  }

  const onUpdate = async(id: number) => {
    // todos에서 id와 동일한 todo를 찾아서 completd의 값을 반대로 변경하기
    const updateTodo = todos.find(todo => todo.id  === id)

    if (updateTodo){
      updateTodo.completed = !updateTodo.completed
      const result = await putTodo(id, updateTodo)
      if(result.message === 'success') fetchData(completedFilter)
    }
  }
  // 완료, 미완료 선택 부분
  const getTodosByCompleted = (completed: string) => {
    // setTodos
    setCompletedFilter(completed === ''?null : completed === 'true')
  }

  



  return (
    <>
      <TodoTeamplate>
        <TodoHeader getTodosByCompleted = {getTodosByCompleted}/>
        <TodoInsert onInsert = {onInsert}/>
        {loading? <Loading/> : <TodoList todos = {todos} onDelete={onDelete} onUpdate = {onUpdate} />}
        
      </TodoTeamplate>
    </>
  )
}


export default App
