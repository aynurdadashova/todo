import { find, cloneDeep, map, filter, uniqueId } from "lodash";
import { useState } from "react";
import { TodoItem } from "./components";
import { Filter } from "./components/Filter";
import { TodoCreate } from "./components/TodoCreate";
const initialTodos=[
  {
    id: uniqueId(),
    title: 'salam',
    done: true,
  },
  {
    id: uniqueId(),
    title: 'sag ol',
    done: false,
  },
  {
    id: uniqueId(),
    title: 'sag olma',
    done: false,
  },
]
function App() {
  const[todos, setTodos]=useState(initialTodos);

  const toggle=(id)=>{
    setTodos((prev)=>{
      const clone=cloneDeep(prev)
      const found=find(clone, (t)=>t.id===id);
      if(found) found.done=! found.done
      return clone;
    })
  }
  const remove=(id)=>{
    setTodos((prev)=>{
      const clone=cloneDeep(prev);
      const filtered=filter(clone, (t)=>t.id!==id)
      return filtered
    })
  }
  const add=(title, done)=>{
    setTodos((prev)=>{
      const newTodo={
        id: uniqueId(),
				title: title,
				done: done,
      }
      return [...prev, newTodo]
    })

  }
  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };
  const allTodos=()=>{
    setTodos((prev)=>{
      const clone=cloneDeep(prev);
      const filtered=filter(clone, (t)=>true)
      return filtered
    })
  }

  // const allTodos = () => {
  //   setTodos(todos.filter(todo => true));
  // };


  // const allTodos = () => {
  //   setTodos(todos);
  //   // console.log(todos)
  // };

  const completed=()=>{
    setTodos((prev)=>{
      const clone=cloneDeep(prev);
      const filtered=filter(clone, (t)=>t.done===true)
      return filtered
    })
  }

  // const completed = () => {
  //   setTodos(todos.filter(todo => todo.done===true));
  // };
  const active=()=>{
    setTodos((prev)=>{
      const clone=cloneDeep(prev);
      const filtered=filter(clone, (t)=>t.done===false)
      return filtered
    })
  }

  // const active = () => {
  //   setTodos(todos.filter(todo => todo.done===false));
  // };

  return (
    <div className="app">
      <div className="container">
      <header>
      <h1>T O D O</h1>
      <img src="/assets/icon-moon.svg" alt="icon moon" />
      </header>
      <TodoCreate add={add}/>
      {map(todos,({id,title, done})=>(
      <TodoItem
       key={id}
       title={title} 
       done={done}
       toggle={()=>toggle(id)}
       remove={()=>remove(id)}
       />
      )
      )
    }

      <Filter todos={todos}
        setTodos={setTodos}
        clearCompletedTodos={()=>{clearCompletedTodos()}}       
        allTodos={()=>{allTodos()}}       
        completed={()=>{completed()}}  
        active={()=>{active()}}     
       />
      </div>
    </div>
  );
}

export default App;

