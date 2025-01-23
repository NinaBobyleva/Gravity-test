import {Box, Button, Flex, Icon, TextInput, spacing} from '@gravity-ui/uikit';
import {Plus} from '@gravity-ui/icons';
import './header.scss';

export const Header = () => {
    return (
        <Flex width={'1036px'} justifyContent={'space-between'} alignItems={'center'}>
            <Box>
                <Flex centerContent space="6">
                    <h1 className={spacing({ml: 6})}>Programs</h1>
                    <Button view="action" size="xl">
                        <Icon data={Plus} size={18} />
                        Create
                    </Button>
                </Flex>
            </Box>
            <Box>
                <TextInput
                    className="input"
                    type="search"
                    style={{width: 280, height: 42}}
                    size="xl"
                    placeholder="Search programs"
                    leftContent={
                        <img
                            className={spacing({ml: 2, mr: 2})}
                            src="./public/icons/search.svg"
                            alt=""
                        />
                    }
                />
            </Box>
        </Flex>
    );
};
