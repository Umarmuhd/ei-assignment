import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";
import InvoiceItem from "components/InvoiceItem";

import { SytledDashboardWrap } from "styles/Styles";

import { invoicesData } from "invoice-data.json";
import Controlbar from "components/Controlbar";

function Dashboard() {
  let history = useHistory();
  const [invoices, setInvoices] = useState(invoicesData);

  // Data Fetching
  useEffect(() => {
    // eslint-disable-next-line
    const fetchData = async () => {
      const response = await axios.get("/api/invoice");
      const invoices = await response.json();
      setInvoices(invoices);
    };

    // fetchData();
  }, [history]);
  return (
    <>
      <Sidebar />
      <SytledDashboardWrap className="dashboard">
        <Navbar />

        <div className="wrap_control_bar">
          <Controlbar />
        </div>

        <div className="dashboard-container">
          <div className="wrapper">
            <div className="invoice-table">
              <table className="table">
                <thead className="table-head">
                  <tr>
                    <th className="th">
                      <input type="checkbox" name="" id="" />
                    </th>
                    <th className="th">ID</th>
                    <th className="th">Date</th>
                    <th className="th">Customer</th>
                    <th className="th">Sales total</th>
                    <th className="th">Amount paid</th>
                    <th className="th">Status</th>
                    <th className="th"></th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {invoices.map((invoice) => (
                    <InvoiceItem
                      key={invoice.id}
                      invoice={invoice}
                      className="invoices"
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SytledDashboardWrap>
    </>
  );
}

export default Dashboard;
