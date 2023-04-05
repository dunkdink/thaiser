import { React, useState, useEffect } from "react";
import DataTable from "react-data-table-component";

import {
  Container,
  HistoryWrap,
  HistoryH1,
  HistoryContent,
  HistoryMenu,
  HistoryBtn,
} from "./HistoryElements";
function History() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);

  const customStyles = {
    rows: {
      style: {
        minHeight: "50px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
    tableWrapper: {
      style: {
        width: "1000px",
        paddingLeft: "10px", // override the cell padding for data cells
        paddingRight: "10px",
      },
    },
  };

  const columns = [
    {
      name: "User ID",
      selector: (row) => row.userId,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Completed",
      selector: (row) => (row.completed ? "Yes" : "No"),
    },
  ];

  useEffect(() => {
    fetchTableData();
  }, []);

  async function fetchTableData() {
    setLoading(true);
    const URL = "https://jsonplaceholder.typicode.com/todos";
    const response = await fetch(URL);

    const users = await response.json();
    setData(users);
    setLoading(false);
  }

  return (
    <>
      <Container>
        <HistoryWrap>
          <HistoryH1>ประวัติการทำรายการ</HistoryH1>
          <HistoryMenu>
            <HistoryContent>
              <HistoryBtn to="/editprofile">ย้อนกลับ</HistoryBtn>
              <DataTable
                columns={columns}
                data={data}
                progressPending={loading}
                pagination
                customStyles={customStyles}
              />
            </HistoryContent>
          </HistoryMenu>
        </HistoryWrap>
      </Container>
    </>
  );
}

export default History;
