import {Box, Card, Flex, spacing} from '@gravity-ui/uikit';

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
        <Box width={205} className={spacing({ml: 4})}>
            <Flex direction={'column'}>
                <Box height={30}>
                    <Flex alignItems={'center'} space={2}>
                        <h3 className="title">{nik}</h3>
                        <Card className="public" style={style}>
                            Public
                        </Card>
                    </Flex>
                </Box>
                <Box height={30}>
                    <p>{userData}</p>
                </Box>
            </Flex>
        </Box>
    );
};
