import React from 'react';
import { Dialog,   DialogContent, DialogActions, Button, TextField, Grid, MenuItem, makeStyles } from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { DialogTitle } from '@mui/material';
 
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  middleName: Yup.string().required('Last name is required'),
  lastName: Yup.string().required('Last name is required'),
  person: Yup.string().required('Person is required'),
  date: Yup.date().required('Date is required'),
  time: Yup.string().required('Time is required'),
  message: Yup.string().required('Message is required'),
});

const Reservation = ({ open, onClose }) => {

  const initialValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    person: '',
    date: '',
    time: '',
    message: '',
  };

  return (
    <Dialog open={open} onClose={onClose} style={{ color:"#F2F6F7"}}>
      <DialogTitle style={{
              fontSize: "35px",
              textAlign: "center",
              fontFamily: "'Playfair Display', serif",
              
            }}>Table Reservation</DialogTitle>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
        onClose();
      }}>
        {({ values, errors, touched, handleChange, handleBlur }) => (
      <Form>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              name="firstName"
              label="First Name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              name="middleName"
              label="Middle Name"
              value={values.middleName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.middleName && Boolean(errors.middleName)}
              helperText={touched.middleName && errors.middleName}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              name="lastName"
              label="Last Name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.lastName && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              fullWidth
              margin="normal"
            />
          </Grid>
           
          <Grid item xs={4}>
          <TextField
  name="person"
  label="Person"
  value={values.person}
  onChange={handleChange}
  onBlur={handleBlur}
  error={touched.person && Boolean(errors.person)}
  helperText={touched.person && errors.person}
  fullWidth
  margin="normal"
  select
>
  {[...Array(10)].map((_, index) => (
    <MenuItem key={index + 1} value={index + 1}>
      {index + 1}
    </MenuItem>
  ))}
</TextField>

          </Grid>
          <Grid item xs={4}>
            <TextField
              name="date"
               
              type="date"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.date && Boolean(errors.date)}
              fullWidth style={{marginTop:"32px"}}
              margin="normal"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              name="time"
               
              type="time"
              value={values.time}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.time && Boolean(errors.time)}
              fullWidth style={{marginTop:"32px"}}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="message"
              label="Message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.message && Boolean(errors.message)}
              helperText={touched.message && errors.message}
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
      <Button type="submit" style={{backgroundColor:"orange"}}>Submit</Button>

        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default Reservation;
