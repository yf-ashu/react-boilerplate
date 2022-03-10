import { color } from '@client/style/color';
import styled from 'styled-components';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const socialMedia = [
	{
		name: 'twitter',
		link: 'http://twitter',
	},
	{
		name: 'facebook',
		link: 'http://facebook',
	},
	{
		name: 'instagram',
		link: 'http://instagram',
	},
	{
		name: 'youtube',
		link: 'http://youtube',
	},

];
const NavBarWrapper = styled.div<{isHidden:boolean}>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'flex')};
  background-color: ${color.grey};
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Block = styled.a<{isFocus:boolean}>`
  color: ${({ isFocus }) => (isFocus ? color.grey : color.white)};
  font-weight:900;
  padding: 2px 8px;
  cursor: pointer;
  background-color: ${({ isFocus }) => (isFocus ? color.white : 'inherit')};

  :hover{
    color: ${color.grey};
    background-color: ${color.white};
  }
`;
const BlockIcon = styled(Block)`
  padding: 5px 8px;
`;
const HiddenButton = styled.button`
  background-color: inherit;
  color: ${color.white};
  border: none;
  border-left: 1px solid;
`;
const HiddenArea = styled.div`
  position: absolute;
  right: 0;
 
`;
const NavBar = () => {
	const [focusItem, setFocusItem] = useState('ALL');
	const [isHidden, setIsHidden] = useState(false);
	return (
		<NavBarWrapper isHidden={isHidden}>
			<Block isFocus={focusItem === 'ALL'} onClick={() => setFocusItem('ALL')}>ALL</Block>
			{socialMedia.map((item) => <BlockIcon target="_blank" href={item.link} isFocus={focusItem === item.name} onClick={() => setFocusItem(item.name)}><FontAwesomeIcon icon={['fab', [item.name]]} /></BlockIcon>)}
			<HiddenArea>
				<HiddenButton onClick={() => setIsHidden(true)}>HIDE</HiddenButton>
			</HiddenArea>
		</NavBarWrapper>
	);
};
export default NavBar;
