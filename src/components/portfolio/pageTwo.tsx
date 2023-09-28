import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export default function PageTwo() {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: "60%",
        backgroundColor: "transparent",
        color: "white",
        border: "5px solid transparent",
        borderImage:
          "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)",
        borderImageSlice: 1,
      }}
    >
      <Box
        sx={{ display: "flex", alignSelf: "stretch", flexDirection: "column" }}
      >
        <CardContent sx={{}}>
          <Typography component="div" variant="h3">
            Tran Le Hieu Trung
          </Typography>
          <Typography variant="subtitle1" color="white" component="div">
            With over a year of professional experience, I've had chances to
            work on real projects. I've also gained from school projects,
            competitions, and staying current with advancements, continuously
            enhancing my skills. My creativity, teamwork, and ability to
            collaborate across various roles add value to any project.
          </Typography>
        </CardContent>
      </Box>

      <img
        style={{ width: "40vh" }}
        src="trung.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}
