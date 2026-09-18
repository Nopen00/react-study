// 서버로부터 내려올 데이터 타입

export type Board = {
    'userId': number;
    'id': number;
    'title': string;
    'body': string;
}

export type BoardUpSert = Omit<Board,'id'> & {id?:number}