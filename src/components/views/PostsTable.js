import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import NotificationModalDelete from '../modals/NotificationModalDelete';
import NotificationModalEdit from '../modals/NotificationModalEdit';
import { Link } from 'react-router-dom';
import CustomButton from '../items/CustomButton';

const PostsTable = () => {
    const [posts, setPosts] = useState([]);
    const [postItem, setPostItem] = useState({ id: null, title: '' });
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false); 

    const handleEdit = (post) => {
      setPostItem(post);
      setShowEditModal(true);
    };

    const handleDelete = (post) => {
      setPostItem(post);
      setShowDeleteModal(true); 
    };

    useEffect(() => {
      axios.get('https://my-json-server.typicode.com/CamiloYaya-dev/prueba_tecnica_camilo_yaya/get')
        .then((response) => {
          console.log('Obtencion de datos exitosa');
          setPosts(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    return (
      <div style={{ width: '60%', margin: '0 auto' }}>
        <NotificationModalDelete
          open={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          message="¿Are you sure you want to delete this record?"
          action="delete"
          postItem={postItem}
        />
        <NotificationModalEdit
          open={showEditModal}
          onClose={() => setShowEditModal(false)}
          action="edit"
          postItem={postItem}
        />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>{post.id}</TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>
                    <CustomButton variant="outlined" color="secondary" onClick={() => handleEdit(post)} label="Edit"/>
                    <CustomButton variant="outlined" color="secondary" onClick={() => handleDelete(post)} label="Delete"/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Link to="/create">
          <CustomButton variant="contained" color="primary" label="Create Post"/>
        </Link>
      </div>
    );
};

export default PostsTable;
