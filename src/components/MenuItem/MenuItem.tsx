import {Box, Flex} from '@gravity-ui/uikit';
import './menuItem.scss';

export const MenuItem = ({img, title}: {img: string; title: string}) => {
    return (
        <Flex className="menuItemBox" alignItems={'center'}>
            <Box>
                <img src={img} alt="#" />
            </Box>
            <Box>
                <p className="title">{title}</p>
            </Box>
        </Flex>
    );
};
