import { List } from '@mui/material';
import { FC } from 'react';
import { useStyles } from '../styles/TodoListStyle';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: { title: string; description: string; confirm: boolean }[];
};

const TodoList: FC<TodoListProps> = ({ todos }: TodoListProps) => {
  // material ui styles
  const classes = useStyles();

  return (
    <>
      {todos.length && (
        <List className={classes.list}>
          {todos.map((todo, idx) => (
            <TodoItem todo={todo} key={idx} />
          ))}
        </List>
      )}
    </>
  );
};

export default TodoList;
