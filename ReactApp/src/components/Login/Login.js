import React, { useState } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';
import './Login.css';

const inputStyle = {
    margin: '10px',
};

const buttonStyle = {
    margin: '10px',
    backgroundColor: '#0000000',
};

const Login = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);

    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}
        style={buttonStyle}
      >
        Iniciar sesión
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div className="modal-container">
          <h2 id='inicioSec'>Iniciar sesión</h2>
          <TextField
            label="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
        <TextField
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
        />
            <Button variant="contained" onClick={handleLogin}
                style={buttonStyle}
            >
                Iniciar sesión
            </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
