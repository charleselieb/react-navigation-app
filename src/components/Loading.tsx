import React, {FC} from 'react';
import {ActivityIndicator} from 'react-native';
import {Container} from './Container';

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
  return (
    <Container>
      <ActivityIndicator size="large" />
    </Container>
  );
};

export default Loading;
