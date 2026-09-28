// Todo 타입 지정
// insert 할때 id 입력 안함, 날짜 입력 안함 => 자도응로 생성
// Todoresponse
export type Todo= {
  id: number;
  title: string;
  completed : boolean;
  important : boolean;
  create_at: Date;
  update_at: Date;
}

// TodoList 타입
export type TodosProps = {
  todos:Todo[]; 
  onDelete:(id:number) => void
  onUpdate:(id:number) => void
}
// TodoListItem 타입
export type TodoProps = Omit<TodosProps,'todos'> & {
  todo:Todo; 
}

// 서버단 연동까지 포함
// Todo 타입에서 id, createData,lastModifiedData 타입 제외 (Omit)
export type TodoUpsert = Omit<Todo, 'id'|'createData'|'lastModifiedData'> & {id? : number}

export type TodoCreate = {
  title: string;
  completed : boolean;
  important : boolean;
}