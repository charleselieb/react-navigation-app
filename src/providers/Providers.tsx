import React, {FC} from 'react';
import AuthProvider from './AuthProvider';

interface ProvidersProps {}

const Providers: FC<ProvidersProps> = ({children}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
