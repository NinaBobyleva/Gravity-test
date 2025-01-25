import {Box, Flex, Select} from '@gravity-ui/uikit';
import './pagination.scss';

type FilterBlockProp = {
    count: number;
    perPage: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination = ({perPage, currentPage, count, setCurrentPage}: FilterBlockProp) => {
    const pages: number[] = [];

    const pagesCount = Math.ceil(count / perPage);

    if (pagesCount > 5) {
        if (currentPage > 5) {
            for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                pages.push(i);
                if (i === pagesCount) break;
            }
        } else {
            for (let i = 1; i <= 5; i++) {
                pages.push(i);
                if (i === pagesCount) break;
            }
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    }

    return (
        <Box>
            <Flex alignItems={'center'}>
                <Box width={348}>
                    <Flex alignItems={'center'} space={7}>
                        <img className="left" src="./public/icons/left.svg" alt="#" />
                        {pages.map((page) => (
                            <span key={page} onClick={() => setCurrentPage(page)}>
                                <span className="page">{page}</span>
                            </span>
                        ))}
                        <span className="page">...</span>
                        <span className="page">10</span>
                        <img src="./public/icons/right.svg" alt="#" />
                    </Flex>
                </Box>
                <Box className="perPageBox">
                    <Flex alignItems={'center'}>
                        <p className="showText">Show by</p>
                        <Select
                            className=""
                            placeholder="20"
                            popupClassName=""
                            view="clear"
                            width={60}
                            options={[
                                {value: 'val_1', content: '20'},
                                {value: 'val_2', content: '30'},
                            ]}
                        />
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};
