import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { FC } from 'react';
import LogOutMessage from './LogOutMessage';
import TodoComponent from './TodoComponent';

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    minHeight: 'calc(100vh - 64px)',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

type AppMainProps = {
  login: boolean;
};

const AppMain: FC<AppMainProps> = ({ login }: AppMainProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {!login && <LogOutMessage />}
      {login && <TodoComponent />}
    </Box>
  );
};

export default AppMain;
