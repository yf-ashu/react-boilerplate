import Header from '@client/components/Header';
import Center from '@client/components/Center';
import Footer from '@client/components/Footer';
import NavBar from '@client/components/NavBar';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width:400px;
  height: 300px;
  box-sizing: border-box;
  position: relative;
`;
const HeaderWrapper = styled.div`
	height: 40px;
`;
const CenterWrapper = styled.div`
  height: 240px;
`;
const FooterWrapper = styled.div`
  height: 30px;
`;

const Layout = () => (
	<Wrapper>
		<HeaderWrapper><Header /></HeaderWrapper>
		<CenterWrapper>

			<NavBar />
			<Center />
		</CenterWrapper>
		<FooterWrapper><Footer /></FooterWrapper>

	</Wrapper>
);
export default Layout;
