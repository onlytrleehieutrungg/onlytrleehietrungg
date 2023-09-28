import { Paper, Stack, styled } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function PageThree() {
  const theme = useTheme();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    fontWeight: "bold",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box
      sx={{
        width: 800,
        height: 500,
        backgroundImage:
          "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)",
        color: "white",
        border: "5px solid transparent",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: 800,
          height: 500,
          backgroundColor: "rgba(0, 0, 255, 0.6)", // Blue with 60% opacity
          border: "5px solid transparent",
          transform: "translate(36px, 36px)",
          p: 2,
        }}
      >
        {" "}
        <Stack direction="column" spacing={1} pl={2}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
          >
            {" "}
            <Typography variant="h4" fontWeight={"bold"}>
              Technical Skills
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            {" "}
            <Typography variant="h6" fontWeight={"bold"}>
              Programming Language
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Item>Javascript + Typescript</Item>
            <Item>C#</Item>
            <Item>Java</Item>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            {" "}
            <Typography variant="h6" fontWeight={"bold"}>
              Frontend
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Item>ReactJs</Item>
            <Item>NextJs</Item>
            <Item>Redux</Item>
            <Item>JQuery</Item>
            <Item>HTML + CSS</Item>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            {" "}
            <Typography variant="h6" fontWeight={"bold"}>
              Backend
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Item>ASP.NET</Item>
            <Item>Rest APIs</Item>
            <Item>SQL Server</Item>
            <Item>mySQL</Item>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            {" "}
            <Typography variant="h6" fontWeight={"bold"}>
              Others
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Item>Agile</Item>
            <Item>Scrum</Item>
            <Item>Figma(UX/UI)</Item>
            <Item>Vercel</Item>
            <Item>Firebase</Item>
            <Item>Git</Item>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
