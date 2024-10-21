import React from "react";
import { Container } from "@mui/system";
import { Box, Grid } from "@mui/material";
import { getEnv } from "../theme/setThemeColor";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LandingPageBuildSecurity = () => {
  return (
    <Grid
      container
      xs={12}
      className="builSecurity_bg"
      sx={{ backgroundColor: "#f4f4f4", p: 4 }}
    >
      <Container maxWidth="lg">
        <Box
          className="landing-bg_main_font"
          sx={{
            textAlign: "center",
            fontSize: { lg: "3rem", sm: "2.5rem", xs: "2rem" },
            fontWeight: "700",
            color: "#fc4a1a",
            mb: 2,
            animation: `${fadeIn} 1s`,
          }}
        >
          Built With Security In Mind
        </Box>
        <Box
          className="landingPageSubHeading"
          sx={{
            textAlign: "center",
            fontSize: { lg: "1.5rem", sm: "1.2rem", xs: "1rem" },
            mb: 4,
            color: "#333",
            animation: `${fadeIn} 1s`,
          }}
        >
          We provide services that are safe, secure, and compliant.
        </Box>

        <Grid container spacing={4}>
          {["Safe", "Secure", "Compliant"].map((item, index) => (
            <Grid item md={12} key={index} sx={{ animation: `${fadeIn} 1s` }}>
              <Box
                component="div"
                sx={{
                  fontSize: {
                    lg: "4rem",
                    md: "3rem",
                    sm: "2.5rem",
                    xs: "2rem",
                  },
                  fontWeight: "700",
                  display: "flex",
                  justifyContent: index % 2 === 0 ? "left" : "flex-end",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <span style={{ color: "#fc4a1a", marginRight: "10px" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="landing-bg_main_font">{item}</span>
              </Box>
              <Box
                sx={{
                  textAlign: "justify",
                  display: "flex",
                  marginLeft: {
                    lg: "8rem",
                    md: "8rem",
                    sm: "0rem",
                    xs: "0rem",
                  },
                  width: {
                    lg: "40%",
                    md: "40%",
                    sm: "100%",
                    xs: "100%",
                  },
                  justifyContent: index === 1 ? "flex-end" : "flex-start", // Align right for "Secure"
                }}
              >
                <span
                  className="landing-bg_para"
                  style={{
                    color: "#555",
<<<<<<< HEAD
                    textAlign: index === 1 ? "right" : "left",
                    width: index === 1 ? "100%" : "auto", // Ensure full width for right alignment
=======
>>>>>>> 25a34486f9515e9c8ce47a5729e547fb9811041c
                  }}
                >
                  {index === 0 &&
                    "We ensure you get a good night’s sleep with your money staying with large and highly stable banks in India."}
                  {index === 1 &&
                    "Enjoy secure access to your account with 2-factor authentication and TLS/SSL encryption of your data."}
                  {index === 2 &&
                    `${getEnv()} complies with the same set of strict security standards as traditional banks in India follow.`}
                </span>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
};

export default LandingPageBuildSecurity;
