import { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Slider,
  Avatar,
  Chip
} from '@mui/material';
import {
  Save as SaveIcon,
  LocalBar,
  Notifications,
  AcUnit,
  WbSunny
} from '@mui/icons-material';

export default function Settings() {
  const [settings, setSettings] = useState({
    storeName: 'Chill Drinks',
    email: 'hello@chilldrinks.com',
    phone: '+91 65484 65475',
    currency: 'USD',
    timezone: 'America/New_York',
    darkMode: false,
    notifications: true,
    orderAlerts: true,
    lowStockAlerts: true,
    defaultTemperature: 4,
    icePreference: 'normal',
    autoChill: false,
  });

  const handleChange = (field) => (event) => {
    setSettings({
      ...settings,
      [field]: event.target.value
    });
  };

  const handleSwitchChange = (field) => (event) => {
    setSettings({
      ...settings,
      [field]: event.target.checked
    });
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('Settings saved:', settings);
  };


  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <LocalBar sx={{ fontSize: 32, mr: 2, color: '#00BCD4' }} />
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
          Settings
        </Typography>
      </Box>

      {/* Store Information */}
      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar sx={{ bgcolor: '#00BCD4', mr: 2 }}>
            <LocalBar />
          </Avatar>
          <Typography variant="h6">Store Information</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Store Name"
              value={settings.storeName}
              onChange={handleChange('storeName')}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              value={settings.email}
              onChange={handleChange('email')}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Phone Number"
              value={settings.phone}
              onChange={handleChange('phone')}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Currency</InputLabel>
              <Select
                value={settings.currency}
                onChange={handleChange('currency')}
                label="Currency"
              >
                <MenuItem value="USD">USD ($)</MenuItem>
                <MenuItem value="EUR">EUR (€)</MenuItem>
                <MenuItem value="GBP">GBP (£)</MenuItem>
                <MenuItem value="CAD">CAD ($)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Timezone</InputLabel>
              <Select
                value={settings.timezone}
                onChange={handleChange('timezone')}
                label="Timezone"
              >
                <MenuItem value="America/New_York">Eastern Time</MenuItem>
                <MenuItem value="America/Chicago">Central Time</MenuItem>
                <MenuItem value="America/Denver">Mountain Time</MenuItem>
                <MenuItem value="America/Los_Angeles">Pacific Time</MenuItem>
                <MenuItem value="Europe/London">London</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

     <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <LocalBar sx={{ fontSize: 32, mr: 2, color: '#00BCD4' }} />
          <Typography variant="h6">Theme</Typography>
           
        </Box>
      </Paper>

      {/* Notification Settings */}
      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Notifications sx={{ mr: 2, color: '#00BCD4' }} />
          <Typography variant="h6">Notifications</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.notifications}
                  onChange={handleSwitchChange('notifications')}
                  color="primary"
                />
              }
              label="Push Notifications"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.orderAlerts}
                  onChange={handleSwitchChange('orderAlerts')}
                  color="primary"
                />
              }
              label="New Order Alerts"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.lowStockAlerts}
                  onChange={handleSwitchChange('lowStockAlerts')}
                  color="primary"
                />
              }
              label="Low Stock Alerts"
            />
          </Grid>
        </Grid>
      </Paper>

      {/* Drink Preferences */}
      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <AcUnit sx={{ mr: 2, color: '#00BCD4' }} />
          <Typography variant="h6">Drink Preferences</Typography>
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography gutterBottom>
            Default Serving Temperature: {settings.defaultTemperature}°C
          </Typography>
          <Slider
            value={settings.defaultTemperature}
            onChange={(e, value) => setSettings({...settings, defaultTemperature: value})}
            min={1}
            max={10}
            step={1}
            marks={[
              { value: 1, label: '1°C' },
              { value: 4, label: '4°C' },
              { value: 10, label: '10°C' }
            ]}
            sx={{ color: '#00BCD4' }}
          />
        </Box>
        
        <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
          <InputLabel>Ice Preference</InputLabel>
          <Select
            value={settings.icePreference}
            onChange={handleChange('icePreference')}
            label="Ice Preference"
          >
            <MenuItem value="no-ice">No Ice</MenuItem>
            <MenuItem value="light">Light Ice</MenuItem>
            <MenuItem value="normal">Normal Ice</MenuItem>
            <MenuItem value="extra">Extra Ice</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          control={
            <Switch
              checked={settings.autoChill}
              onChange={handleSwitchChange('autoChill')}
              color="primary"
            />
          }
          label="Smart Chill Schedule"
        />
        {settings.autoChill && (
          <Box sx={{ mt: 2, p: 2, bgcolor: '#E0F7FA', borderRadius: 1 }}>
            <Chip 
              icon={<AcUnit />} 
              label="Auto-chill activated during peak hours" 
              color="primary" 
              variant="outlined"
              sx={{ mr: 1, mb: 1 }}
            />
            <Chip 
              icon={<WbSunny />} 
              label="Eco mode: 10PM - 6AM" 
              color="warning" 
              variant="outlined"
            />
          </Box>
        )}
      </Paper>

      {/* Save Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={handleSave}
          sx={{
            bgcolor: '#00BCD4',
            '&:hover': {
              bgcolor: '#0097A7'
            },
            px: 4,
            py: 1.5
          }}
        >
          Save Settings
        </Button>
      </Box>
    </Container>
  );
}