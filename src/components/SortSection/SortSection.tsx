import {Box, Flex, Select, Tabs} from '@gravity-ui/uikit';
import React from 'react';

export const SortSection = () => {
    const [activeTab, setActiveTab] = React.useState('first');
    return (
        <Box>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Tabs
                    activeTab={activeTab}
                    onSelectTab={(tabId) => setActiveTab(tabId)}
                    size="xl"
                    className="tabs"
                    items={[
                        {id: 'first', title: 'Public library'},
                        {id: 'second', title: 'My library'},
                        {id: 'third', title: 'Favourite'},
                    ]}
                />
                <Flex className="selectBox" alignItems={'end'}>
                    {/* <Text variant="body-1">Sort by</Text> */}
                    <Select
                        className="select"
                        size="l"
                        placeholder="New"
                        label="Sort by"
                        options={[
                            {value: 'val_1', content: 'New'},
                            {value: 'val_2', content: 'Old'},
                        ]}
                    />
                    <Select
                        className="select"
                        size="l"
                        label="Language"
                        placeholder="En"
                        options={[
                            {value: 'val_1', content: 'En'},
                            {value: 'val_2', content: 'Ru'},
                        ]}
                    />
                </Flex>
            </Flex>
        </Box>
    );
};
