import styled from 'styled-components';
import { theme } from '../../globalTheme/theme';

type TypographyProps = {
	fontSize?: keyof typeof theme.typography;
	fontColor?: keyof typeof theme.colors;
};

export const Typography = styled.p<TypographyProps>`
	font-size: ${(props) =>
		props.fontSize
			? props.theme.typography[props.fontSize]
			: props.theme.typography.lg};
	color: ${(props) =>
		props.fontColor
			? props.theme.colors[props.fontColor]
			: props.theme.colors.paragraph};
`;
