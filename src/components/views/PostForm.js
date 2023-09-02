import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Typography, TextField, Snackbar } from '@mui/material';
import axios from 'axios';
import CustomButton from '../items/CustomButton';

const PostForm = () => {
  const { register, handleSubmit } = useForm();
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const [isErrorAlertOpen, setIsErrorAlertOpen] = useState(false);

  const onSubmit = (data) => {
    axios
      .post('https://my-json-server.typicode.com/CamiloYaya-dev/prueba_tecnica_camilo_yaya/post', data)
      .then((response) => {
        if (response.status === 201) {
          console.log('Datos guardados exitosamente');
          setIsSuccessAlertOpen(true);
        } else {
          setIsErrorAlertOpen(true);
        }
      })
      .catch((error) => {
        console.error(error);
        setIsErrorAlertOpen(true);
      });
  };

  const handleSuccessAlertClose = () => {
    setIsSuccessAlertOpen(false);
  };

  const handleErrorAlertClose = () => {
    setIsErrorAlertOpen(false);
  };

  return (
    <div style={{ width: '60%', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        Create Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register('title')} label="Title" fullWidth required />
        <CustomButton type="submit" variant="contained" color="primary" label="Submit"/>
          
      </form>
      <Snackbar
        open={isSuccessAlertOpen}
        autoHideDuration={6000}
        onClose={handleSuccessAlertClose}
        message="Post created"
        sx={{ background: 'green' }}
      />
      <Snackbar
        open={isErrorAlertOpen}
        autoHideDuration={6000}
        onClose={handleErrorAlertClose}
        message="Error creating post"
        sx={{ background: 'red' }}
      />
    </div>
  );
};

export default PostForm;
