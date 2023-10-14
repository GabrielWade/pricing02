import ChargeTable from "../../components/Table";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 13%;
  
  & h1 {
    color: #313131;
  }
`;

function Home (){
    return (
        <Container>
            <h1>
                MANAGE TARIFF AIR CHARGE
            </h1>
            <ChargeTable />
        </Container>
    )
}

export default Home;