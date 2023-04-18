import { React, useState, useEffect, useContext } from "react";
import DataTable from "react-data-table-component";
import { UserContext } from "../../contexts/UserContext";
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
  const { user } = useContext(UserContext);

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
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Title",
      selector: (row) => row.relative_path.split("/")[1].replace(/\([^)]*\)/g, ""),
      width: "50%"
    },
    {
      name: "TimeStamp",
      selector: (row) =>  {
        const a = row.relative_path.split("_")
        return a[a.length - 1].split(".wav")[0].replace(/\(|\)/g, "")
      },
    },
    {
      name: "Emotion Id",
      selector: (row) => row.output,
    },
    {
      name: "Emotion Name",
      selector: (row) => row.emotion,
    },
  ];

  useEffect(() => {
    fetchTableData();
  }, [user]);

  async function fetchTableData() {
    setLoading(true);
    const URL = `http://127.0.0.1:8000/history?username=${user.username}`;
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
