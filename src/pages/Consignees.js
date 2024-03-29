import styled from "styled-components";
import { Main } from "../components/wrappers/MainContentWrapper";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  HeaderCell,
} from "../components/elements/Table";
import { ControlPanel } from "../components/ControlPanel";
import { BackgroundImage } from "../components/BackgroundImage";

const StyledMain = styled(Main)`
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
    <BackgroundImage>
      <StyledMain>
        <ControlPanel></ControlPanel>
        <Table numColumns={3}>
          <thead>
            <TableRow>
              <HeaderCell title="ID">ID</HeaderCell>
              <HeaderCell title="DC Name">DC Name</HeaderCell>
              <HeaderCell title="Transit Time">Transit Time</HeaderCell>
            </TableRow>
          </thead>
          <TableBody>{consigneeRows}</TableBody>
        </Table>
      </StyledMain>
    </BackgroundImage>
  );
}
