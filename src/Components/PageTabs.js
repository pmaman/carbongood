import React, { useState, forwardRef } from 'react';
import { Box, Tabs, Tab, Stack, Typography } from '@mui/material';
import {MuiImg} from '../Theme.tsx'
import Carousel from './Carousel';
import carouselData from '../data/carouselData';
import TwoColumn from './TwoColumn';
import pestDamangeImage from '../Images/pestDamage.png'
import ledImage from '../Images/ledLighting.png'
import runoffImage from '../Images/runoff.png'
import droughtImage from '../Images/drought.png'
import landConversion from '../Images/convertLand.png'
import stackableModules from '../Images/stackableModules.png'

// Utility function to display the right content based on the selected tab
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      aria-label='tab-panel'
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{
        width: '100%',
        height: 'auto'
      }}
    >
      {value === index && (
        <Box>
          <Typography variant="body1">{children}</Typography>
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
    <Box ref={ref} ara-label="Page-Tabs-Container" sx={{ width: '100%', height:'auto'}}>
      {/* Tab bar */}
      <Tabs 
        value={value} 
        onChange={handleChange}
        aria-label="page-tabs"
      >
        {carouselData.map((data, index) => (
          <Tab key={index} label ={data.tabLabel} sx={{mb:'50px'}}/>
        ))}
      </Tabs>

      {carouselData.map((data, index) => (
        <TabPanel key={index} value = {value} index={index} aria-label="tab-panel">
          { index === 2 ? (
            <Stack direction="column" spacing={5} margin="100px">
              <Typography variant="h2">Transition to Renewable Energy is Insufficient</Typography>
              <Typography variant="body1">
              Global energy & heat generation emitted  a new record of over 37.4 Gt in 2023. Industry makes up a large part of our emissions, and much of that infrastructure is BUILT around fossil fuel. It can't be converted to renewable electricity readily, or in many cases at all. Even where conversion is possible, it's slow and expensive. On top of that, in many places - including highly-industrialized nations - the power grid feeding this infrastructure is inadequate for the much greater load its electrification will require, so 1000s of miles of grid ALSO need building or upgrading. That's not only expensive, but needs many, many thousands of tons of new copper, steel and everything else to be extracted and refined - itself a massive, and polluting, load on the planet. But don't forget - this is infrastructure essential to our world: cement, chemicals, pharma, clothing, food and drink... Then there's everything ELSE that we service using fossil fuels; hospitals, schools, offices, stores... CCS, electrification - and potentially hydrogen -  will help, but uptake is far below what's needed, costs are very high and infrastructure and investment remain poor. Most importantly, it will take decades to implement all that - and we don't have decades.
              </Typography>
              <Typography variant="h2">Running Out of Land</Typography>
              <Typography variant="body1">
                We've almost nowhere left to grow biomass. 40% of Earth's land surface is already used for food, and it isn't enough - millions have barely enough - or too little - to eat now. Most of the remaining 60% is either lived on, cannot be used like desert, or like forests, needs to be left alone.              
              </Typography>
              <TwoColumn 
                image={landConversion} 
                title={"Difficulty Converting Land fom Other Uses"} 
                body={"Switching anything LIKE enough land from other uses to grow the biomass amounts needed is very, very difficult. As an example, the UK's Drax biomass power plant consumes 20,000 tons of wood pellets a DAY. That's trees the UK doesn't have, so the biomass is imported from USA, Canada, Europe and Brazil. That brings a high carbon penalty just in shipping, plus the carbon footprint of logging, chipping, drying and pelleting the biomass. It's unsurprising that Drax is highly controversial."} 
                side={"left"}/>
            </Stack>
          ) : null }
          { index === 1 ? (
            <Stack direction="column" spacing={5} margin="100px">
              <Typography variant="h2">Higher CO2 Levels Increase Biomass Uptake</Typography>
              <Typography variant="body1">CarbonGood can optimize CO2 levels for maximum effect, the process should yield 30-40% improvement in CO2 uptake. That's also 30-40% faster biomass when used with an emitter.</Typography>
              <TwoColumn 
                image={pestDamangeImage} 
                title={"Hydroponics Eliminate Weed and Pest Damage"} 
                body={"hydroponics eliminates weed and pest damage - a key factor in yield loss - by  excluding them. That means no dangerous chemicals - and a further 30-40% output boost."} 
                side={"left"}
              />
              <TwoColumn 
                image={ledImage} 
                title={"LED Lighting Boosts Growing Speed by 50%"}
                body={"LED lighting boosts growing speed 50%."} 
                side={"right"}
              />
              <TwoColumn 
                image={runoffImage} 
                title={"No Pollution"} 
                body={"Nutrients are delivered where they are needed, in the right amounts. There's no mass spraying that wastes 90% of the chemicals so there's no run-off pollution. This means less toxic algal bloom in our seas and lakes, protecting marine species and securing another food source."} 
                side={"left"}
              />
              <TwoColumn 
                image={droughtImage} 
                title={"Immune To Weather and Seasonal Change"} 
                body={" it's immune to weather which in the West cuts agricultural yield by 20% - we get that back too. it has no seasons and (almost) no night - unike most agriculture, it's virtually 24/7/365. That gives us 30%+ more growing time on average."} 
                side={"right"}
              />
              <Typography variant="h2">4x More Product Per Unit Area</Typography>
              <Typography variant="h5">Stackable Modules</Typography>
              <MuiImg
                src={stackableModules}
                sx={{
                  width:'50%',
                  height:'auto',
                  objectFit: 'cover'
              }}
              />
              <Typography variant="body1">
              Adding all this together we have (1.3 x 1.5 x 1.3 x 1.2 x 1.3), we're getting around 4x more product per unit area than open field agriculture. BUT - you can also STACK CarbonGood . CarbonGoodPro will stack up to 9 units, EACH of which is itself multi-tier. So an example 4-high stack, each with 4 planted tiers, can potentially grow biomass - AND lock-up CO2 - 4 x 4 x 4 = 64X more efficiently than open field agriculture per unit area.
              </Typography>
            </Stack>
          ) : null}
          { index === 0 ? (
            <Carousel slides ={data.slides} />
          ) : null}
        </TabPanel>
      ))}

    </Box>
  );
});

export default PageTabs;
