import * as React from 'react';
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