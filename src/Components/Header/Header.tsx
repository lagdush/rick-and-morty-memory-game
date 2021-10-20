import { Typography } from '../Typography/Typography.styled';
import { HeaderStyled } from './Header.styled';

export const Header = () => (
	<HeaderStyled>
		<Typography as="h1" fontSize="4xl">
			Rick and Morty Memory Game
		</Typography>
	</HeaderStyled>
);
