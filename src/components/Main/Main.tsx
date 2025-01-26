import {Box, Card, Container, Flex, Progress, User} from '@gravity-ui/uikit';
import './main.scss';
import {Header} from '../Header/Header';
import {SortSection} from '../SortSection/SortSection';
import {Cards} from '../Cards/Cards';
import {useEffect, useState} from 'react';
import {Pagination} from '../Pagination/Pagination';
import {MenuItem} from '../MenuItem/MenuItem';
// import {getPrograms} from '../../api/apiPrograms';

export type CardsData = {
    id: number;
    description: string;
    duration_weeks: number;
    session_per_week: number;
    liked: boolean;
};

export const Main = () => {
    const [perPage] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [programs, setPrograms] = useState<CardsData[]>([]);
    const [select, setSelect] = useState<string[]>([]);
    const [listPrograms, setListPrograms] = useState<CardsData[]>([]);

    const cardsData: CardsData[] = [
        {
            id: 1,
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor doAmet minim mollit non',
            duration_weeks: 1,
            session_per_week: 3,
            liked: false,
        },
        {
            id: 2,
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor doAmet minim mollit non',
            duration_weeks: 3,
            session_per_week: 3,
            liked: false,
        },
        {
            id: 3,
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor doAmet minim mollit non',
            duration_weeks: 7,
            session_per_week: 3,
            liked: false,
        },
        {
            id: 4,
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor doAmet minim mollit non',
            duration_weeks: 5,
            session_per_week: 3,
            liked: false,
        },
    ];

    useEffect(() => {
        setPrograms(cardsData);
        setListPrograms(cardsData);
    }, []);

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

    // useEffect(() => {
    //     const getProgramsData = async () => {
    //         getPrograms().then((res) => {
    //             console.log(res);
    //         });
    //     };

    //     getProgramsData();
    // }, []);
    // const durationSort = cardsData.find((el) => el.duration_weeks);

    useEffect(() => {
        if (select[0] === 'New') {
            const newPrograms = programs.toSorted((a, b) => a.duration_weeks - b.duration_weeks);
            setListPrograms(newPrograms);
        } else if (select[0] === 'Old') {
            const oldPrograms = programs.toSorted((a, b) => b.duration_weeks - a.duration_weeks);
            setListPrograms(oldPrograms);
        }
    }, [select]);
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
                        <SortSection setSelect={setSelect} />
                        <Cards programs={listPrograms} />
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
