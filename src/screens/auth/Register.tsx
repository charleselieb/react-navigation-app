import React, {FC} from 'react';
import {Text} from 'react-native';
import {Container} from 'components/Container';

interface RegisterProps {}

const Register: FC<RegisterProps> = ({}) => {
  return (
    <Container>
      <Text>Register Screen</Text>
    </Container>
  );
};

export default Register;
