import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';
import Header from './Components/Header';
import { MemoryRouter } from 'react-router-dom';
import GamertagBox from './Components/GamertagBox';
import Maps from './Components/Maps';
import News from './Components/News';
import Weapons from './Components/Weapons';
import WelcomeMessage from './Components/WelcomeMessage';
import Home from './Pages/Home';
import Stats from './Components/Stats';
import StatsPage from './Pages/StatsPage';


// Render tests for every component 

test('renders the landing page', () => {
    render(<App />);
});

test('renders the home page', () => {
    render(<MemoryRouter><Home /></MemoryRouter>);
});

test('renders the statspage page', () => {
    render(<MemoryRouter><StatsPage /></MemoryRouter>);
});

test('renders the stats component', () => {
    render(<MemoryRouter><Stats /></MemoryRouter>);
});



// Header component Tests 
describe('Header Component', () => {
    test('renders the header component', () => {
        render(<MemoryRouter><Header /></MemoryRouter>);
        const headerElement = screen.getByTestId('header');
        expect(headerElement).toBeInTheDocument();
    });

    test('contains the expected title', () => {
        render(<MemoryRouter><Header /></MemoryRouter>);
        const titleElement = screen.getByText('Halo Helper: Stats and Guide');
        expect(titleElement).toBeInTheDocument();
    });


});

test('renders the maps component', () => {
    render(<MemoryRouter><Maps /></MemoryRouter>);
});


// GamertagBox component tests
describe('GamertagBox Component', () => {
    test('renders the GamertagBox component', () => {
        render(<MemoryRouter><GamertagBox /></MemoryRouter>);
        const gamertagElement = screen.getByTestId('gt-box');
        expect(gamertagElement).toBeInTheDocument();
    });

    test('component has correct label', () => {
        render(<MemoryRouter><GamertagBox /></MemoryRouter>);
        const gamertagLabel = screen.getByTestId('box-label');
        expect(gamertagLabel).toBeInTheDocument();
        expect(gamertagLabel).toHaveTextContent('Enter Xbox Live Gamertag:');
    })

    test('input field updates value correctly', () => {
        render(<MemoryRouter><GamertagBox /></MemoryRouter>);
        const inputElement = screen.getByPlaceholderText('Type your gamertag here...');
        fireEvent.change(inputElement, { target: { value: 'exampleGamertag' } });
        expect(inputElement.value).toBe('exampleGamertag');
    });

    test('renders search button with correct text', () => {
        render(<MemoryRouter><GamertagBox /></MemoryRouter>);
        const searchButton = screen.getByText('Search');
        expect(searchButton).toBeInTheDocument();
    });

    test('calls onSearch function when search button is clicked with non-empty gamertag', async () => {
        const onSearchMock = jest.fn();
        render(<MemoryRouter> <GamertagBox onSearch={onSearchMock} /></MemoryRouter>);
        const inputElement = screen.getByPlaceholderText('Type your gamertag here...');
        fireEvent.change(inputElement, { target: { value: 'exampleGamertag' } });

        await act(async () => {
            const searchButton = screen.getByText('Search');
            fireEvent.click(searchButton);
        });

        expect(onSearchMock).toHaveBeenCalledWith('exampleGamertag');
    });

    test('does not call onSearch function when search button is clicked with empty gamertag', () => {
        const onSearchMock = jest.fn();
        render(<MemoryRouter> <GamertagBox onSearch={onSearchMock} /></MemoryRouter>);
        const searchButton = screen.getByText('Search');
        fireEvent.click(searchButton);
        expect(onSearchMock).not.toHaveBeenCalled();
    });

});

//News Component Tests 
describe('News Component', () => {
    test('renders the News component', () => {
        render(<MemoryRouter><News /></MemoryRouter>);
        const newsElement = screen.getByTestId('news-block');
        expect(newsElement).toBeInTheDocument();
    });

    test('contains expected title', () => {
        render(<MemoryRouter><News /></MemoryRouter>);
        const titleElement = screen.getByTestId('latest-title');
        expect(titleElement).toBeInTheDocument();
    })

    test('renders firefight refresh image properly', () => {
        render(<MemoryRouter><News /></MemoryRouter>);
        const firstImage = screen.getByAltText('Firefight battle');
        expect(firstImage).toBeInTheDocument();
        expect(firstImage).toHaveAttribute('src', '/assets/images/firefight-refresh.jpg');
    });

    test('renders btb refresh image properly', () => {
        render(<MemoryRouter><News /></MemoryRouter>);
        const firstImage = screen.getByAltText('Banshee parked on the battlefield');
        expect(firstImage).toBeInTheDocument();
        expect(firstImage).toHaveAttribute('src', '/assets/images/article1-image.jpg');
    });

    test('renders tv series image properly', () => {
        render(<MemoryRouter><News /></MemoryRouter>);
        const firstImage = screen.getByAltText('Silver team');
        expect(firstImage).toBeInTheDocument();
        expect(firstImage).toHaveAttribute('src', '/assets/images/article2.jpg');
    });

    test('renders spirit of fire image properly', () => {
        render(<MemoryRouter><News /></MemoryRouter>);
        const firstImage = screen.getByAltText('Spartans in Mark IV armor');
        expect(firstImage).toBeInTheDocument();
        expect(firstImage).toHaveAttribute('src', '/assets/images/article 3.jpg');
    });

    test('renders titles of news articles correctly', () => {
        render(<MemoryRouter><News /></MemoryRouter>);

        const titles = screen.getAllByRole('heading', { level: 3 });
        expect(titles).toHaveLength(4);
        expect(titles[0]).toHaveTextContent('Firefight: King of the Hill Refresh | Halo Infinte');
        expect(titles[1]).toHaveTextContent('BTB Refresh | Halo Infinite');
        expect(titles[2]).toHaveTextContent('Halo: Television Series | Season 2 Launch');
        expect(titles[3]).toHaveTextContent('Spirit of Fire Launch | Halo Infinite CU29');
    });

    test('anchor links open in a new tab', () => {
        render(<News />);

        const anchorElements = screen.getAllByRole('link');

        anchorElements.forEach((anchorElement) => {
            expect(anchorElement).toHaveAttribute('target', '_blank');
            expect(anchorElement).toHaveAttribute('rel', 'noopener noreferrer');
        });


    });
});

test('renders the weapons component', () => {
    render(<MemoryRouter><Weapons /></MemoryRouter>);
});


//Test for welcomeMessage Component 
describe('WelcomeMessage Component', () => {
    test('renders the welcomeMessage component', () => {
        render(<MemoryRouter><WelcomeMessage /></MemoryRouter>);

    });

    test('displays correct welcome message', () => {
        render(<MemoryRouter><WelcomeMessage /></MemoryRouter>);
        const welcomeMessage = screen.getByText(/Hello, and welcome to Halo Helper!/i);
        expect(welcomeMessage).toBeInTheDocument();
    });

    test('contains link to player stats page', () => {
        render(<MemoryRouter><WelcomeMessage /></MemoryRouter>);
        const playerStatsLink = screen.getByRole('link', { name: /View Player Stats/i });
        expect(playerStatsLink).toBeInTheDocument();
        expect(playerStatsLink.getAttribute('href')).toBe('/stats/Mint Blitz');
    });


    test('navigates to player stats page when link is clicked', () => {
        const historyMock = { push: jest.fn() }; // Mock the push method of history

        render(<MemoryRouter history={historyMock}><WelcomeMessage /></MemoryRouter>);

        const playerStatsLink = screen.getByRole('link', { name: /View Player Stats/i });
        fireEvent.click(playerStatsLink);

        expect(historyMock.push).toHaveBeenCalledWith('/stats/Mint Blitz'); // Verify the navigation
    });
});






