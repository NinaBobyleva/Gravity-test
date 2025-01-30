import {Box, Flex} from '@gravity-ui/uikit';
import './menuItem.scss';

export const MenuItem = ({
    img,
    title,
    isActiveMenuItem,
    isMessage,
}: {
    img: string;
    title: string;
    isActiveMenuItem: boolean;
    isMessage: boolean;
}) => {
    return (
        <Box>
            <Flex
                className={isActiveMenuItem ? 'menuItemActive' : ''}
                alignItems={'center'}
                space={3}
            >
                <Box>
                    <img className="menuItemIcon" src={img} alt="#" />
                </Box>
                <Box className={isMessage ? 'menuItemMessage' : ''}>
                    <p className={isActiveMenuItem ? 'menuItemTitleActive' : 'menuItemTitle'}>
                        {title}
                    </p>
                </Box>
            </Flex>
        </Box>
    );
};
