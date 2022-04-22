import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { dummyData } from './dummyData';
import Card from '../../../../../components/Card';
import Cases from '../../../../../components/Cases';

const ComplaintsData = () => {
  return (
    <Card>
      <Typography>
        <Box sx={{ fontWeight: 'bold', fontSize: 'h6.fontSize' }}>
          Complaints
        </Box>
      </Typography>
      <Cases title={'Open Cases'} allRecords={dummyData} />
      <Cases title={'Open Cases'} allRecords={dummyData} />
    </Card>
  );
};

export default ComplaintsData;
