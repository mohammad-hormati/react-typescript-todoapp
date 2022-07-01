import { FC } from 'react';
import './App.css';
import AppHeader from './component/AppHeader';
import AppMain from './component/AppMain';

const App: FC = () => {
  return (
    <>
      <AppHeader title="ToDo App" />
      <AppMain />
    </>
  );
};

export default App;
