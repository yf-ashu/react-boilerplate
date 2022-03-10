import { color } from '@client/style/color';
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  background-color: ${color.grey};
  justify-content: center;
  position: relative;
  padding: 4px;
`;
const FooterText = styled.span`
  color: white;
  font-weight: 900;
`;

const Footer = () => (
	<FooterWrapper>
		<FooterText>FOOTER</FooterText>
	</FooterWrapper>
);
export default Footer;
