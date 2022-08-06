import { Box } from '@mui/material';
import { FC, useState } from 'react';
import { useStyles } from '../styles/TodoComponentStyle';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoComponent: FC = () => {
  // material ui styles
  const classes = useStyles();

  // state
  const [todos, setTodos] = useState<{ title: string; description: string; confirm: boolean }[]>(
    []
  );
  return (
    <Box className={classes.root}>
      <TodoInput setTodos={setTodos} />
      <TodoList todos={todos} />
    </Box>
  );
};

export default TodoComponent;
