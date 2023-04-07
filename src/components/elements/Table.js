// borrowing liberally from dear-petition

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCaretDown,
//   faCaretUp,
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { colorPrimary, greyScale } from "../../styles/colors";

export const TableStyle = styled.table`
  display: grid;
  border-collapse: collapse;
  min-width: 100%;
  grid-template-columns: ${(props) => props.columnSize};

  & thead,
  & tbody,
  & tr {
    display: contents;
  }

  & th,
  & td {
    padding: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & th {
    position: sticky;
    top: 0;
    background: ${colorPrimary};
    text-align: left;
    color: black;
    user-select: none;
  }

  & th:last-child {
    border: 0;
  }

  & td {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  & tr:nth-child(even) td {
    background-color: ${greyScale(9.25)};
  }
`;

export const HeaderCell = ({ children, className, title }) => (
  <th className={className} title={title}>
    {children}
  </th>
);

export const TableCell = ({ children, className, header, title }) => {
  if (header) {
    return (
      <th className={className} title={title}>
        {children}
      </th>
    );
  }
  return (
    <td className={className} title={title}>
      {children}
    </td>
  );
};

export const TableBody = ({ children }) => <tbody>{children}</tbody>;
// Can I use this?
/*
export const TableHeader = ({ children }) => {
  const childrenWithSort = React.Children.map(children, (child) => {
    if (child.type === sortableHeaderType) {
      return (
        <SortableHeader
          key={child.props.field}
          field={child.props.field}
          onSelect={onSelectColumn}
          isSelected={sortedHeader === child.props.field}
          sortDir={sortDir}
        >
          {child.props.children}
        </SortableHeader>
      );
    }
    return child;
  });
  return (
    <thead>
      <tr>{childrenWithSort}</tr>
    </thead>n
  );
};
*/
export const TableRow = ({ children, className }) => (
  <tr className={className}>{children}</tr>
);

export const Table = ({ children, className, columnSizes, numColumns }) => {
  const defaultSize = `repeat(${numColumns}, 1fr)`;
  return (
    <TableStyle className={className} columnSize={columnSizes || defaultSize}>
      {children}
    </TableStyle>
  );
};
