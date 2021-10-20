import styled from 'styled-components';
import { theme } from '../../globalTheme/theme';

type ButtonProps = {
	fontSize?: keyof typeof theme.typography;
	background?: keyof typeof theme.colors;
};

export const Button = styled.button<ButtonProps>`
	padding: 10px 25px;
	margin: 20px;
	border: ${(props) => props.theme.border};
	background-color: ${(props) =>
		props.background
			? props.theme.colors[props.background]
			: props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.primary};
	font-size: ${(props) =>
		props.fontSize
			? props.theme.typography[props.fontSize]
			: props.theme.typography.md};
	border-radius: 5px;
	cursor: pointer;
	transition: 500ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

	&:hover {
		transform: scale(1.1);
	}
	&:active {
		background-color: ${(props) => props.theme.colors.primary};
		color: ${(props) => props.theme.colors.background};
	}
`;
