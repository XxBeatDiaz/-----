import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import Login from "./Login";
import { fetchUser } from "../../redux/thunks/loginThunk";

const loginText = "To subscribe to this website, please enter your username and password here."

export default function LoginDialog() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = (event) => {
    event.currentTarget.blur();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const { username, password } = formJson;

    dispatch(fetchUser({ username, password }));

    handleClose();
  };

  return (
    <>
      <Button variant="contained" color="success" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>

        <DialogContent>
          <DialogContentText sx={{ marginLeft: "24px", marginTop: "16px" }}>
            {loginText}
          </DialogContentText>

          <Login onSubmit={handleSubmit} formId={"subscription-form"} />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} type="submit" form="subscription-form">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
