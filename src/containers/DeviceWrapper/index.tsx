import { Box, Image } from "@chakra-ui/react";
import BrowserWindow from "components/BrowserWindow";
import { DeviceContext } from "contexts/Device";
import { ShadowContext } from "contexts/Shadow";
import React from "react";
import { generateShadow } from "utils/colors";
import { BROWSER, MOBILE } from "./constants";

const DeviceWrapper = ({ image }: { image: string }) => {
  const deviceContext = React.useContext(DeviceContext)!;
  const shadowContext = React.useContext(ShadowContext)!;
  const shadow = () => generateShadow(shadowContext.shadow);
  const [imageStyles, setimageStyles] = React.useState({});

  React.useEffect(() => {
    switch (deviceContext.device) {
      case MOBILE:
        return setimageStyles({ border: "solid #111 20px", borderRadius: "2rem" });
      default:
        return setimageStyles({});
    }
  }, [deviceContext.device]);

  return (
    <Box style={{ boxShadow: shadow() }} borderRadius="2rem">
      {deviceContext.device === BROWSER && <BrowserWindow />}
      <Image src={image} width="100%" {...imageStyles} />
    </Box>
  );
};

export default DeviceWrapper;
