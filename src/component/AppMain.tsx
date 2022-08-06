import { Box } from '@mui/material';
import { FC } from 'react';
import { useStyles } from '../styles/AppmainStyle';
import LogOutMessage from './LogOutMessage';
import TodoComponent from './TodoComponent';

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
