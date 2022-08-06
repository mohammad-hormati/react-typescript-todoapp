import { ChangeEvent, useState, FC, Dispatch, SetStateAction } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { useStyles } from '../styles/TodoInputStyle';

type TodoInputProps = {
  setTodos: Dispatch<SetStateAction<{ title: string; description: string; confirm: boolean }[]>>;
};

const TodoInput: FC<TodoInputProps> = ({ setTodos }: TodoInputProps) => {
  // material ui styles
  const classes = useStyles();
  const theme = useTheme<Theme>();

  // state
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  // handle onchange input
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.target.name === 'title' ? setTitle(e.target.value) : setDescription(e.target.value);
  };

  // handle onsubmit form
  const handleClick = () => {
    setTodos((prev) => [...prev, { title, description, confirm: false }]);
    setTitle('');
    setDescription('');
  };

  return (
    <Box className={classes.root}>
      <Stack direction="row" spacing={3} className={classes.inputContainer}>
        <TextField
          name="title"
          label="Title"
          variant="standard"
          value={title}
          onChange={handleOnChange}
        />
        <TextField
          name="description"
          label="Description"
          variant="standard"
          value={description}
          onChange={handleOnChange}
        />
      </Stack>
      <Button variant="contained" onClick={handleClick}>
        <Typography
          color={theme.palette.text.primary}
          variant="subtitle1"
          sx={{ fontWeight: 'bold' }}
        >
          Add Todo
        </Typography>
      </Button>
    </Box>
  );
};

export default TodoInput;
