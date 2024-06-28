import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';


export const educationOptions = [
  'B.Tech',
  'M.Tech',
  'BCA',
  'MCA',
  'BSc in IT',
  'Any Bachelor\'s Degree',
  'Diploma (ITI)',
  'Polytechnic',
  'Others'
];

export const internshipApplicationFields = [
  { label: 'Full Name', type: 'text', icon: <AccountCircleIcon /> },
  { label: 'Email Address', type: 'email', icon: <EmailIcon /> },
  { label: 'Phone Number', type: 'text', icon: <PhoneIcon /> },
  { label: 'Education', type: 'text', select: true, options: educationOptions, icon: <SchoolIcon /> },
  { label: 'College/University', type: 'text', icon: <BusinessIcon /> },
];
