import { useDispatch } from 'react-redux';

import { Button } from '@mui/material';

import { logOut } from '../../redux/slices/login';

export default function LogOut() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return <Button variant='contained' color='error' onClick={handleLogout}>Logout</Button>;
}

