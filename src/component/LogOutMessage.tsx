import { Box, Typography } from '@mui/material';
import { useStyles } from '../styles/LogOutMessageStyle';
import { FC } from 'react';
import { useTheme } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const LogOutMessage: FC = () => {
  // material ui styles
  const classes = useStyles();
  const theme = useTheme<Theme>();

  return (
    <Box className={classes.root}>
      <Typography
        variant="h5"
        color={theme.palette.text.primary}
        sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}
      >
        ToDo App
      </Typography>
      <Typography
        variant="subtitle2"
        color={theme.palette.text.primary}
        sx={{ textAlign: 'center', fontWeight: 'bold' }}
      >
        You Are Loged Out, Please Login First
      </Typography>
    </Box>
  );
};

export default LogOutMessage;
