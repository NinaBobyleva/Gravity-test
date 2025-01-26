import {Box, Card, Flex} from '@gravity-ui/uikit';
import './cards.scss';
import {UserData} from '../UserData/UserData';
import {ProgressBox} from '../ProgressBox/ProgressBox';
import {LikeBox} from '../LikeBox/LikeBox';
import {CardsData} from '../Main/Main';

export const Cards = ({programs}: {programs: CardsData[]}) => {
    const style = {
        width: '1036px',
        height: '102px',
    };

    return (
        <Box className="wrapper">
            <Flex direction={'column'} space={2}>
                {programs.map((el) => (
                    <Card className="card" style={style} view="clear" type="container" key={el.id}>
                        <Flex justifyContent={'space-between'}>
                            <Box>
                                <Flex className="cardsBox">
                                    <UserData />
                                    <Box width={224}>
                                        <span className="desk">{el.description}</span>
                                    </Box>
                                    <ProgressBox
                                        duration={el.duration_weeks}
                                        sessions={el.session_per_week}
                                    />
                                </Flex>
                            </Box>
                            <Box>
                                <LikeBox />
                            </Box>
                        </Flex>
                    </Card>
                ))}
            </Flex>
        </Box>
    );
};
