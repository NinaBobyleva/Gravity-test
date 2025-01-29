import {Box, Flex, Icon} from '@gravity-ui/uikit';
import {Heart} from '@gravity-ui/icons';
import './likeBox.scss';
import {addLike} from '../../api/apiPrograms';
import {CardsData} from '../Main/Main';

export const LikeBox = ({
    id,
    isLiked,
    setIsChanged,
}: {
    id: number;
    isLiked: boolean;
    setIsChanged: React.Dispatch<React.SetStateAction<CardsData | null>>;
}) => {
    const handleLike = () => {
        addLike({id}).then((data) => {
            setIsChanged(data);
        });
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
