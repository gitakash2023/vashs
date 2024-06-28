import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, IconButton, MenuItem, Button, Grid, InputAdornment,
  Snackbar, Alert
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { internshipApplicationFields } from '../../utils/applyFormFields';

const ApplicationForm = ({ open, onClose, title }) => {
  const [formData, setFormData] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e, label) => {
    setFormData({
      ...formData,
      [label]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    setOpenSnackbar(true);
    onClose();
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ backgroundColor: '#1976d2', color: 'white' }}>
          {title}
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ position: 'absolute', right: 8, top: 8, color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: '#f0f0f0', p: 2 }}>
          <Grid container spacing={2}>
            {internshipApplicationFields.map((field, index) => (
              <Grid item xs={12} key={index}>
                <TextField
                  autoFocus={index === 0}
                  margin="dense"
                  label={field.label}
                  type={field.type}
                  fullWidth
                  variant="outlined"
                  multiline={field.multiline || false}
                  rows={field.rows || 1}
                  select={field.select || false}
                  sx={{ backgroundColor: 'white' }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {field.icon}
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => handleChange(e, field.label)}
                >
                  {field.select && field.options.map((option, i) => (
                    <MenuItem key={i} value={option}>{option}</MenuItem>
                  ))}
                </TextField>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: '#f0f0f0', p: 2 }}>
          <Button onClick={onClose} color="primary" variant="contained" sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Application submitted successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ApplicationForm;
