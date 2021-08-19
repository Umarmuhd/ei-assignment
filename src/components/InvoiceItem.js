import { formatter } from "helper/moneyFormart";
import React from "react";
import { SytledInvoiceStatus, SytledInvoiceField } from "styles/Styles";
import styles from "./InvoiceItem.module.css";

function InvoiceItem({ invoice }) {
  return (
    <tr key={invoice.id} className={styles.invoice_item}>
      <th className={styles.th}>
        <input type="checkbox" name="" id="" />
      </th>
      <td className={styles.td}>
        <SytledInvoiceField color="#0061d3" fw="500">
          {invoice.id}
        </SytledInvoiceField>
      </td>
      <td className={styles.td}>
        <div className={styles.datentime}>
          <SytledInvoiceField>{invoice.date}</SytledInvoiceField>
          <SytledInvoiceField color="#BCBCBC">
            {invoice.time}
          </SytledInvoiceField>
        </div>
      </td>
      <td className={styles.td}>
        <SytledInvoiceField color="#0061d3" fw="400">
          {invoice.customer}
        </SytledInvoiceField>
      </td>
      <td className={styles.td}>
        <SytledInvoiceField>
          {formatter.format(invoice.salesTotal)}
        </SytledInvoiceField>
      </td>
      <td className={styles.td}>
        <div className={styles.amount_pm}>
          <SytledInvoiceField>{invoice.date}</SytledInvoiceField>
          <SytledInvoiceField color="#231F20" fw="700" className="payment_m">
            {invoice.paymentMethod}
          </SytledInvoiceField>
        </div>
      </td>
      <td className={styles.td}>
        <SytledInvoiceStatus status={invoice.status}>
          {invoice.status}
        </SytledInvoiceStatus>
      </td>
      <td className={styles.td}>
        <svg
          width="4"
          height="22"
          viewBox="0 0 4 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
          <circle cx="2" cy="11" r="2" fill="#C4C4C4" />
          <circle cx="2" cy="20" r="2" fill="#C4C4C4" />
        </svg>
      </td>
    </tr>
  );
}

export default InvoiceItem;
