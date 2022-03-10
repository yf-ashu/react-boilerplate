import Content from '@client/components/Center/Content';
import { color } from '@client/style/color';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: scroll;
  height: 100%;
`;
const Title = styled.div`
  position: sticky;
  top: 0px;
  color: ${color.secondLightGrey};
  font-weight: 900;
  font-size: 10px;
  background-color: ${color.white};
  padding-left: 10px;

`;
const Center = () => (
	<Wrapper>
		<Title>TOP TERMS</Title>
		<Content />
	</Wrapper>
);
export default Center;
