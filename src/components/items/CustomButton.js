import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ variant, color, onClick, label, type }) => {
  return (
    <Button style={color === 'primary' ? { marginTop: '10px' } : { marginRight: '10px' }} variant={variant} color={color} onClick={onClick} type={type}>
      {label}
    </Button>
  );
};

export default CustomButton;
