import {Box, Flex} from '@gravity-ui/uikit';
import './likeBox.scss';

export const LikeBox = () => {
    return (
        <Flex direction={'column'} className="likeBox">
            <Box>
                <img src="./public/icons/menu.svg" alt="" />
            </Box>
            <Box>
                <img src="./public/icons/heart.svg" alt="" />
            </Box>
        </Flex>
    );
};
