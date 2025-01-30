import {Box, Card, Flex} from '@gravity-ui/uikit';
import './cards.scss';
import {UserData} from '../UserData/UserData';
import {ProgressBox} from '../ProgressBox/ProgressBox';
import {LikeBox} from '../LikeBox/LikeBox';
import {CardsData} from '../Main/Main';

export const Cards = ({
    programs,
    setIsChanged,
    setIsLoad,
    setError,
}: {
    programs: CardsData[];
    setIsChanged: React.Dispatch<React.SetStateAction<CardsData | null>>;
    setIsLoad: React.Dispatch<React.SetStateAction<boolean>>;
    setError: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const style = {
        width: '1036px',
        height: '102px',
    };

    return (
        <Box className="wrapper">
            <Flex direction={'column'} space={2} width={1036} height={432}>
                {programs.map((el) => (
                    <Card
                        className="cardWrapper"
                        style={style}
                        view="clear"
                        type="container"
                        key={el.id}
                    >
                        <Flex justifyContent={'space-between'}>
                            <Box>
                                <Flex className="cardsBox">
                                    <UserData title={el.title} />
                                    <Box width={224}>
                                        <span className="cardDesk">{el.description}</span>
                                    </Box>
                                    <ProgressBox
                                        duration={el.duration_weeks}
                                        sessions={el.sessions_per_week}
                                    />
                                </Flex>
                            </Box>
                            <Box>
                                <LikeBox
                                    id={el.id}
                                    setIsChanged={setIsChanged}
                                    isLiked={el.liked}
                                    setIsLoad={setIsLoad}
                                    setError={setError}
                                />
                            </Box>
                        </Flex>
                    </Card>
                ))}
            </Flex>
        </Box>
    );
};
