import {Box, Flex} from '@gravity-ui/uikit';
import './progressBox.scss';

export const ProgressBox = ({duration, sessions}: {duration: number; sessions: number}) => {
    return (
        <Flex space={8} className="progressBox">
            <Box height={30}>
                <Flex alignItems={'center'} space={1}>
                    <Box>
                        <img className="progressImg" src="./icons/alarm.svg" alt="#" />
                    </Box>
                    <Box>
                        <Flex direction={'column'}>
                            <span className="progressSubtitle">Duration</span>
                            <span className="progressText">{duration} week</span>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <Box height={30}>
                <Flex alignItems={'center'} space={1}>
                    <Box>
                        <img className="progressImg" src="./icons/calendar.svg" alt="#" />
                    </Box>
                    <Box>
                        <Flex direction={'column'}>
                            <span className="progressSubtitle">Sessions</span>
                            <span className="progressText">{sessions} per/week</span>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};
