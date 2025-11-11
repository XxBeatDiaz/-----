import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Login from "./Login";
import { fetchUser } from "../redux/thunks/loginThunk";

export default function LoginDialog() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const { username, password } = formJson;

    dispatch(fetchUser({ username, password }));

    handleClose();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContentText sx={{ marginLeft: "24px", marginTop: "16px" }}>
          To subscribe to this website, please enter your username and email
          address here.
        </DialogContentText>
        <DialogContent>
          <Login onSubmit={handleSubmit} formId={"subscription-form"} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
