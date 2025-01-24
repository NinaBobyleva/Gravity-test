import {Box, Card, Flex} from '@gravity-ui/uikit';
// import watch from './stopwatch.svg';
import './cards.scss';
import {UserData} from '../UserData/UserData';

export const Cards = () => {
    const dataCards = [
        {
            id: 1,
            nik: 'Attentive Iguana',
            title: 'Public',
            userData: 'Ashley Addams, 12.23.2020',
            date: '',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor doAmet minim mollit non',
            duration: '3 week',
            sessions: '3 per/week',
            isLiked: false,
        },
        {
            id: 3,
            nik: 'Attentive Iguana',
            title: 'Public',
            userData: 'Ashley Addams, 12.23.2020',
            date: '',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor doAmet minim mollit non',
            duration: '3 week',
            sessions: '3 per/week',
            isLiked: false,
        },
        {
            id: 3,
            nik: 'Attentive Iguana',
            title: 'Public',
            userData: 'Ashley Addams, 12.23.2020',
            date: '',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor doAmet minim mollit non',
            duration: '3 week',
            sessions: '3 per/week',
            isLiked: false,
        },
        {
            id: 4,
            nik: 'Attentive Iguana',
            title: 'Public',
            userData: 'Ashley Addams, 12.23.2020',
            date: '',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor doAmet minim mollit non',
            duration: '3 week',
            sessions: '3 per/week',
            isLiked: false,
        },
    ];

    const style = {
        width: '1036px',
        height: '102px',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
    };
    return (
        <Box className="cardsBox">
            <Flex direction={'column'} space={2}>
                {dataCards.map((el) => (
                    <Card
                        content={el.nik}
                        className="card"
                        style={style}
                        view="clear"
                        type="container"
                        key={el.id}
                    >
                        <Box>
                            <Flex alignItems={'center'}>
                                <Box>
                                    <Flex justifyContent={'center'} alignItems={'center'} space={2}>
                                        <UserData nik={el.nik} userData={el.userData} />
                                        <Box width={224}>
                                            {/* <Text
                                                variant="body-1"
                                                whiteSpace={'break-spaces'}
                                                color="hint"
                                            >
                                                {el.description}
                                            </Text> */}
                                        </Box>
                                        <Box>
                                            <p>Duration</p>
                                            <img src="./public/icons/alarm.svg" alt="" />
                                            <p>{el.duration}</p>
                                        </Box>
                                        <Box>
                                            <p>Sessions</p>
                                            <img src="./public/icons/calendar.svg" alt="" />
                                            <p>{el.sessions}</p>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box className="p" width={25}>
                                    {/* <Text>Lorem, ipsum dolor.</Text> */}
                                </Box>
                            </Flex>
                        </Box>
                    </Card>
                ))}
            </Flex>
        </Box>
    );
};
