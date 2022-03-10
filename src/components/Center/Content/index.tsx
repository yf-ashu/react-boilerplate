import { source } from '@client/components/Center/Content/Source';
import { color } from '@client/style/color';
import styled from 'styled-components';
import React from 'react';

const ContentWrapper = styled.div`
  padding: 10px;
  font-size: 10px;
`;
const BrandName = styled.div`
  width: 25%;
  display: inline-block;
  font-weight: 900;
`;
const PostChartText = styled.div`
  text-align: right;
  font-weight: 900;
  position: absolute;
  right: 0;
  top: 0;
`;
const PostChart = styled.div<{count:number}>`
  width: ${({ count }) => `${count || 0}%`};
  height: 100%;
  display: inline-block;
  background-color: ${color.yellow};
`;
const PostChartWrapper = styled.div`
  display: inline-block;
  background-color: ${color.lightGrey};
  width: 50%;
  position: relative;
  height: 20px;
`;
const PostCount = styled.div<{count:number}>`
  flex:1;
  display: inline-block;
  text-align: right;
`;
const InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  padding:0 6px;

`;
const Divider = styled.div`
  width: 100%;
  background-color: ${color.lightGrey};
  height: 2px;
  margin-bottom: 8px;
`;

const CountWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 6px;
  box-sizing: border-box;
`;
const Content = () => (
	<ContentWrapper>
		<InfoBar>
			<div>TERMS</div>
			<div>% OF TOTAL POSTS</div>
			<div>% OF POSTS</div>
		</InfoBar>
		<Divider />
		{source.map((item) => (
			<CountWrapper>
				<BrandName>{item.name}</BrandName>
				<PostChartWrapper>
					<PostChart count={item.count} />
					<PostChartText>
						 {item.count}
						 %
					</PostChartText>
				</PostChartWrapper>

				<PostCount count={item.count}>{item.count}</PostCount>
			</CountWrapper>
		))}
	</ContentWrapper>
);
export default Content;
