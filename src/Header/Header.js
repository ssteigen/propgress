import * as React from "react";

import "./Header.scss";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import { Toolbar } from "@mui/material";

function Menu() {
  return (
    <nav>
      <Link
        variant="button"
        color="text.primary"
        href="#"
        sx={{ my: 1, mx: 1.5 }}
      >
        Link1
      </Link>
      <Link
        variant="button"
        color="text.primary"
        href="#"
        sx={{ my: 1, mx: 1.5 }}
      >
        Link2
      </Link>
      <Link
        variant="button"
        color="text.primary"
        href="#"
        sx={{ my: 1, mx: 1.5 }}
      >
        Link3
      </Link>
    </nav>
  );
}

export default function Header() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Propgress
        </Typography>
        <Menu />
        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Button
        </Button>
      </Toolbar>
    </AppBar>
  );
}
