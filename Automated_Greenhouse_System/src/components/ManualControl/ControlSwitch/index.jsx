import { Grid, Stack, Typography, Slider, Paper, Switch } from "@mui/material";
import React, { useState, useEffect } from "react";

import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ShowerIcon from "@mui/icons-material/Shower";
import { deepPurple, lightBlue } from "@mui/material/colors";

import { publish } from "../../utils/adafruit";

const ControlSwitch = (props) => {
  const { device, type } = props;
  const [checked, setChecked] = useState(device.value);
  useEffect(() => {
    setChecked(device.value);
  }, [device]);

  const types = [
    {
      name: "Máy bơm",
      icon: <ShowerIcon sx={{ color: checked ? "white" : "black" }} />,
    },
    {
      name: "Đèn",
      icon: <LightbulbIcon sx={{ color: checked ? "white" : "black" }} />,
    },
  ];
  const { name, icon } = types[type];
  const handleChange = () => {
    setChecked((state) => {
      if (state === true) {
        publish(device.feed_id, "0");
      } else {
        publish(device.feed_id, "1");
      }
      return !state;
    });
  };
  return (
    <Paper
      elevation={3}
      sx={{ borderRadius: "2rem", bgcolor: checked ? deepPurple[900] : null }}
    >
      <Grid container sx={{ width: "125px", height: "125px", padding: 2 }}>
        <Grid item xs={12} sx={{}}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {icon}
            <Switch checked={checked} onChange={handleChange} />
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{}}>
          <Typography
            sx={!checked ? {} : { color: lightBlue[50] }}
          >{`${name} ${checked ? "bật" : "tắt"}`}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default ControlSwitch;
