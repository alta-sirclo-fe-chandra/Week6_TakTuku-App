import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useNavigate } from "react-router-dom";

const Transaction = () => {
  const Navigate = useNavigate();
  const products = [
    { id: 1, date: "1 Feb 2022", status: "completed", price: 101 },
    { id: 2, date: "2 Feb 2022", status: "completed", price: 102 },
    { id: 3, date: "3 Feb 2022", status: "completed", price: 103 },
    { id: 4, date: "4 Feb 2022", status: "completed", price: 104 },
    { id: 5, date: "5 Feb 2022", status: "completed", price: 105 },
  ];
  const columns = [
    {
      dataField: "id",
      text: "#ID",
    },
    {
      dataField: "date",
      text: "DATE",
      sort: true,
    },
    {
      dataField: "status",
      text: "STATUS",
      sort: true,
    },
    {
      dataField: "price",
      text: "TOTAL",
    },
  ];

  const rowEvents = {
    onClick: (e: any, row: any, rowIndex: any) => {
      Navigate(`/account/transaction/${row.id}`);
    },
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="border rounded">
            <div className="p-4">
              <h5 className="m-0">Transaction</h5>
            </div>
            <BootstrapTable
              bootstrap4
              classes="border-white text-center"
              rowClasses="border-bottom"
              keyField="id"
              data={products}
              columns={columns}
              pagination={paginationFactory({
                sizePerPage: 10,
                paginationSize: 3,
                alwaysShowAllBtns: true,
              })}
              rowEvents={rowEvents}
              rowStyle={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
