import { Box, Button, ListItem, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { FC } from 'react';
import { useStyles } from '../styles/TodoItemStyle';

type TodoItemProps = {
  todo: { title: string; description: string; confirm: boolean };
  key: number;
};

const TodoItem: FC<TodoItemProps> = ({ todo, key }: TodoItemProps) => {
  // material ui styles
  const classes = useStyles();
  const theme = useTheme<Theme>();

  return (
    <ListItem className={classes.listItem} key={key}>
      <Box className={classes.listItemContent}>
        <Typography variant="h5" color={theme.palette.text.primary} sx={{ fontWeight: 'bold' }}>
          {todo.title}
        </Typography>
        <Typography
          variant="subtitle2"
          color={theme.palette.text.primary}
          sx={{ fontWeight: 'bold' }}
        >
          {todo.description}
        </Typography>
      </Box>
      <Box className={classes.btns}>
        <Button variant="contained" color="secondary" sx={{ mr: 1 }}>
          <Typography sx={{ fontWeight: 'bold' }}>Done</Typography>
        </Button>
        <Button variant="contained" color="error">
          <Typography sx={{ fontWeight: 'bold' }}>Remove</Typography>
        </Button>
      </Box>
    </ListItem>
  );
};

export default TodoItem;
