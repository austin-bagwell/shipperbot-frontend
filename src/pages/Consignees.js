import styled from "styled-components";
import { MainContentWrapper } from "../components/wrappers/flexWrappers";

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid red;
`;

const Table = styled.table`
  border: 1px solid black;
  margin: auto;
`;

export default function Consignees(props) {
  return (
    <MainContentWrapper>
      <SearchWrapper>
        <input type={"text"}></input>
        <button>Batch Upload</button>
        <button>Add New</button>
      </SearchWrapper>
      <Table>
        <tr>
          <th>Name</th>
          <th>Transit Time</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>Target</td>
          <td>666</td>
          <td>action stuff</td>
        </tr>
      </Table>
      {/* search bar + batch upload btn + add new btn */}
      {/* tabular consignee data */}
      {/* pagination options */}
    </MainContentWrapper>
  );
}
