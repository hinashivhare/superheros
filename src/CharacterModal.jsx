import React, {useEffect,useState} from 'react';
import {Modal, Button } from 'antd';
import axios from 'axios';

const CharacterModal = (props) => {
    const [visible, setVisible] = useState(false);
    const [character, setCharacter] = useState({})

    const fetchCharacter = async () => {
        const url =  `https://gateway.marvel.com:443/v1/public/characters/${props.id}?apikey=19c33d8c9507ac66eed0e2fca8ea9cf0`
        const response = await axios.get(url);
        const data = response.data;
        if(data){
            const details = {
                name: data.data.results[0].name,
                image: data.data.results[0].thumbnail.path + '.jpg',
                description: data.data.results[0].description
            }
            setCharacter(details)
        }
    }

    useEffect(() => {
        fetchCharacter()
    },[])

    const handleOk = () => {
        setVisible(false);
    }
    const handleKnowMoreClick = () => {
        setVisible(true)
    }

    return (
        <div>
            <Button onClick={handleKnowMoreClick} className='know-more-button'>Know More</Button>
            <Modal
                visible={visible}
                title={<h1>{character.name}</h1>}
                onCancel={handleOk}
                onOk={handleOk}
                footer={[
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Close
                    </Button>
                ]}
                className="know-more-modal"
            >
                <img className="know-more-image" alt="example" src={character.image} />
                <h2>{character.description}</h2>
            </Modal>
        </div>
    );
}

export default CharacterModal;