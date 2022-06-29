import React, {useState} from "react";
import ContactSide from "../../assets/images/contactSide.png";
import PageContainer from "../PageContainer";
import {Box, TextField, FormControl, InputLabel, Input, Button} from '@mui/material'

const Contact = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        message:''
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const handleSubmit = (e) =>{
        e.preventDefault();
        alert('Thank you for Contacting Us. We have received your Information. we will get back to you soon.') 
    }

  return (
    <>
      <PageContainer
        Header="Contact Us"
        SideImage={ContactSide}
        Height='400'
        Content={

          <>
          <Box sx={{textAlign:'center'}}>
            <form onSubmit={handleSubmit} action='/Home'>
            <div>
         <FormControl fullWidth sx={{ m: 1,width:'90%'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-name">Full Name</InputLabel>
          <Input
            id="standard-adornment-name"
            value={values.name}
            onChange={handleChange('name')}
            required
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1,width:'90%' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-email">Email address</InputLabel>
          <Input
            id="standard-adornment-email"
            type= 'email'
            value={values.email}
            onChange={handleChange('email')}
            required
          />
        </FormControl>
        <FormControl fullWidth sx={{ mt: 2,width:'90%'}} variant="standard">
        <TextField
          id="message-input"
          label="Message"
          multiline
          rows={4}
          placeholder="Message..."
          value={values.message}
            onChange={handleChange('message')}
            required
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
          Send
          </Button>
          </form>
        </Box>
          </>

        }
      />
    </>
  );
};

export default Contact;
