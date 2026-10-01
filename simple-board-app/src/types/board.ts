// 서버로부터 내려올 데이터 타입


export type BoardCreate = {
    'userId': number;
    'title': string;
    'contents': string;
}


export type BoardUpdate = {
    'title': string;
    'contents': string;
}


export type BoardResponse = {
    'id': number;
    'title': string;
    'contents': string;
    'userId': number;
    'created_at': string;
}


export type BoardPageResponse = {
    'items': BoardResponse[];
    'total': number;
    'page': number;
    'size': number;
    'total_pages': number;
}


export type Board = {
    'userId': number;
    'id': number;
    'title': string;
    'body': string;
}

export type Comment = {
    'postId': number;
    'id': number;
    'name': string;
    'email': string;
    'body': string;
}

export type BoardUpSert = Board & {comments:Comment[]}