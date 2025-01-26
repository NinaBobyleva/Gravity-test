import {Box, Flex} from '@gravity-ui/uikit';
import './progressBox.scss';

export const ProgressBox = ({duration, sessions}: {duration: string; sessions: string}) => {
    return (
        <Flex space={8} className="progressBox">
            <Box height={30}>
                <Flex alignItems={'center'} space={1}>
                    <Box>
                        <img className="img" src="./public/icons/alarm.svg" alt="#" />
                    </Box>
                    <Box>
                        <Flex direction={'column'}>
                            <span className="subtitle">Duration</span>
                            <span className="text">{duration}</span>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <Box height={30}>
                <Flex alignItems={'center'} space={1}>
                    <Box>
                        <img className="img" src="./public/icons/calendar.svg" alt="#" />
                    </Box>
                    <Box>
                        <Flex direction={'column'}>
                            <span className="subtitle">Sessions</span>
                            <span className="text">{sessions}</span>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};
