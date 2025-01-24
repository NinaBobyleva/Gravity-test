import {Box, Flex, Label} from '@gravity-ui/uikit';

export const UserData = ({nik, userData}: {nik: string; userData: string}) => {
    return (
        <Box width={205}>
            <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}>
                <Flex>
                    <h3 className="title">{nik}</h3>
                    {/* <Text variant="header-2">{nik}</Text> */}
                    <Label className="" theme="clear">
                        Public
                    </Label>
                </Flex>
                <Box>
                    <p>{userData}</p>
                </Box>
            </Flex>
        </Box>
    );
};
