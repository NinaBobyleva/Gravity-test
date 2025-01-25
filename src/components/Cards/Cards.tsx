import {Box, Card, Flex} from '@gravity-ui/uikit';
// import watch from './stopwatch.svg';
import './cards.scss';
import {UserData} from '../UserData/UserData';
import {ProgressBox} from '../ProgressBox/ProgressBox';

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
                        <Flex>
                            <Box>
                                <Flex space={6}>
                                    <UserData nik={el.nik} userData={el.userData} />
                                    <Box width={224}>
                                        <h3 className="desk">{el.description}</h3>
                                    </Box>
                                    <ProgressBox duration={el.duration} sessions={el.sessions} />
                                </Flex>
                            </Box>
                        </Flex>
                    </Card>
                ))}
            </Flex>
        </Box>
    );
};
