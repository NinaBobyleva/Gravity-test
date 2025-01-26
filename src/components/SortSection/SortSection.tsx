import {Box, Flex, Select, Tabs} from '@gravity-ui/uikit';
// import React from 'react';
import './sortSelection.scss';

export const SortSection = ({
    setSelect,
}: {
    setSelect: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
    // const [activeTab, setActiveTab] = React.useState('first');

    const handleUpdate = (value: string[]) => {
        setSelect(value);
    };

    return (
        <Box>
            <Flex justifyContent={'space-between'}>
                <Tabs
                    activeTab={'first'}
                    // onSelectTab={(tabId) => setActiveTab(tabId)}
                    size="xl"
                    className="tabs"
                    items={[
                        {id: 'first', title: 'Public library'},
                        {id: 'second', title: 'My library'},
                        {id: 'third', title: 'Favourite'},
                    ]}
                />
                <Flex className="selectBox" alignItems={'end'}>
                    <Flex alignItems={'center'}>
                        <p className="textSelect">Sort by</p>
                        <Select
                            className="select"
                            placeholder="New"
                            popupClassName="popupSelect"
                            view="clear"
                            width={70}
                            options={[
                                {value: 'New', content: 'New'},
                                {value: 'Old', content: 'Old'},
                            ]}
                            onUpdate={handleUpdate}
                        />
                    </Flex>
                    <Flex alignItems={'center'}>
                        <p className="textSelect">Language</p>
                        <Select
                            className="select"
                            placeholder="En"
                            popupClassName="popupSelect"
                            view="clear"
                            width={60}
                            options={[
                                {value: 'val_1', content: 'En'},
                                {value: 'val_2', content: 'Ru'},
                            ]}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};
