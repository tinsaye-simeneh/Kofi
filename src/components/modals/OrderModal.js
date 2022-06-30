import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function OrderModal({ cofData }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button size="small" sx={{ color: "#103037" }} onClick={handleOpen}>
        Order
      </Button>

      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Box sx={{ p: 5, backgroundColor: "white", textAlign: "center" }}>
          <Typography sx={{mb:2, textDecoration: "underline" }}>
            Order Details
          </Typography>
          <Typography>Coffee Name: {cofData.name}</Typography>
          <Typography>Coffee Price: {cofData.price}</Typography>
          <Typography>Coffee Category: {cofData.category}</Typography>

          <Typography sx={{mb:2, textDecoration: "underline", mt: 3 }}>
            Contact Details
          </Typography>
          <Typography>Phone Number: {cofData.phone}</Typography>
          <Typography>Telegram: @{cofData.telegram}</Typography>
          <Button onClick={handleClose} sx={{ mt: 3 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}
