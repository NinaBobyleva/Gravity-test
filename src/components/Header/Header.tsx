import {Box, Button, Flex, Icon, Modal, TextInput, spacing} from '@gravity-ui/uikit';
import {Plus} from '@gravity-ui/icons';
import './header.scss';
import {useState} from 'react';
import {postPrograms} from '../../api/apiPrograms';
import {CardsData} from '../Main/Main';

export type InputPost = {
    title: string;
    description: string;
    duration_weeks: number;
    sessions_per_week: number;
};

export const Header = ({
    setInputSearch,
    setIsChanged,
}: {
    setInputSearch: React.Dispatch<React.SetStateAction<string>>;
    setIsChanged: React.Dispatch<React.SetStateAction<CardsData | null>>;
}) => {
    const [open, setOpen] = useState(false);
    const [inputPost, setInputPost] = useState<InputPost>({
        title: '',
        description: '',
        duration_weeks: 0,
        sessions_per_week: 0,
    });

    const onChangedInputPost = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setInputPost({...inputPost, [name]: value});
    };

    const postProgramsData = () => {
        if (!inputPost.title) {
            return;
        }
        postPrograms(inputPost).then((data) => {
            setIsChanged(data);
        });
    };

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
                                    size="l"
                                    placeholder="Title"
                                    name="title"
                                    onChange={onChangedInputPost}
                                />
                                <TextInput
                                    style={{width: 300}}
                                    size="l"
                                    placeholder="Description"
                                    name="description"
                                    onChange={onChangedInputPost}
                                />
                            </Flex>
                            <Flex space={5}>
                                <TextInput
                                    style={{width: 140}}
                                    size="m"
                                    placeholder="Duration"
                                    name="duration_weeks"
                                    onChange={onChangedInputPost}
                                />
                                <TextInput
                                    style={{width: 140}}
                                    size="m"
                                    placeholder="Session"
                                    name="sessions_per_week"
                                    onChange={onChangedInputPost}
                                />
                            </Flex>
                            <Button
                                view="action"
                                size="l"
                                onClick={() => {
                                    setOpen(false);
                                    postProgramsData();
                                }}
                            >
                                Submit
                            </Button>
                        </Flex>
                    </Modal>
                </Flex>
            </Box>
            <Box>
                <TextInput
                    className="searchInput"
                    type="search"
                    style={{width: 280, height: 42}}
                    size="xl"
                    placeholder="Search programs"
                    onChange={(e) => setInputSearch(e.target.value)}
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
