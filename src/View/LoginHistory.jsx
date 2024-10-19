import { Box, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import ApiPaginateSearch from "../component/ApiPaginateSearch";
import { ddmmyy, dateToTime } from "../utils/DateUtils";

// Icons
import LaptopIcon from "@mui/icons-material/Laptop";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import ApiEndpoints from "../network/ApiEndPoints";
import { CustomStyles } from "../component/CustomStyle";
import { android2, macintosh2, windows2, linux2 } from "../iconsImports";
import AuthContext from "../store/AuthContext";
let refresh;
const LoginHistory = () => {
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState("");
  const authCtx = useContext(AuthContext);
  const user = authCtx?.user;
  const columns = [
    {
      name: "User Id",
      selector: (row) => <>{user.establishment}</>,
      center: false,
    },
    {
      name: "Login At",
      selector: (row) => (
        <div>
          {ddmmyy(row.created_at)} {dateToTime(row.created_at)}
        </div>
      ),
    },
    {
      name: "Login Ip",
      selector: (row) => row.ip,
    },
    {
      name: "Login Device",
      selector: (row) => {
        let icon;

        if (row.device.toLowerCase().includes("windows")) {
          icon = (
            <img
              src={windows2}
              style={{ width: "23px" }}
              alt="description of image"
            />
          );
        } else if (row.device.toLowerCase().includes("android")) {
          icon = (
            <img
              src={android2}
              style={{ width: "23px" }}
              alt="description of image"
            />
          );
        } else if (row.device.toLowerCase().includes("mac")) {
          icon = (
            <img
              src={macintosh2}
              style={{ width: "23px" }}
              alt="description of image"
            />
          );
        } else if (row.device.toLowerCase().includes("linux")) {
          icon = (
            <img
              src={linux2}
              style={{ width: "23px" }}
              alt="description of image"
            />
          );
        } else {
          icon = <LaptopIcon sx={{ color: "blue", width: "23px" }} />;
        }

        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "13px",
              textAlign: "justify",
              gap: 2,
            }}
          >
            {icon}
            <Typography>{row.device}</Typography>
          </Box>
        );
      },

      width: "600px",
      wrap: true,
    },
  ];

  return (
    <Box>
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <ApiPaginateSearch
            showSearch={true}
            isFilterAllowed
            apiEnd={ApiEndpoints.GET_LOGIN_HISTORY}
            columns={columns}
            apiData={apiData}
            setApiData={setApiData}
            tableStyle={CustomStyles}
            refresh={refresh}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginHistory;
