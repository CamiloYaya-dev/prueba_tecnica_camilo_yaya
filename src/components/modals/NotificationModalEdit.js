import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, TextField } from '@mui/material';
import axios from 'axios';
import CustomButton from '../items/CustomButton';

const NotificationModalEdit = ({ open, onClose, postItem }) => {
  const [formData, setFormData] = useState({
    id: postItem?.id || '',
    title: postItem?.title || '',
  });
  
  useEffect(() => {
    setFormData({
      id: postItem?.id || '',
      title: postItem?.title || '',
    });
  }, [open, postItem]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { id, title } = formData;
    const postData = { id, title };

    axios
      .put(
        `https://my-json-server.typicode.com/CamiloYaya-dev/prueba_tecnica_camilo_yaya/put/${id}`,
        postData
      )
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h5" component="div">
          Edit Form
        </Typography>
        <form style={{ marginTop: '10px' }} onSubmit={handleFormSubmit}>
          <input type="hidden" name="id" value={formData.id} />
          <TextField
            id="title"
            name="title"
            label="Title"
            fullWidth
            value={formData.title}
            onChange={handleInputChange}
          />
          <CustomButton type="submit" variant="contained" color="primary" label="Save" />
        </form>
      </Box>
    </Modal>
  );
};

export default NotificationModalEdit;
