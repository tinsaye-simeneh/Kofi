import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Typography, FormControl, Input, MenuItem, Select, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";

export default function SupplierPlatform({ setCoffee, coffee}) {
  const [cfName, setcfName] = useState("");
  const [cfPrice, setcfPrice] = useState("");
  const [cfCategory, setcfCategory] = useState("");
  const [phNumb, setPhoneNumb] = useState("");
  const [TgUsername, setTgUsername] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (e) => {
    e.preventDefault()
    const data = {
      name: cfName,
      price: cfPrice,
      category: cfCategory,
      telegram: TgUsername,
      phone: phNumb
    }
    setCoffee([...coffee, data])
    setcfName('');
    setcfCategory('')
    setcfPrice('')
    setTgUsername('')
    setPhoneNumb('')
    alert('Coffee Data successfully added')
      handleClose();
  
  }

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          backgroundColor: "white",
          color: "#103037",
          border: "none",
          display: { xs: "none", md: "flex" }
        }}
        
      >
        Supplier Platform
      </Button>

      <Typography sx={{display: { xs: "flex", md: "none" }}} onClick={handleOpen}> Supplier Platform</Typography>

      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}
      >
        <Box sx={{p:5,backgroundColor: "white", textAlign: "center"}}>
          <Typography sx={{ textDecoration: "underline", my:3 }}>
            Item Information
          </Typography>
          
          <form sx={{backgroundColor:'yellow'}} onSubmit={(e)=>handleClick(e)}>
            <div sx={{backgroundColor:'yellow'}}>
         <FormControl fullWidth sx={{ m: 1}} variant="standard">
            <Input
              required
              id="outlined-adornment-name"
              type="text"
                  placeholder="Seller Name"
                  onChange={(e)=> setcfName(e.target.value)}
            />
        </FormControl>
        <FormControl fullWidth sx={{m:1}} variant="standard">
            <Input
              required
              id="outlined-adornment-price"
              type="number"
                  placeholder="Coffee Price"
                  onChange={(e)=> {setcfPrice(e.target.value)}}
            />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, mb:2}} variant="standard">
        <InputLabel id="demo-simple-select-standard-label">Select Coffee Name</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          label="All"
          required
          id="outlined-adornment-category"
          type="text"
              placeholder="Coffee Name"
              onChange={(e) => {setcfCategory(e.target.value)}}
        >
          <MenuItem value='Arabica'>Arabica</MenuItem>
          <MenuItem value='Espresso'>Espresso</MenuItem>
          <MenuItem value='Latte'>Latte</MenuItem>
          <MenuItem value='Cappuccino'>Cappuccino</MenuItem>
          <MenuItem value='Macchiato'>Macchiato</MenuItem>
          <MenuItem value='Americano'>Americano</MenuItem>
          <MenuItem value='Irish Coffee'>Irish Coffee</MenuItem>
        </Select>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1}} variant="standard">
            <Input
              required
              id="outlined-adornment-phone"
              type="number"
                  placeholder="Phone Number"
                  onChange={(e) => {setPhoneNumb(e.target.value)}}
            />
        </FormControl>
     
        <FormControl fullWidth sx={{ m: 1}} variant="standard">
            <Input
              required
              id="outlined-adornment-telegram"
              type="text"
                  placeholder="Telegram Username"
                  onChange={(e) => {setTgUsername(e.target.value)}}
            />
        </FormControl>
        </div>
            
        <Button
            variant="contained"
            type="submit"
            sx={{
                my:2,
                width:'90%',
                color:'white',
              backgroundColor: "#103037",
            }}
              
          >
          Post
          </Button>
          </form>

          <Button onClick={handleClose} sx={{ mt: 3 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}
