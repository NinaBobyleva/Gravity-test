import {Box, Flex, Icon} from '@gravity-ui/uikit';
import {Heart} from '@gravity-ui/icons';
import './likeBox.scss';
import {addLike} from '../../api/apiPrograms';
import {CardsData} from '../Main/Main';

export const LikeBox = ({
    id,
    isLiked,
    setIsChanged,
    setIsLoad,
    setError,
}: {
    id: number;
    isLiked: boolean;
    setIsChanged: React.Dispatch<React.SetStateAction<CardsData | null>>;
    setIsLoad: React.Dispatch<React.SetStateAction<boolean>>;
    setError: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const handleLike = () => {
        addLike({id})
            .then((data) => {
                setIsChanged(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoad(false);
            });
    };
    return (
        <Flex direction={'column'} className="likeBox">
            <Box>
                <img src="./icons/menu.svg" alt="" />
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
