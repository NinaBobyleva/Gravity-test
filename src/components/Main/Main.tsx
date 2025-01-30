import {Box, Card, Container, Flex, Loader, Progress, User} from '@gravity-ui/uikit';
import './main.scss';
import {Header} from '../Header/Header';
import {SortSection} from '../SortSection/SortSection';
import {Cards} from '../Cards/Cards';
import {useEffect, useState} from 'react';
import {Pagination} from '../Pagination/Pagination';
import {MenuItem} from '../MenuItem/MenuItem';
import {menuData} from '../../menuData';
import {getPrograms} from '../../api/apiPrograms';

export type CardsData = {
    id: number;
    title: string;
    description: string;
    duration_weeks: number;
    sessions_per_week: number;
    liked: boolean;
};

export const Main = () => {
    const [isLoad, setIsLoad] = useState(false);
    const [perPage, setPerPage] = useState<number>(4);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [count, setCount] = useState(0);
    const [programs, setPrograms] = useState<CardsData[]>([]);
    const [sort, setSort] = useState<string>('');
    const [listPrograms, setListPrograms] = useState<CardsData[]>([]);
    const [isChanged, setIsChanged] = useState<CardsData | null>(null);
    const [inputSearch, setInputSearch] = useState('');
    const [errorText, setError] = useState('');

    useEffect(() => {
        const getProgramsData = async () => {
            setIsLoad(true);
            getPrograms({sort})
                .then((res) => {
                    setPrograms(res);
                    setListPrograms(res);
                    setCount(res.length);
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => {
                    setIsLoad(false);
                });
        };

        getProgramsData();
    }, [sort, isChanged]);

    useEffect(() => {
        const handleSearching = () => {
            const searchString = programs.filter((el) =>
                el.title.toLowerCase().includes(inputSearch.toLowerCase()),
            );
            if (inputSearch) {
                setListPrograms(searchString);
            } else {
                setListPrograms(programs);
            }
        };

        handleSearching();
    }, [inputSearch]);

    const style = {
        width: '196px',
        height: '760px',
        background: '#FFFFFF',
        borderColor: '#FFFFFF',
    };

    const lastProgramsIndex = currentPage * perPage;
    const firstProgramIndex = lastProgramsIndex - perPage;
    const quantityPerPage = listPrograms.slice(firstProgramIndex, lastProgramsIndex);

    return (
        <Container maxWidth={'xxl'}>
            <Box>
                <Flex space={6}>
                    <Card style={style}>
                        <img className="sideBarImg" src="./public/icons/logo.png" alt="#" />
                        {menuData.map((el) => (
                            <Box key={el.id} className="sideBarMenuItem">
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
                            avatar={<img src="./public/icons/ava.png" alt="#" />}
                            name="Priston Berg"
                            description="Coach"
                            size="m"
                        />
                    </Card>
                    <Box className="mainBox">
                        <Header
                            setInputSearch={setInputSearch}
                            setIsChanged={setIsChanged}
                            setIsLoad={setIsLoad}
                            setError={setError}
                        />
                        <SortSection setSort={setSort} />
                        {errorText ? (
                            <Flex justifyContent={'center'} className="error">
                                {errorText}
                            </Flex>
                        ) : (
                            <>
                                {isLoad ? (
                                    <Flex justifyContent={'center'} alignItems={'center'}>
                                        <Loader className="mainBoxLoad" />
                                    </Flex>
                                ) : (
                                    <>
                                        <Cards
                                            programs={quantityPerPage}
                                            setIsChanged={setIsChanged}
                                            setIsLoad={setIsLoad}
                                            setError={setError}
                                        />
                                        <Flex justifyContent={'center'} className="paginationBox">
                                            <Pagination
                                                perPage={perPage}
                                                currentPage={currentPage}
                                                setCurrentPage={setCurrentPage}
                                                setPerPage={setPerPage}
                                                count={count}
                                            />
                                        </Flex>
                                    </>
                                )}
                            </>
                        )}
                    </Box>
                </Flex>
            </Box>
        </Container>
    );
};
