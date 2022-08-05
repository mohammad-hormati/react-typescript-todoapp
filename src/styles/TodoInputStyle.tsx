import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useStyles = makeStyles<Theme>((theme) => ({
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
