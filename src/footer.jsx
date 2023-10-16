import { Typography, Divider, Box } from "@mui/material";
export const Footer = () => {
  return (
    <Box pt={5}>
      <Divider />
      <Typography variant="subtitle2" color="grey.400" align="center" mt={1}>
        Made with love in MightyMeld
      </Typography>
    </Box>
  );
};
