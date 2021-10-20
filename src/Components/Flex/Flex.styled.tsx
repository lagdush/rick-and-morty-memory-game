import styled from 'styled-components';

type FlexProps = {
	justify?:
		| 'center'
		| 'start'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
		| 'end'
		| 'start'
		| 'flex-start'
		| 'flex-end'
		| 'left'
		| 'right';
	align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
	direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse';
	gap?: number;
};

export const Flex = styled.div<FlexProps>`
	display: flex;
	flex-direction: ${(props) => props.direction || 'row'};
	justify-content: ${(props) => props.justify || 'center'};
	align-items: ${(props) => props.align || 'center'};
	gap: ${(props) => `${props.gap}px` || '20px'};
`;
