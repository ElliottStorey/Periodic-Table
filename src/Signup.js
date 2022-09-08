import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function Signup() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  return (
    <Card>
      <CardContent>
        <Typography variant='h4'>Signup</Typography>
        <br />
        <TextField value={username} onChange={(e) => {setUsername(e.target.value)}} label='Username' />
        <TextField value={password} onChange={(e) => {setPassword(e.target.value)}} label='Password' />
        <TextField value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} label='Confirm Password' />
      </CardContent>
      <CardActions>
        <Button>Create Account</Button>
        <Button href='/'>Back to Login</Button>
      </CardActions>
    </Card>
  );
}