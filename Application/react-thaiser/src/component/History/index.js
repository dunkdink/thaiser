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
  const [perPage, setPerPage] = useState(5);
  const { user } = useContext(UserContext);

  const customStyles = {
    rows: {
      style: {
        minHeight: "50px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
    tableWrapper: {
      style: {
        width: "70vw",
        paddingLeft: "10px",
        paddingRight: "10px",
      },
    },
  };

  const translations = {
    ID: "ID",
    Name: "ชื่อ",
    "Time Range": "ช่วงเวลา",
    "Emotion Name": "ชื่ออารมณ์",
  };

  const columns = [
    {
      name: translations["ID"],
      selector: (row) => row.index,
    },
    {
      name: translations["Name"],
      selector: (row) =>
        row.relative_path.split("/")[1].replace(/\([^)]*\)/g, ""),
      width: "50%",
    },
    {
      name: translations["Time Range"],
      selector: (row) => {
        const a = row.relative_path.split("_");
        return a[a.length - 1].split(".wav")[0].replace(/\(|\)/g, "");
      },
    },
    {
      name: translations["Emotion Name"],
      selector: (row) => row.emotion,
    },
  ];

  useEffect(() => {
    fetchTableData();
  }, [user]);

  async function fetchTableData() {
    setLoading(true);
    const URL = `http://api.ce32.ce.kmitl.cloud/history?username=${user.username}`;
    const response = await fetch(URL);

    const users = await response.json();

    const updatedData = users.map((item) => {
      if (item.emotion === "Neutral") {
        return {
          ...item,
          emotion: "ทั่วไป",
        };
      } else if (item.emotion === "Happy") {
        return {
          ...item,
          emotion: "สุข",
        };
      } else if (item.emotion === "Sad") {
        return {
          ...item,
          emotion: "เศร้า",
        };
      } else if (item.emotion === "Angry") {
        return {
          ...item,
          emotion: "โกรธ",
        };
      } else if (item.emotion === "Frustrated") {
        return {
          ...item,
          emotion: "หงุดหงิด",
        };
      } else {
        return item;
      }
    });

    setData(updatedData);
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
