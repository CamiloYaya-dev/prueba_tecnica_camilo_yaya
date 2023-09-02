import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import axios from 'axios';
import CustomButton from '../items/CustomButton';

const NotificationModalDelete = ({ open, onClose, message, postItem }) => {
  const handleDelete = () => {
    axios
      .delete(`https://my-json-server.typicode.com/CamiloYaya-dev/prueba_tecnica_camilo_yaya/delete/${postItem.id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log('Eliminación exitosa');
          onClose();
        }
      })
      .catch((error) => {
        console.error('Error al eliminar:', error);
      });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Typography variant="h5" component="div">
          Delete
        </Typography>
          <div>
            <Typography>{message}</Typography>
            <div style={{ marginTop: '10px' }}>
              <CustomButton variant="contained" color="secondary" onClick={handleDelete} label="Confirm"/>
              <CustomButton onClick={onClose} variant="outlined" color="secondary" label="Close"/>
            </div>
          </div>
      </Box>
    </Modal>
  );
};

export default NotificationModalDelete;
