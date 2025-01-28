import {Box, Flex, Icon} from '@gravity-ui/uikit';
import {Heart} from '@gravity-ui/icons';
import './likeBox.scss';
import {useState} from 'react';

export const LikeBox = () => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked((prev) => !prev);
    };
    return (
        <Flex direction={'column'} className="likeBox">
            <Box>
                <img src="./public/icons/menu.svg" alt="" />
            </Box>
            <Box onClick={handleLike}>
                <Icon
                    className="like"
                    data={Heart}
                    stroke={isLiked ? '#f73737' : ''}
                    size={22}
                ></Icon>
            </Box>
        </Flex>
    );
};

{
    /* <img src="./public/icons/heart.svg" alt="" /> */
}
