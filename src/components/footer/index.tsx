import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";

import "./footer.styles.css";

type FooterProps = {
};

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      ClipShare is a product by {' '}
      <OutboundLink href="http://snapscreen.com" target="_blank">
        Snapscreen
      </OutboundLink>.
    </footer>
  );
};
