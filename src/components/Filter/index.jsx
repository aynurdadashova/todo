import React, { useState, useEffect } from 'react'
import pt from 'prop-types'
import style from './filter.module.scss'

export const Filter = ({todos,setTodos,clearCompletedTodos,allTodos,completed,active}) => {
  const [leftTodoCount, setLeftTodoCount] = useState(0);
    useEffect(() => {
    const unCompletedTodos = todos.filter((todo) => !todo.done);
    setLeftTodoCount(unCompletedTodos.length);
  }, [todos]);

  // useEffect(() => {
  //   const unCompletedTodos = todos.filter((todo) => true);
  //   console.log(unCompletedTodos);
  // }, [todos]);

  return (
    <div className={style.filter}>
      <h3 className={style.filter__text}>{leftTodoCount} items left</h3>
      <div className={style.filter__groupBtn}>
      <button className={active ? style['filter__groupBtn__buttons--active'] : style.filter__groupBtn__buttons} onClick={allTodos}>
        All
      </button >
      <button className={style.filter__groupBtn__buttons} onClick={active}>
        Active
      </button>
      <button className={style.filter__groupBtn__buttons} onClick={completed}>
        Completed
      </button>
    </div>
    <button className={style.filter__clearBtn} onClick={clearCompletedTodos}>
    Clear Completed
    </button>
    </div>
  )
}
Filter.propTypes={
  clearCompletedTodos:pt.func.isRequired,
  allTodos:pt.func.isRequired,
  completed:pt.func.isRequired,
  active:pt.func.isRequired
}




