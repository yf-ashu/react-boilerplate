import { color } from '@client/style/color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  background-color: ${color.blue};
  justify-content: center;
  position: relative;
  padding: 6px;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
`;
const HeaderText = styled.span`
  color: ${color.white};
  font-weight: 900;
`;
const QuestionIcon = styled.div`
  position: absolute;
  right: 2%;
`;
const Header = () => (
	<HeaderWrapper>
		<HeaderText>CARD</HeaderText>
		<QuestionIcon>
			<FontAwesomeIcon icon="question" color="blue" />
		</QuestionIcon>
	</HeaderWrapper>
);
export default Header;
