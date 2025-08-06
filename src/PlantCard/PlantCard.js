import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import "./PlantCard.scss";
import { Box, Chip } from "@mui/material";

const findLatestImageAndDate = (updates) => {
  let latestImageInfo = null;

  for (const update of updates) {
    if (
      update.image &&
      (!latestImageInfo || update.date > latestImageInfo.date)
    ) {
      latestImageInfo = {
        image: update.image,
        date: update.date,
      };
    }
  }

  return latestImageInfo;
};

export default function PlantCard({ name, updates, plantInfo }) {
  const { image: imageSrc, date: imageDate } = findLatestImageAndDate(updates);

  return (
    <Card sx={{ width: 400 }}>
      <CardMedia sx={{ height: 440 }} image={process.env.PUBLIC_URL + "/" + imageSrc} title={name}>
        <Chip label={imageDate} size="small" sx={{ borderRadius: 1 }} />
      </CardMedia>
      <CardContent>
        <Box sx={{ mb: 1 }}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="h6" color="text.secondary">
            {plantInfo.name}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {plantInfo.summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
