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
  width: 40vw;
`;

const dummyConsignees = [
  {
    id: 0,
    name: "Target",
    timeInTransit: "666",
  },
  {
    id: 1,
    name: "Kroger",
    timeInTransit: "111",
  },
  {
    id: 2,
    name: "Wegmans",
    timeInTransit: "333",
  },
];

const consigneeRows = dummyConsignees.map((consignee) => {
  return (
    <tr key={consignee.id}>
      {Object.values(consignee).map((val) => {
        return <td>{val}</td>;
      })}
    </tr>
  );
});

export default function Consignees(props) {
  return (
    <MainContentWrapper>
      <SearchWrapper>
        <input type={"text"}></input>
        <button>Batch Upload</button>
        <button>Add New</button>
      </SearchWrapper>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Transit Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{consigneeRows}</tbody>
      </Table>
      <div>
        <h4>pagination options</h4>
      </div>
      {/* search bar + batch upload btn + add new btn */}
      {/* tabular consignee data */}
      {/* pagination options */}
    </MainContentWrapper>
  );
}
