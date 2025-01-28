import {Box, Button, Flex, Icon, Modal, TextInput, spacing} from '@gravity-ui/uikit';
import {Plus} from '@gravity-ui/icons';
import './header.scss';
import React from 'react';

export const Header = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <Flex width={'1036px'} justifyContent={'space-between'} alignItems={'center'}>
            <Box>
                <Flex centerContent space="6">
                    <h1 className={spacing({ml: 6})}>Programs</h1>
                    <Button onClick={() => setOpen(true)} view="action" size="xl">
                        <Icon data={Plus} size={18} />
                        Create
                    </Button>
                    <Modal contentClassName="modal" open={open} onClose={() => setOpen(false)}>
                        <Flex direction={'column'} alignItems={'center'} space={5}>
                            <Flex direction={'column'} space={5}>
                                <TextInput
                                    style={{width: 300}}
                                    className="modalInput"
                                    size="l"
                                    placeholder="Title"
                                />
                                <TextInput
                                    style={{width: 300}}
                                    className="modalInput"
                                    size="l"
                                    placeholder="Description"
                                />
                            </Flex>
                            <Flex space={5}>
                                <TextInput
                                    style={{width: 140}}
                                    className="modalInputSmall"
                                    size="m"
                                    placeholder="Duration"
                                />
                                <TextInput
                                    style={{width: 140}}
                                    className="modalInputSmall"
                                    size="m"
                                    placeholder="Session"
                                />
                            </Flex>
                            <Button
                                className="modalButton"
                                view="action"
                                size="l"
                                onClick={() => setOpen(false)}
                            >
                                Submit
                            </Button>
                        </Flex>
                    </Modal>
                </Flex>
            </Box>
            <Box>
                <TextInput
                    className="input"
                    type="search"
                    style={{width: 280, height: 42}}
                    size="xl"
                    placeholder="Search programs"
                    leftContent={
                        <img
                            className={spacing({ml: 2, mr: 2})}
                            src="./public/icons/search.svg"
                            alt=""
                        />
                    }
                />
            </Box>
        </Flex>
    );
};
