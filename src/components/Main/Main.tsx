// import {AsideHeader, LogoProps, MenuItem} from '@gravity-ui/navigation';
import {Box, Card, Container, Flex, Progress, User} from '@gravity-ui/uikit';
import './main.scss';
import {Header} from '../Header/Header';
import {SortSection} from '../SortSection/SortSection';
import {Cards} from '../Cards/Cards';
import {useState} from 'react';
import {Pagination} from '../Pagination/Pagination';
import {MenuItem} from '../MenuItem/MenuItem';

export const Main = () => {
    const [perPage] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);
    // const logo: LogoProps = {
    //     text: '',
    //     iconSrc: './public/icons/logo.png',
    //     iconSize: 30,
    // };
    // const men = ['Dashboard', 'Executions', 'Workouts'];
    const style = {
        width: '196px',
        height: '760px',
        background: '#FFFFFF',
        borderColor: '#FFFFFF',
    };
    const menu = [
        {
            id: '1',
            title: 'Dashboard',
            img: './public/icons/home.svg',
        },
        {
            id: '2',
            title: 'Executions',
            img: './public/icons/line_chart.svg',
        },
        {
            id: '3',
            title: 'Workouts',
            img: './public/icons/stopwatch.svg',
        },
        {
            id: '4',
            title: 'Programs',
            img: './public/icons/bar_chart.svg',
        },
        {
            id: '5',
            title: 'Teams',
            img: './public/icons/users.svg',
        },
        {
            id: '6',
            title: 'Players',
            img: './public/icons/user.svg',
        },
        {
            id: '7',
            title: 'Settings',
            img: './public/icons/settings.svg',
        },
    ];

    return (
        <Container maxWidth={'xxl'}>
            <Box>
                <Flex space={6}>
                    <Card style={style} className="sideBar">
                        <img className="sideBarCard" src="./public/icons/logo.png" alt="#" />
                        {menu.map((el) => (
                            <MenuItem key={el.id} img={el.img} title={el.title} />
                        ))}
                        <Box className="sideBarProgressBox">
                            <p className="sideBarProgressTitle">Games left</p>
                            <Flex alignItems={'center'} space={1}>
                                <Progress
                                    className="sideBarProgress"
                                    size="xs"
                                    stack={[{color: '#FE5E00', value: 70}]}
                                />
                                <span className="sideBarProgressText">70/100</span>
                            </Flex>
                        </Box>
                        <User
                            className="sideBarUser"
                            avatar={{text: 'Charles Darwin', theme: 'brand'}}
                            name="Priston Berg"
                            description="Coach"
                            size="l"
                        />
                    </Card>
                    <Box className="mainBox">
                        <Header />
                        <SortSection />
                        <Cards />
                        <Flex justifyContent={'center'} className="paginationBox">
                            <Pagination
                                perPage={perPage}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                count={12000}
                            />
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Container>
    );
};
