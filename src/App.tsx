import { ThemeProvider } from 'styled-components';
import { theme } from './globalTheme/theme';
import GlobalStyles from './GlobalStyles/GlobalStyles';
import { Header } from './Components/Header/Header';
import { Flex } from './Components/Flex/Flex.styled';
import { Button } from './Components/Button/Button.styled';

const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Flex direction="column">
			<Header />
			<Flex>
				<Button>Start</Button>
				<Button background="tertiary">Restart</Button>
			</Flex>
		</Flex>
	</ThemeProvider>
);

export default App;

// TODO: create Board component
// TODO: create Points component
// TODO: create Cards component
// TODO: create Button component for New Game and Restar
// TODO: fetch data from rick and morty API
// TODO: shuffle data from API
// TODO: display images
// TODO: create flip card animation propably with react spring library
// TODO: Each Card should flip only for a certain time eg. 1000ms or less
// TODO: Only Two Cards should be visible at time
