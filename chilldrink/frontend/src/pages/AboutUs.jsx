
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Chip,
  styled
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';
import {
  LocalBar as LocalBarIcon,
} from '@mui/icons-material';

import 'bootstrap/dist/css/bootstrap.min.css';


// Styled Components
const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: 'white',
  padding: theme.spacing(10, 0),
  marginBottom: theme.spacing(6),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
  }
}));


function AboutUs() {

  // Timeline data
  const timelineEvents = [
    { year: '2020', event: 'Launched our signature drink collection with 50+ unique flavors' },
    { year: '2021', event: 'Expanded to 10 locations nationwide' },
    { year: '2022', event: 'Won "Best Beverage Brand" award' },
    { year: '2023', event: 'Launched eco-friendly packaging initiative' }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography 
                variant='h3'
                gutterBottom 
                fontWeight="bold"
              >
               About Us
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ opacity: 0.9, mb: 4 }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.95 }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum modi veritatis quod. Quisquam, ab? Incidunt, optio! Doloribus eos, tempora velit dicta deleniti eaque tempore omnis officiis porro, nostrum, minus quod.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>
      <Container maxWidth="md" sx={{ mb: 8 }}>
        <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
          Our Journey
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Key milestones in our story
        </Typography>
        
        <Timeline position="alternate">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <LocalBarIcon />
                </TimelineDot>
                {index < timelineEvents.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Chip 
                    label={event.year} 
                    color="primary" 
                    size="small" 
                    sx={{ mb: 1 }} 
                  />
                  <Typography variant="body1">
                    {event.event}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo incidunt earum inventore sapiente totam quibusdam maxime voluptatem quos architecto!
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quibusdam incidunt sequi aut ipsum ducimus beatae vero blanditiis quidem necessitatibus.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutUs;