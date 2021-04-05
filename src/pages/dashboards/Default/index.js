import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Optiwattlogo from "../../../imgs/logo-colored.svg";
import Sdgelogo from "../../../imgs/sdge.svg";
import Leaplogo from "../../../imgs/leap_logo.png";
import Joinlogos from "../../../imgs/Vector.png";
const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffffff",
    height: "60vh",
    borderRadius: 8,
  },
  headerTitle: {
    padding: "25px 0 10px",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
  },
  sdg: {
    borderBottom: "2px solid #000000",
    maxWidth: "80%",
    margin: "auto",
    marginBottom: 35,
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#00D73F",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#00D73F",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: "''",
    },
  },
  checkboxtitle: {
    textAlign: "left",
  },
  logos: {
    maxWidth: "60%",
    margin: "auto",
  },
  logocontent: {
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    borderRadius: 8,
  },
  subHeader: {
    textAlign: "center",
    marginTop: 35,
  },
  listroot: {
    maxWidth: "70%",
    margin: "auto",
  },
  activebtn: {
    background: "#AF4BFB",
    color: "#ffffff",
    width: 130,
    borderRadius: 20,
    "&:hover": {
      background: "#AF4BFB",
    },
  },
  endcontent: {
    maxWidth: "70%",
    marginTop: 20,
    margin: "auto",
    fontSize: 12,
  },
});

const buttonData = [
  {
    name: "authorize",
  },
  {
    name: "Skip for Later",
  },
];

function Default() {
  const [active, setActive] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    setActive(0);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" className={classes.root}>
          <Typography
            component="h1"
            variant="h5"
            className={classes.headerTitle}
          >
            Select Utility
          </Typography>
          <Typography component="p" className={classes.subtitle}>
            Select your ultility provider
          </Typography>
          <Typography component="div" className={classes.sdg}>
            <Typography component="p" className={classes.checkboxtitle}>
              <Checkbox
                disableRipple
                color="default"
                checkedIcon={
                  <span className={clsx(classes.icon, classes.checkedIcon)} />
                }
                icon={<span className={classes.icon} />}
                inputProps={{ "aria-label": "decorative checkbox" }}
                defaultChecked
              />
              SDG&E
            </Typography>
          </Typography>
          <Grid container spacing={2} className={classes.logos}>
            <Grid xs={5} md={5.5} className={classes.logocontent}>
              <img
                alt="logo"
                src={Optiwattlogo}
                style={{ width: "110px", marginLeft: "20px", marginTop: "3px" }}
              />
            </Grid>
            <Grid
              xs={2}
              md={1}
              style={{ textAlign: "center", marginTop: "10px", margin: "auto" }}
            >
              <img alt="Joinlogos" src={Joinlogos} />
            </Grid>
            <Grid container xs={5} md={5.5} className={classes.logocontent}>
              <Grid xs={6} md={6}>
                <img
                  alt="Sdgelogo"
                  src={Sdgelogo}
                  width="40px"
                  style={{ marginLeft: "20px", marginTop: "5px" }}
                />
              </Grid>
              <Grid xs={6} md={6}>
                <img alt="Leaplogo" src={Leaplogo} width="50px" height="33px" />
              </Grid>
            </Grid>
          </Grid>
          <Typography component="h2" variant="h5" className={classes.subHeader}>
            Support Your Local Grid
          </Typography>
          <List component="ul" className={classes.listroot}>
            <ListItem alignItems="flex-start">
              <ListItemText primary="Help reduce CO2 and grid blackouts by delaying charging during high electricity demand" />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemText primary="Optiwatt will notify you prior to these rare events and automatically resume charging immediately afterwards" />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemText primary="You can opt-out at anytime" />
            </ListItem>
          </List>
          <Typography component="div" className={classes.listroot}>
            {buttonData.map((btn, idx) => (
              <Button
                key={idx}
                className={`
                ${active === idx ? "active" && classes.activebtn : ""} `}
                onClick={() => setActive(idx)}
              >
                {btn.name}
              </Button>
            ))}
          </Typography>
          <Typography component="p" className={classes.endcontent}>
            By clicking Authorize, Leap, our 3rd party provider, will connect to
            your ultility company meter and enable Optiwatt to support the grid.
          </Typography>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Default;
