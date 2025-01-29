import {Box, Flex, Select, Tabs} from '@gravity-ui/uikit';
// import React from 'react';
import './sortSection.scss';

export const SortSection = ({setSort}: {setSort: React.Dispatch<React.SetStateAction<string>>}) => {
    // const [activeTab, setActiveTab] = React.useState('first');

    const handleUpdate = (value: string[]) => {
        setSort(String(value));
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
                        <p className="selectText">Sort by</p>
                        <Select
                            className="select"
                            placeholder="Title"
                            popupClassName="selectPopup"
                            view="clear"
                            width={70}
                            options={[
                                {value: 'Title', content: 'Title'},
                                {value: 'Id', content: 'Id'},
                                {value: 'Duration', content: 'Duration'},
                            ]}
                            onUpdate={handleUpdate}
                        />
                    </Flex>
                    <Flex alignItems={'center'}>
                        <p className="selectText">Language</p>
                        <Select
                            className="select"
                            placeholder="En"
                            popupClassName="selectPopup"
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
