// npm install axios
import axios from 'axios'


const getData = async () => {
  // axios는 fetch와 달리 response.data 에 결과가 바로 들어있음 (response.json() 아님)
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
  return response.data;
};
const postData = async () => {
  const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
    title: '연습',
    body: '연습용 데이터',
    userId: 1
  });
  return response.data;
};
const putData = async () => {
  const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/1`, {
    id: 1,
    title: '연습',
    body: '연습용 데이터',
    userId: 1
  });
  return response.data;
};
const deleteData = async () => {
  const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/1`);
  return response.data;
};

// 사용 예시
const main = async () => {
  console.log(await getData());
  console.log(await postData());
  console.log(await putData());
  console.log(await deleteData());
};

main();