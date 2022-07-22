import { Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import React, { FC } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '30%',
    height: 'auto',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.dark,
  },
}));

const LogOutMessage: FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
          ToDo App
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
          You Are Loged Out, Please Login First
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LogOutMessage;
