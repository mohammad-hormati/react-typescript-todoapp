import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { FC } from 'react';
import TodoInput from './TodoInput';

const useStyles = makeStyles<Theme>((theme) => ({
  root: {},
}));
const TodoComponent: FC = () => {
  const classes = useStyles();
  return (
    <>
      <TodoInput />
    </>
  );
};

export default TodoComponent;
