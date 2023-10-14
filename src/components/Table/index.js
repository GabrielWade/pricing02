import styled from "styled-components";

const Table = styled.table`
  width: 98%;
  border-collapse: collapse;
  
  
  & th {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    height: 2rem;
  }
  
  & td {
    height: 2rem;
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: ${(props) => props.theme.colors.gray};
  }

  tr:nth-child(odd) {
    background-color: #fff;
`;

function ChargeTable () {
    return (
        <Table>
            <tr>
                <th></th>
                <th>VENDOR</th>
                <th>PLAN</th>
                <th>POL</th>
                <th>ROUTE</th>
                <th>POD</th>
                <th>S.HANDLING</th>
                <th>T.TIME</th>
                <th>UNIT</th>
                <th>OFF</th>
                <th>DFF</th>
                <th>LINE</th>
                <th>AGREEMENT TYPE</th>
                <th>AC TYPE</th>
                <th>EXPIRATION</th>
            </tr>
            <tr>
                <td>...</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Mexico</td>
                <td>Mexico</td>
                <td>...</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Mexico</td>
                <td>Mexico</td>
                <td>...</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Mexico</td>
                <td>Mexico</td>
            </tr>
            <tr>
                <td>...</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>...</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Mexico</td>
                <td>Mexico</td>
                <td>...</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Mexico</td>
                <td>Mexico</td>
            </tr>
        </Table>
    )
}

export default ChargeTable;