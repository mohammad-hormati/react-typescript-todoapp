import { Theme } from '@mui/material/styles';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';
import { FC, useState } from 'react';
import HeaderMenu from './HeaderMenu';

type AppHeaderProps = {
  title: string;
};

const AppHeader: FC<AppHeaderProps> = (props: AppHeaderProps) => {
  const [login, setLogin] = useState<boolean>(false);
  const theme = useTheme<Theme>();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.dark }}>
        <Toolbar>
          <HeaderMenu />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold', color: '#ffffff' }}
          >
            {props.title}
          </Typography>
          <Button color="inherit" onClick={(): void => setLogin(!login)}>
            <Typography sx={{ fontWeight: 'bold', color: '#ffffff' }}>
              {login ? 'Log Out' : 'Login'}
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
