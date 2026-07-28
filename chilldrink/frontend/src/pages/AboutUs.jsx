
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Paper,
  Divider,
  Button,
  Chip,
  useTheme,
  useMediaQuery,
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
  Group as GroupIcon,
  EmojiEvents as TrophyIcon,
  TrendingUp as TrendingUpIcon,
  LocalBar as LocalBarIcon,
  Star as StarIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
  Verified as VerifiedIcon
} from '@mui/icons-material';
// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

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

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: `linear-gradient(45deg, ${theme.palette.background.paper} 30%, ${theme.palette.primary.light}20 90%)`,
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[10],
  }
}));

const TeamCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  }
}));

const ValueCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  textAlign: 'center',
  background: theme.palette.mode === 'dark' 
    ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
    : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  borderRadius: theme.shape.borderRadius * 2,
}));

function AboutUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Team members data
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      description: 'Passionate about creating the perfect drink experience with 15+ years in the beverage industry.',
      social: {
        email: 'sarah@chilldrinks.com',
        phone: '+1 (555) 123-4567'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Head Mixologist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      description: 'Award-winning mixologist bringing innovative flavors and techniques to every drink.',
      social: {
        email: 'michael@chilldrinks.com',
        phone: '+1 (555) 234-5678'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      image: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww',
      description: 'Visual storyteller crafting the brand identity and customer experience.',
      social: {
        email: 'emily@chilldrinks.com',
        phone: '+1 (555) 345-6789'
      }
    }
  ];

  // Stats data
  const stats = [
    { icon: <LocalBarIcon sx={{ fontSize: 40 }} />, number: '500+', label: 'Drinks Served' },
    { icon: <GroupIcon sx={{ fontSize: 40 }} />, number: '10K+', label: 'Happy Customers' },
    { icon: <TrophyIcon sx={{ fontSize: 40 }} />, number: '50+', label: 'Awards Won' },
    { icon: <TrendingUpIcon sx={{ fontSize: 40 }} />, number: '99%', label: 'Satisfaction Rate' }
  ];

  // Values data
  const values = [
    {
      icon: <StarIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Quality First',
      description: 'We source only the finest ingredients and maintain rigorous quality standards in every drink we serve.'
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to create unique flavor combinations and unforgettable experiences.'
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Community',
      description: 'Building connections through shared moments and creating a welcoming space for everyone.'
    }
  ];

  // Timeline data
  const timelineEvents = [
    { year: '2018', event: 'Chill Drinks was founded with a vision to revolutionize the beverage industry' },
    { year: '2019', event: 'Opened our first flagship store in downtown' },
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
                variant={isMobile ? 'h3' : 'h2'} 
                gutterBottom 
                fontWeight="bold"
                sx={{ animation: 'fadeIn 1s ease-in' }}
              >
                Our Story
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ opacity: 0.9, mb: 4 }}>
                Crafting Exceptional Drink Experiences Since 2018
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.95 }}>
                At Chill Drinks, we're passionate about creating moments of pure refreshment 
                and joy. What started as a small family venture has grown into a beloved brand 
                known for innovative flavors and unforgettable experiences.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  sx={{ mr: 2, mb: 2 }}
                  href="#contact"
                >
                  Get In Touch
                </Button>
                <Button 
                  variant="outlined" 
                  color="inherit" 
                  size="large"
                  sx={{ mb: 2, borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
                  href="#team"
                >
                  Meet Our Team
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box 
                component="img"
                src="https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600"
                alt="Refreshing drinks"
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  boxShadow: 20,
                  animation: 'slideIn 1s ease-in'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <StatsCard elevation={3}>
                <Box sx={{ color: theme.palette.primary.main, mb: 1 }}>
                  {stat.icon}
                </Box>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {stat.number}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {stat.label}
                </Typography>
              </StatsCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Mission & Vision Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                To create exceptional beverage experiences that bring people together, 
                using only the finest ingredients and innovative techniques. We're committed 
                to sustainability, quality, and customer satisfaction in every sip.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                To become the world's most loved beverage brand, setting new standards 
                for taste, innovation, and environmental responsibility. We envision a future 
                where every drink tells a story and every customer becomes family.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Values Section with Bootstrap Grid */}
      <Box sx={{ bgcolor: 'background.default', py: 8, mb: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
            Our Core Values
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            The principles that guide everything we do
          </Typography>
          
          {/* Bootstrap Row for Values */}
          <Row>
            {values.map((value, index) => (
              <Col md={4} key={index} className="mb-4">
                <ValueCard elevation={3}>
                  <Box sx={{ mb: 2 }}>
                    {value.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom fontWeight="bold">
                    {value.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {value.description}
                  </Typography>
                </ValueCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Box>

      {/* Timeline Section */}
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

      {/* Team Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8, mb: 8 }} id="team">
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
            Meet Our Team
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            The passionate people behind Chill Drinks
          </Typography>
          
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={6} sm={6} md={4} key={index}>
                <TeamCard elevation={3} style={{width:300}}>
                  <CardMedia
                    component="img"
                    height="100"
                    image={member.image}
                    alt={member.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom fontWeight="bold">
                      {member.name}
                    </Typography>
                    <Chip 
                      icon={<LocalBarIcon />} 
                      label={member.role} 
                      color="primary" 
                      size="small" 
                      sx={{ mb: 2 }} 
                    />
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {member.description}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Button 
                        size="small" 
                        startIcon={<EmailIcon />}
                        sx={{ mr: 1, mb: 1 }}
                        variant="outlined"
                      >
                        Email
                      </Button>
                      <Button 
                        size="small" 
                        startIcon={<PhoneIcon />}
                        variant="outlined"
                      >
                        Call
                      </Button>
                    </Box>
                  </CardContent>
                </TeamCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxWidth="md" sx={{ mb: 8 }} id="contact">
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Get In Touch
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            We'd love to hear from you! Reach out to us through any of these channels.
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <LocationOnIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h6" gutterBottom>Visit Us</Typography>
                <Typography variant="body2" color="text.secondary">
                  123 Drink Street<br />
                  Beverage City, BC 12345
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <PhoneIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h6" gutterBottom>Call Us</Typography>
                <Typography variant="body2" color="text.secondary">
                  +1 (555) 123-4567<br />
                  Mon-Fri 9am-6pm
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <EmailIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h6" gutterBottom>Email Us</Typography>
                <Typography variant="body2" color="text.secondary">
                  info@chilldrinks.com<br />
                  support@chilldrinks.com
                </Typography>
              </Box>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 4 }} />
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button variant="contained" size="large">
              Send Message
            </Button>
            <Button variant="outlined" size="large">
              View Location
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </Box>
  );
}

export default AboutUs;