import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "assets/images/logo.png";
import styles from "components/Sidebar.module.css";
import { StyledBrand } from "styles/Styles";
import { StyledToggler } from "styles/Styles";
import { StyledSideNavContainer } from "styles/Styles";
import { StyledSideNavWrap } from "styles/Styles";
import { StyledCollapsed } from "styles/Styles";
import { StyledSideNavItems } from "styles/Styles";

function Sidebar() {
  const [collapseShow, setCollapseShow] = useState(false);
  return (
    <>
      <StyledSideNavWrap className="sidebar">
        <StyledSideNavContainer>
          {/* Toggler */}
          <StyledToggler type="button" onClick={() => setCollapseShow(true)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18H20M4 6H20H4ZM4 12H20H4Z"
                stroke="#3F3F46"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </StyledToggler>

          {/* Brand  */}
          <StyledBrand>
            <Link to="#helloworld">
              <img src={Logo} alt="..." />
            </Link>
          </StyledBrand>

          {/* User    */}
          <ul className={styles.mobile_navs}>
            <li>.</li>
            <li>.</li>
          </ul>

          {console.log(collapseShow)}

          {/* Collapse */}
          <StyledCollapsed collapseShow>
            {/* Collapse header */}
            <div className={styles.collapse_wrapper}>
              <div className={styles.flex_flex_wrap}>
                <div className="w-612">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Starter Kit
                  </Link>
                </div>
                <div className={styles.close_btn}>
                  <button type="button" onClick={() => setCollapseShow(false)}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 6L18 18M6 18L18 6L6 18Z"
                        stroke="#3F3F46"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Mobile search */}
            <form className={styles.mobile_search_form}>
              <div>
                <input type="text" placeholder="Search" />
              </div>
            </form>
            <StyledSideNavItems>
              <li className={styles.sidebar_nav_item}>
                <Link to="/dashboard">
                  <img
                    alt="..."
                    src={require("assets/icons/home.svg").default}
                  />
                  Home
                </Link>
              </li>

              <li className={styles.sidebar_nav_item}>
                <Link to="/dashboard">
                  <img
                    alt="..."
                    src={require("assets/icons/sales.svg").default}
                  />
                  Sales
                </Link>
              </li>

              <li className={styles.sidebar_nav_item}>
                <Link to="/dashboard">
                  <img
                    alt="..."
                    src={require("assets/icons/product.svg").default}
                  />
                  Products
                </Link>
              </li>

              <li className={styles.sidebar_nav_item}>
                <Link to="/dashboard">
                  <img
                    alt="..."
                    src={require("assets/icons/customer.svg").default}
                  />
                  Customer
                </Link>
              </li>

              <li className={styles.sidebar_nav_item}>
                <Link to="/dashboard">
                  <img
                    alt="..."
                    src={require("assets/icons/supplier.svg").default}
                  />
                  Supplier
                </Link>
              </li>

              <li className={styles.sidebar_nav_item}>
                <Link to="/dashboard">
                  <img
                    alt="..."
                    src={require("assets/icons/financials.svg").default}
                  />
                  Financial
                </Link>
              </li>

              <li className={styles.sidebar_nav_item}>
                <Link to="/dashboard">
                  <img
                    alt="..."
                    src={require("assets/icons/report.svg").default}
                  />
                  Report
                </Link>
              </li>
            </StyledSideNavItems>
          </StyledCollapsed>
        </StyledSideNavContainer>
      </StyledSideNavWrap>
    </>
  );
}

export default Sidebar;
