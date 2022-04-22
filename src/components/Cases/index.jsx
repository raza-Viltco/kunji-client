import React from 'react';
import Grid from '@mui/material/Grid';

import UserCard from '../UserCard';
import './Cases.css';

const index = ({ title, allRecords }) => {
  return (
    <Grid container pt={4}>
      <h3>{title}</h3>
      <Grid container spacing={2} className="containerHeight">
        {allRecords.map((item) => (
          <Grid item xs={4}>
            <UserCard key={item.id} data={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default index;
