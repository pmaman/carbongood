import React, { useState, forwardRef } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import Carousel from './Carousel';

// Utility function to display the right content based on the selected tab
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const PageTabs = forwardRef((props, ref) => {
  const [value, setValue] = useState(0);

  // Handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box ref={ref} sx={{ width: '100%' }}>
      {/* Tab bar */}
      <Tabs value={value} onChange={handleChange} aria-label="page tabs">
        <Tab label="What is Carbon Good?" />
        <Tab label="Why Do We Need It?" />
      </Tabs>

      {/* Tab panels for content */}
      <TabPanel value={value} index={0}>
        <Carousel />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Content for Tab Two
      </TabPanel>
    </Box>
  );
});

export default PageTabs;
