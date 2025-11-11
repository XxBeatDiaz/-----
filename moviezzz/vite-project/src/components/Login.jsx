import { TextField } from "@mui/material";
import Button from "@mui/material/Button"; 

export default function Login({ onSubmit, formId }) {
  return (
    <>
      <form onSubmit={onSubmit} id={formId}>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="username"
          label="Username"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </form>
    </>
  );
}
