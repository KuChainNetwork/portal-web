import React from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';

export const useIsMobile = () => {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  return isMobile;
};

const ResponsiveMB = (props) => {
  return (
    <MediaQuery
      maxWidth={600}
      {...props}
    />
  );
};

const ResponsivePC = (props) => {
  return (
    <MediaQuery
      minWidth={600}
      {...props}
    />
  );
};

ResponsivePC.Mobile = ResponsiveMB;

export default ResponsivePC;
