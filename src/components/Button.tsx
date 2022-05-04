import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button: FC<ButtonProps> = ({text, onPress}) => {
  return (
    <StyledButton onPress={onPress}>
      <Text>{text}</Text>
    </StyledButton>
  );
};

const StyledButton = styled(TouchableOpacity)`
  padding: 10px;
`;

export {Button};
