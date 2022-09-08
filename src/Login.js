import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <Card>
      <CardContent>
        <Typography variant='h4'>Login</Typography>
        <br />
        <TextField value={username} onChange={(e) => {setUsername(e.target.value)}} label='Username' />
        <TextField value={password} onChange={(e) => {setPassword(e.target.value)}} label='Password' type='password' />
      </CardContent>
      <CardActions>
        <Button href='/table'>Login</Button>
        <Button href='/signup'>Create Account</Button>
      </CardActions>
    </Card>
  );
}