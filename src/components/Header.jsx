import React from 'react'

const Header = (props) => {
  const {todos} = props
  const todosLength = todos.length

  const isTaskPlural = todosLength != 1

  const taskOrTasks = isTaskPlural? 'tasks' : 'task'
  return (
    <header>

      <h1 className='text-gradient'>You have {todosLength} open {isTaskPlural} {taskOrTasks}.</h1>
    </header>
  )
}

export default Header
