import { FC, useState } from 'react';
import './App.css';
import AppHeader from './component/AppHeader';
import AppMain from './component/AppMain';

const App: FC = () => {
  const [login, setLogin] = useState<boolean>(false);
  return (
    <>
      <AppHeader login={login} setLogin={setLogin} />
      <AppMain login={login} />
    </>
  );
};

export default App;
