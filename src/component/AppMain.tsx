import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { FC } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: 'calc(100vh - 64px)',
    backgroundColor: theme.palette.primary.main,
  },
}));

const AppMain: FC = () => {
  const classes = useStyles();
  return <Box className={classes.root}></Box>;
};

export default AppMain;
