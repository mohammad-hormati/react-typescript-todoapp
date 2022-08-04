import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { FC } from 'react';

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '60%',
    backgroundColor: theme.palette.primary.dark,
    borderRadius: '10px',
    padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
  },
  inputContainer: {
    '& .MuiInputLabel-root': {
      color: theme.palette.text.primary,
      '&.Mui-focused': {
        color: '#ffffff',
      },
    },
    '& .MuiInput-root': {
      '&::before': {
        borderBottom: `1px solid ${theme.palette.text.primary}`,
      },
      '&::after': {
        borderBottom: `2px solid ${theme.palette.text.primary}`,
      },
    },
  },
}));

const TodoInput: FC = () => {
  const classes = useStyles();
  const theme = useTheme<Theme>();
  return (
    <Box className={classes.root}>
      <Stack direction="row" spacing={3} className={classes.inputContainer}>
        <TextField label="Title" variant="standard" />
        <TextField label="Description" variant="standard" />
      </Stack>
      <Button variant="contained">
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
