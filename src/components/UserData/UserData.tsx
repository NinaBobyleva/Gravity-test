import {Box, Card, Flex} from '@gravity-ui/uikit';
import './userData.scss';

export const UserData = ({nik, userData}: {nik: string; userData: string}) => {
    const style = {
        width: '69px',
        height: '22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#E8E8E8',
        borderRadius: '10px',
        border: 'none',
    };
    return (
        <Box width={205} className="userDataBox">
            <Flex space={2} direction={'column'}>
                <Box height={24}>
                    <Flex alignItems={'center'} space={2}>
                        <span className="title">{nik}</span>
                        <Card className="public" style={style}>
                            Public
                        </Card>
                    </Flex>
                </Box>
                <Box height={18}>
                    <p>{userData}</p>
                </Box>
            </Flex>
        </Box>
    );
};
