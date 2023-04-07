import styled from "styled-components";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  HeaderCell,
} from "../components/elements/Table";
import { ControlPanel } from "../components/ControlPanel";

const ContentWrapper = styled.section`
  max-width: 50vw;
  margin: auto;
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
    <TableRow key={consignee.id}>
      {Object.values(consignee).map((el) => {
        return <TableCell>{el}</TableCell>;
      })}
    </TableRow>
  );
});

export default function Consignees(props) {
  return (
    <ContentWrapper>
      <ControlPanel></ControlPanel>
      <Table numColumns={3}>
        <TableRow>
          <HeaderCell title="ID">ID</HeaderCell>
          <HeaderCell title="DC Name">DC Name</HeaderCell>
          <HeaderCell title="Transit Time">Transit Time</HeaderCell>
        </TableRow>
        <TableBody>{consigneeRows}</TableBody>
      </Table>
    </ContentWrapper>
  );
}
