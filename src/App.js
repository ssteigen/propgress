import React from "react";

import "./App.scss";

import Box from "@mui/material/Box";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import PlantCard from "./PlantCard/PlantCard";
import Grid from "@mui/material/Grid";

import allPlants from "./data.json";
import userPlants from "./data-user.json";

import { v4 as uuidv4 } from "uuid";

function App() {
  const plantCards = userPlants.map(({ id, name, type, updates }) => {
    const plantInfo = allPlants.find((plant) => plant.name === type) || null;
    
    return <PlantCard key={id} name={name} updates={updates} plantInfo={plantInfo} />;
  });

  return (
    <Box
      className="App"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box className="App-body" sx={{ py: 3, px: 2 }}>
        <Grid container spacing={2}>
          {plantCards.map((plantCard) => (
            <Grid key={uuidv4()} item>
              {plantCard}
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
