import React, {ChangeEvent, FC, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, TextField} from "@material-ui/core";

import {IUser} from "../../../../components/user-provider";

export interface ILoginDialogProps {
  open: boolean;
  onClose: () => void;
  onLogin: (profile: IUser) => void;
}

export const LoginDialog: FC<ILoginDialogProps> = props => {
  const {open, onClose, onLogin} = props;

  const [data, setData] = useState<IUser>({name: ""});
  const [helperText, setHelperText] = useState("");

  const handleClose = () => {
    onClose();
  };

  const handleLogin = () => {
    if (!data.name) {
      setHelperText("This field is required");
      return;
    }
    onLogin(data);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogContent>
        <TextField
          name="name"
          label="Name"
          placeholder="TrejGun"
          onChange={handleChange}
          value={data.name}
          required
          helperText={helperText}
          error={!!helperText}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleLogin} color="primary" autoFocus>
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};
