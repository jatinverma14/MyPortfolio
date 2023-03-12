import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./project.scss";

export default function ActionAreaCard(props) {
  return (
    <div className="projectDesc">
      <Card sx={{ maxWidth: 345 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="160"
            image = {props.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <div className="projectName">
                {props.name}
              </div>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
              <div className="projectLink">
                <a target = "new" href={props.link}>View</a>
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
