import db from "./config"
import {collection, getDocs } from 'firebase/firestore/lite';
async function getTodo() {
    const todoListCol = collection(db, 'todolist');
    const todoListSnapshot = await getDocs(todoListCol);
    const todoList = todoListSnapshot.docs.map(doc => doc.data());
    return todoList;
  }

  let arr =await getTodo()
  


export {arr};