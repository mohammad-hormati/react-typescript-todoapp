import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    width: '30%',
    height: 'fit-content',
    backgroundColor: theme.palette.primary.dark,
    marginTop: theme.spacing(2),
    borderRadius: theme.spacing(2),
    padding: `${theme.spacing(3)} 0`,
  },
}));
