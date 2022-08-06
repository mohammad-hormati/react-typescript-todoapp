import { Theme } from '@mui/material/styles';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';
import { FC } from 'react';
import HeaderMenu from './HeaderMenu';

type AppHeaderProps = {
  login: boolean;
  setLogin: (login: boolean) => void;
};

const AppHeader: FC<AppHeaderProps> = ({ login, setLogin }: AppHeaderProps) => {
  const theme = useTheme<Theme>();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.dark }}>
        <Toolbar>
          <HeaderMenu />
          <Typography
            variant="h6"
            component="div"
            color={theme.palette.text.primary}
            sx={{ flexGrow: 1, fontWeight: 'bold' }}
          >
            ToDo App
          </Typography>
          <Button color="inherit" onClick={(): void => setLogin(!login)}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
              {login ? 'Log Out' : 'Login'}
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
