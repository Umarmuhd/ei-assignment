import React from "react";
import { StyledControlbar } from "styles/Styles";
import styles from "./Controlbar.module.css";
import SelectFilter from "./SelectFilter";

function Controlbar() {
  return (
    <StyledControlbar>
      <button className={styles.create_invoice_btn}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="14" cy="14" r="13" stroke="#A751D4" stroke-width="2" />
          <path
            d="M18.6013 14.74H14.5613V18.88H12.4413V14.74H8.40133V12.82H12.4413V8.68H14.5613V12.82H18.6013V14.74Z"
            fill="#A751D4"
          />
        </svg>

        <span>Create Invoice</span>
      </button>
      <div className={styles.right_controls}>
        <button className={styles.reload_btn}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5748 9.02012C19.136 8.72739 18.543 8.84593 18.2505 9.28476L18.2221 9.32735C17.8766 4.60948 13.928 0.876404 9.12349 0.876404C4.09277 0.876467 0 4.96924 0 9.99995C0 15.0307 4.09277 19.1234 9.12349 19.1234C9.82671 19.1234 10.3967 18.5534 10.3967 17.8502C10.3967 17.147 9.82671 16.5769 9.12349 16.5769C5.49692 16.5769 2.54652 13.6265 2.54652 9.99995C2.54652 6.37345 5.49692 3.42299 9.12349 3.42299C12.4848 3.42299 15.2647 5.95773 15.6535 9.21607C15.3471 8.83467 14.7949 8.74356 14.3802 9.02012C13.9414 9.31271 13.8229 9.90567 14.1155 10.3444L16.0064 13.1801C16.2296 13.5147 16.5926 13.7144 16.9776 13.7144C17.3626 13.7144 17.7256 13.5146 17.9486 13.1801L19.8395 10.3444C20.132 9.90561 20.0136 9.31271 19.5748 9.02012Z"
              fill="#FF9B86"
            />
          </svg>
        </button>
        <SelectFilter />
      </div>
    </StyledControlbar>
  );
}

export default Controlbar;
