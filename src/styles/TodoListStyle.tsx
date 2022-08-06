import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useStyles = makeStyles<Theme>((theme) => ({
  list: {
    width: '60%',
    backgroundColor: theme.palette.primary.dark,
    padding: `${theme.spacing(3)} ${theme.spacing(2)} !important`,
    borderRadius: theme.spacing(2),
  },
}));
