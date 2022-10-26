import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignIn(props) {
  const { setIsLoggedIn } = props;
  const [errorMessage, setErrorMessage] = React.useState('');
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword')
    };
    const { data } = await axios.post("http://localhost:3000/login", form);
    if (data.status === parseInt('401')) {
      setErrorMessage(data.response);
    } else {
      localStorage.setItem('token', data.token);
      setIsLoggedIn(true);
      navigate('/');
    }

  };
}