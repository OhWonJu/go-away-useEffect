import React from "react";
import { TableMainContent } from "./TableList.styles";

interface TableListProps {
  tableData: Array<any>;
}

const TableList: React.FC<TableListProps> = ({ tableData }) => {
  const TableItem = ({ item }: any) => {
    const { mainContent, subContent, subIndex } = item;
    return (
      <li className="mb-4">
        <p className="text-2xl font-bold">
          <TableMainContent>{mainContent}</TableMainContent>
          {subContent}
        </p>
        {subIndex?.length > 0 && (
          <ul className="pl-20">
            {item.subIndex.map((subItem: any, index: number) => (
              <TableItem key={index} item={subItem} />
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <ul>
      {tableData &&
        tableData.map((item, index) => <TableItem key={index} item={item} />)}
    </ul>
  );
};

export default TableList;
