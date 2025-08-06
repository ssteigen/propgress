import * as React from "react";

import "./Footer.scss";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import HeartIcon from "@mui/icons-material/Favorite";
import { Tooltip } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © " + new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Made with{" "}
        <Tooltip title="love" placement="top">
          <HeartIcon
            fontSize="small"
            sx={{ color: "pink", verticalAlign: "text-bottom" }}
          />
        </Tooltip>{" "}
        by{" "}
        <Link
          color="inherit"
          href="https://www.linkedin.com/in/savanahsteigen/"
        >
          San
        </Link>
      </Typography>
      <Copyright />
    </Box>
  );
}
