import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://socio-net-api.vercel.app/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Mango Inc.</Typography>
        <Typography color={medium}>mango.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Upgrade to the powerful MangoBook Pro 15" with the latest M16 chip developed my Mango. State of the art processors, all new sytles!!
        Visit the Mango Store Now
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
