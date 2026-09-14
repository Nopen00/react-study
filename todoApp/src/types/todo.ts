export const initialTodos = [
  {
    id: 1,
    title: 'react 기초 알아보기',
    completed: true,
    important: true,
    createDate: new Date(),
    lastModifiedDate: new Date(),
  },
  {
    id: 2,
    title: '컴포넌트 스타일링해 보기',
    completed: true,
    important: false,
    createDate: new Date(),
    lastModifiedDate: new Date(),
  },
  {
    id: 3,
    title: '일정관리 앱 만들어보기',
    completed: false,
    important: false,
    createDate: new Date(),
    lastModifiedDate: new Date(),
  },
];

// Todo 타입 지정
// insert 할때 id 입력 안함, 날짜 입력 안함 => 자도응로 생성
export type Todo= {
  id?: number;
  title: string;
  completed : boolean;
  important : boolean;
  createDate?: Date;
  lastModifiedDate?: Date;
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