import {Box, Flex, Select} from '@gravity-ui/uikit';
import './pagination.scss';
import {createPages} from '../../utils/createPage';

type PaginationProp = {
    count: number;
    perPage: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    setPerPage: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination = ({
    perPage,
    currentPage,
    count,
    setCurrentPage,
    setPerPage,
}: PaginationProp) => {
    const pages: number[] = [];

    const pagesCount = Math.ceil(count / perPage);

    createPages({pages, pagesCount, currentPage});

    const handlePaginationSelect = (value: string[]) => {
        setPerPage(Number(value));
    };

    return (
        <Box>
            <Flex alignItems={'center'}>
                <Box width={348}>
                    <Flex alignItems={'center'} space={7}>
                        <Box>
                            <img
                                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                                className="left"
                                src="./public/icons/left.svg"
                                alt="#"
                            />
                        </Box>
                        {pages.map((page) => (
                            <span
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={currentPage === page ? 'activePage' : 'page'}
                            >
                                {page}
                            </span>
                        ))}
                        {pagesCount > 5 && currentPage <= pagesCount - 1 ? (
                            <Flex space={7}>
                                <span className="page">...</span>
                                <span onClick={() => setCurrentPage(pagesCount)} className="page">
                                    {' '}
                                    {pagesCount}
                                </span>
                            </Flex>
                        ) : (
                            ''
                        )}
                        <Box>
                            <img
                                onClick={() =>
                                    currentPage < pagesCount && setCurrentPage(currentPage + 1)
                                }
                                className="right"
                                src="./public/icons/right.svg"
                                alt="#"
                            />
                        </Box>
                    </Flex>
                </Box>
                <Box className="perPageBox">
                    <Flex alignItems={'center'}>
                        <p className="showText">Show by</p>
                        <Select
                            placeholder="20"
                            view="clear"
                            width={60}
                            options={[
                                {value: '20', content: '20'},
                                {value: '30', content: '30'},
                            ]}
                            onUpdate={handlePaginationSelect}
                        />
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};
