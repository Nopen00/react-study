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

  const onInsert = async (todo:TodoCreate) =>{

    // 데이터 삽입 서버 요청
    const result = await postTodo(todo);

    if (result.message){
      // 서버로 전체 데이터 요청
      await fetchData(completedFilter);
    }
  }

  const onDelete = async (id:string) => {
    // todos에서 삭제된 id와 동일한 todo가 아닌 걸 찾아서 setTodos()변경
    //filter() => 새로운 배열
    const result = await deleteTodo(id)
    if (result.message){
      console.log(result.message);
      await fetchData(completedFilter)
    }  
  }

  const onUpdate = async(id: number) => {
    // todos에서 id와 동일한 todo를 찾아서 completd의 값을 반대로 변경하기
    const updateTodo = todos.find(todo => todo.id  === id)

    if (updateTodo){
      const completed = !updateTodo.completed
      const result = await putTodo(id, {completed})
      if(result.message) await fetchData(completedFilter)
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
