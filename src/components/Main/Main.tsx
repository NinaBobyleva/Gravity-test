import {Box, Card, Container, Flex, Progress, User} from '@gravity-ui/uikit';
import './main.scss';
import {Header} from '../Header/Header';
import {SortSection} from '../SortSection/SortSection';
import {Cards} from '../Cards/Cards';
import {useEffect, useState} from 'react';
import {Pagination} from '../Pagination/Pagination';
import {MenuItem} from '../MenuItem/MenuItem';
import {menuData} from '../../menuData';
// import {getPrograms} from '../../api/apiPrograms';

export type CardsData = {
    id: number;
    title: string;
    description: string;
    duration_weeks: number;
    session_per_week: number;
    liked: boolean;
};

export const Main = () => {
    const [perPage, setPerPage] = useState<number>(20);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [count, setCount] = useState(0);
    const [programs, setPrograms] = useState<CardsData[]>([]);
    const [select, setSelect] = useState<string[]>([]);
    const [listPrograms, setListPrograms] = useState<CardsData[]>([]);
    const [inputSearch, setInputSearch] = useState('');

    const cardsData: CardsData[] = [
        {
            id: 1,
            title: 'Sarah Conor',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor doAmet minim mollit non',
            duration_weeks: 1,
            session_per_week: 3,
            liked: false,
        },
        {
            id: 2,
            title: 'Tony Stark',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor doAmet minim mollit non',
            duration_weeks: 3,
            session_per_week: 3,
            liked: true,
        },
        {
            id: 3,
            title: 'Bruce Banner',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor doAmet minim mollit non',
            duration_weeks: 7,
            session_per_week: 3,
            liked: false,
        },
        {
            id: 4,
            title: 'Pitter Parker',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor doAmet minim mollit non',
            duration_weeks: 5,
            session_per_week: 3,
            liked: false,
        },
    ];

    useEffect(() => {}, []);

    const style = {
        width: '196px',
        height: '760px',
        background: '#FFFFFF',
        borderColor: '#FFFFFF',
    };

    // useEffect(() => {
    //     const getProgramsData = async () => {
    //         getPrograms().then((res) => {
    //             // console.log(res);
    //         });
    //     };

    //     getProgramsData();
    // }, []);
    // const durationSort = cardsData.find((el) => el.duration_weeks);

    useEffect(() => {
        setPrograms(cardsData);
        setListPrograms(cardsData);
        setCount(cardsData.length);
        const handleSorting = () => {
            if (select[0] === 'New') {
                const newPrograms = programs.toSorted(
                    (a, b) => a.duration_weeks - b.duration_weeks,
                );
                setListPrograms(newPrograms);
            } else if (select[0] === 'Old') {
                const oldPrograms = programs.toSorted(
                    (a, b) => b.duration_weeks - a.duration_weeks,
                );
                setListPrograms(oldPrograms);
            }
        };

        const handleSearching = () => {
            const searchString = programs.filter((el) =>
                el.title.toLowerCase().includes(inputSearch.toLowerCase()),
            );
            if (inputSearch) {
                setListPrograms(searchString);
            } else {
                setListPrograms(cardsData);
            }
        };

        handleSearching();
        handleSorting();
    }, [select, inputSearch]);
    return (
        <Container maxWidth={'xxl'}>
            <Box>
                <Flex space={6}>
                    <Card style={style} className="sideBar">
                        <img className="sideBarCard" src="./public/icons/logo.png" alt="#" />
                        {menuData.map((el) => (
                            <Box className="sideBarMenuItem">
                                <MenuItem
                                    key={el.id}
                                    img={el.img}
                                    title={el.title}
                                    isActiveMenuItem={el.isActiveMenuItem}
                                    isMessage={el.isMessage}
                                />
                            </Box>
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
                            avatar={
                                <img
                                    className="menuItemIcon"
                                    src="./public/icons/ava.png"
                                    alt="#"
                                />
                            }
                            name="Priston Berg"
                            description="Coach"
                            size="m"
                        />
                    </Card>
                    <Box className="mainBox">
                        <Header setInputSearch={setInputSearch} />
                        <SortSection setSelect={setSelect} />
                        <Cards programs={listPrograms} />
                        <Flex justifyContent={'center'} className="paginationBox">
                            <Pagination
                                perPage={perPage}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                setPerPage={setPerPage}
                                count={count}
                            />
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Container>
    );
};
