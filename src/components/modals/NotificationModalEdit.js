import React from 'react';
import { Modal, Box, Typography, TextField } from '@mui/material';
import axios from 'axios';
import CustomButton from '../items/CustomButton';

const NotificationModalEdit = ({ open, onClose, postItem }) => {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const id = formData.get('id');
        const title = formData.get('title');
        const postData = { id, title };
        axios.put(`https://my-json-server.typicode.com/CamiloYaya-dev/prueba_tecnica_camilo_yaya/put/${id}`, postData)
          .then((response) => {
            if (response.status === 200) {
              console.log('Edición exitosa');
              onClose();
            }
          })
          .catch((error) => {
            console.error('Error al editar:', error);
          });
      };
      

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Typography variant="h5" component="div">
          Edit Form
        </Typography>
        <form style={{ marginTop: '10px' }} onSubmit={handleFormSubmit}>
          <input type="hidden" name="id" value={postItem?.id || ''} />
          <TextField
            id="title"
            name="title"
            label="Title"
            fullWidth
            value={postItem?.title || ''}
          />
          <CustomButton type="submit" variant="contained" color="primary" label="Save"/>
        </form>
      </Box>
    </Modal>
  );
};

export default NotificationModalEdit;
