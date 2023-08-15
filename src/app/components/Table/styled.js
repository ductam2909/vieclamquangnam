import styled from 'styled-components'
import { Table } from "antd";

export const TableCus = styled(Table)`
&.ant-table-wrapper{
    background-color: transparent;

}
  .ant-table {
    background-color: transparent;
  }
  .ant-table-thead >tr>th{
    background-color: transparent !important;
  }

  .ant-table-row:hover>td{
    background-color: transparent;
    box-shadow: 2px 2px 4px #0d8cae !important;
  }
  .ant-table-cell-row-hover{
    background-color: transparent;
    /* box-shadow: 2px 2px 4px #0d8cae !important; */
  }
  td, th {
    padding: 5px !important;
  }
`;