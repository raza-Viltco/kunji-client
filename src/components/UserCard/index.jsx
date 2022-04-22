import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { teal } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

const UserCard = ({ data }) => {
  return (
    <>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: teal[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <>
            <Typography>
              <Box sx={{ fontWeight: 'bold' }}>Case No. {data.caseNumber}</Box>
            </Typography>
            <Typography>
              <Box sx={{ fontWeight: 'medium', textAlign: 'right' }}>
                {data.time}
              </Box>
            </Typography>
          </>
        }
        title={
          <Typography>
            <Box sx={{ fontWeight: 'bold' }}>{data.name}</Box>
          </Typography>
        }
        subheader={data.description}
      />
      <Divider />
    </>
  );
};

export default UserCard;
