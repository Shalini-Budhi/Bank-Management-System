import React, { useState } from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

const emails = ["Net Banking", "Netbanking For Business", "Credit Card portal"];

export default function CustomModalPopup() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = () => {
    navigate("/login");
    handleClose();
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClick}
        style={{ background: "white", marginLeft: "9px", marginTop: "10px" }}
      >
        Open Login Options
      </Button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "right",
          horizontal: "left",
        }}
      >
        <List>
          {emails.map((email) => (
            <ListItem key={email} disablePadding>
              <ListItemButton onClick={handleNavigate}>
                <ListItemText primary={email} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Popover>
    </div>
  );
}
