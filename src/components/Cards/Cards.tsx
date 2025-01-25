import {Box, Card, Flex} from '@gravity-ui/uikit';
// import watch from './stopwatch.svg';
import './cards.scss';
import {UserData} from '../UserData/UserData';
import {ProgressBox} from '../ProgressBox/ProgressBox';
import {LikeBox} from '../LikeBox/LikeBox';

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
    };
    return (
        <Box className="wrapper">
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
                        <Flex justifyContent={'space-between'}>
                            <Box>
                                <Flex className="cardsBox">
                                    <UserData nik={el.nik} userData={el.userData} />
                                    <Box width={224}>
                                        <span className="desk">{el.description}</span>
                                    </Box>
                                    <ProgressBox duration={el.duration} sessions={el.sessions} />
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
