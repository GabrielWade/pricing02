import styled from 'styled-components';
import SideBarButtons from "../SideBarButtons";
import {useState} from "react";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  position: absolute;
`;

function SideBar(){

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    };

    return (
        <Container>
            <SideBarButtons
                to='/aircharge'
                selected={selectedButton === 'button1'}
                onClick={() => handleButtonClick('button1')}
            >
                AIR CHARGE
            </SideBarButtons>
            <SideBarButtons
                to='/'
                selected={selectedButton === 'button2'}
                onClick={() => handleButtonClick('button2')}
            >
                SEA CHARGE
            </SideBarButtons>
            <SideBarButtons
                to='/aircharge'
                selected={selectedButton === 'button3'}
                onClick={() => handleButtonClick('button3')}
            >
                PICKUP CHARGES
            </SideBarButtons>
            <SideBarButtons
                to='/'
                selected={selectedButton === 'button4'}
                onClick={() => handleButtonClick('button4')}
            >
                O/D CHARGES
            </SideBarButtons>
            <SideBarButtons
                to='/aircharge'
                selected={selectedButton === 'button5'}
                onClick={() => handleButtonClick('button5')}
            >
                CARRIER CHARGES
            </SideBarButtons>
            <SideBarButtons
                to='/'
                selected={selectedButton === 'button6'}
                onClick={() => handleButtonClick('button6')}
            >
                D/D CHARGES
            </SideBarButtons>
            <SideBarButtons
                to='/'
                selected={selectedButton === 'button7'}
                onClick={() => handleButtonClick('button7')}
            >
                DELIVERY CHARGES
            </SideBarButtons>
            <SideBarButtons
                to='/'
                selected={selectedButton === 'button8'}
                onClick={() => handleButtonClick('button8')}
            >
                CONSOL AIR
            </SideBarButtons>
        </Container>
    )
}

export default SideBar;