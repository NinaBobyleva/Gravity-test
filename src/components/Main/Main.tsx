import {AsideHeader, LogoProps, MenuItem} from '@gravity-ui/navigation';
import {Box, Container, Flex} from '@gravity-ui/uikit';
import './main.scss';
import {Header} from '../Header/Header';
import {SortSection} from '../SortSection/SortSection';
import {Cards} from '../Cards/Cards';
import {useState} from 'react';
import {Pagination} from '../Pagination/Pagination';

export const Main = () => {
    const [perPage] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);
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

    // const [state, setState] = React.useState({page: 1, pageSize: 10});

    // const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) =>
    //     setState((prevState) => ({...prevState, page, pageSize}));

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
                        <Cards />
                        <Flex justifyContent={'center'} className="paginationBox">
                            <Pagination
                                perPage={perPage}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                count={12000}
                            />
                            {/* <Pagination item={1} size={1} className={''} /> */}
                            {/* <Pagination
                                // pageSizeOptions={[100]}
                                onUpdate={handleUpdate}
                                page={state.page}
                                pageSize={state.pageSize}
                                total={1000}
                            /> */}
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Container>
    );
};
