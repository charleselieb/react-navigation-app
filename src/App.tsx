import Routes from 'navigation/Routes';
import Providers from 'providers/Providers';
import React, {FC} from 'react';

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
};

export default App;
