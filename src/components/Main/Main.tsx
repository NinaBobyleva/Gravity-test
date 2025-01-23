import {AsideHeader, LogoProps, MenuItem} from '@gravity-ui/navigation';
import {Box, Container, Flex} from '@gravity-ui/uikit';
import './main.scss';
import {Header} from '../Header/Header';
import {SortSection} from '../SortSection/SortSection';

export const Main = () => {
    const logo: LogoProps = {
        text: '',
        iconSrc: './public/icons/logo.png',
        iconSize: 30,
    };
    const menu: Array<MenuItem> = [
        {
            id: '1',
            title: 'Dashboard',
            iconQa: './public/icons/search.svg',
        },
        {
            id: '2',
            title: 'Executions',
        },
        {
            id: '3',
            title: 'Workouts',
        },
        {
            id: '4',
            title: 'Programs',
            current: true,
        },
        {
            id: '5',
            title: 'Teams',
        },
        {
            id: '6',
            title: 'Players',
        },
        {
            id: '7',
            title: 'Settings',
        },
    ];

    return (
        <Container maxWidth={'xxl'}>
            <Box>
                <Flex space={6}>
                    <AsideHeader
                        className="bg"
                        logo={logo}
                        compact={false}
                        hideCollapseButton={true}
                        menuItems={menu}
                    />
                    <Box className="mainBox">
                        <Header />
                        <SortSection />
                    </Box>
                </Flex>
            </Box>
        </Container>
    );
};
