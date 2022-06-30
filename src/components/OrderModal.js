
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Typography} from '@mui/material'
import Button from '@mui/material/Button';

export default function OrderModal({coffeeData}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
     <Button size="small" href='' color="primary" onClick={handleOpen}>
            Order
          </Button>
  
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{display:'flex',alignItems:'center',justifyContent:'center'}}
      >
        <Box sx={{p:5,backgroundColor:'yellow',textAlign:'center'}}>
            <Typography sx={{textDecoration:'underline'}}>Order Details</Typography>
            <Typography>Coffee Name: {coffeeData.name}</Typography>
            <Typography>Coffee Price: {coffeeData.price}</Typography>
            <Typography>Coffee Category: {coffeeData.category}</Typography>

            <Typography sx={{textDecoration:'underline', mt:3}}>Contact Details</Typography>
            <Typography>Phone Number: {coffeeData.phone}</Typography>
            <Typography>Telegram: @{coffeeData.telegram}</Typography>
        <Button onClick={handleClose} sx={{mt:3}}> 
        Close
        </Button>
        </Box>
      </Modal>
      </>
  );
}