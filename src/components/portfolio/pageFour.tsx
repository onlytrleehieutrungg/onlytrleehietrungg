import { Paper, Stack, styled } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function PageFour() {
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
          backgroundColor: "rgba(255, 0, 0, 0.5)", // Blue with 60% opacity
          border: "5px solid transparent",
          transform: "translate(36px, 36px)",
          p: 2,
        }}
      >
        {" "}
        <Stack direction="column" spacing={8} p={2}>
          <Stack direction="row" justifyContent="center" alignItems="center">
            {" "}
            <Typography variant="h4" fontWeight={"bold"}>
              Contact Details
            </Typography>
          </Stack>
          <Stack>
            {" "}
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
            >
              {" "}
              <Typography variant="h5" fontWeight={"bold"}>
                Trần Lê Hiếu Trung
              </Typography>
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={0.2}
            >
              <Typography variant="h6" fontWeight={"bold"}>
                Cell: (+84) 353430010
              </Typography>
              <Typography variant="h6" fontWeight={"bold"}>
                Email: trungtran2k01@gmail.com
              </Typography>
              <Typography variant="h6" fontWeight={"bold"}>
                Address: Binh Thanh, Ho Chi Minh City
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
