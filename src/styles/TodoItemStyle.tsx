import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useStyles = makeStyles<Theme>((theme) => ({
  listItem: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(1),
    '&:not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  },
  listItemContent: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  btns: {
    display: 'flex',
  },
}));
