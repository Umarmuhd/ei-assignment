import styled from "styled-components";

//Sidebar Styles
export const StyledSideNavWrap = styled.nav`
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 1.5em;
  padding-bottom: 1.5em;

  @media (min-width: 768px) {
    top: 0;
    left: 0;
    bottom: 0;
    display: block;
    position: fixed;
    overflow-y: auto;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: hidden;
    width: 8.687rem;
  }
`;

export const StyledSideNavContainer = styled.div`
  padding-left: 0;
  padding-right: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    min-height: 100%;
    flex-wrap: nowrap;
  }
`;

export const StyledToggler = styled.button`
  opacity: 0.5;
  background-color: transparent;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  border: solid 1px transparent;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledBrand = styled.a`
  text-align: left;
  margin-right: 0;
  display: inline-block;
  white-space: nowrap;
  font-weight: bold;
  padding: 1rem 0;

  @media (min-width: 768px) {
    display: block;
    padding-bottom: 0.5rem;
  }
`;

export const StyledCollapsed = styled.div`
  display: ${(props) => props.collapseShow && "none"};
  background-color: ${(props) => !props.collapseShow && "#fff"};
  margin: ${(props) => !props.collapseShow && "0.5rem"};
  padding: ${(props) => !props.collapseShow && "0.75rem 1.5rem"};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  overflow-y: auto;
  overflow-x: hidden;
  height: auto;
  align-items: center;
  flex: 1 1 0%;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  @media (min-width: 768px) {
    display: none;
    flex-direction: column;
    align-items: stretch;
    opacity: 1;
    position: relative;
    margin-top: 1rem;
    box-shadow: none;
  }
`;

export const StyledSideNavItems = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  list-style-type: none @media (min-width: 768px) {
    flex-direction: column;
    min-width: 100%;
  }
`;

//Navbar Styles
export const SytledNavbarWrap = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`;

export const SytledNavbarContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

export const StyledInputForm = styled.form`
  display: none;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    margin-right: auto;
  }

  @media (min-width: 1080px) {
    margin-right: auto;
  }
`;

export const SytledInputWrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: stretch;
`;

export const SytledInput = styled.input`
  border: 0;
  padding: 0.75rem;
  position: relative;
  background-color: #fff;
  border-radius: 25px;
  outline: none;
  font-size: 0.875rem;
  line-height: 1.5;
  width: 100%;
  padding-left: 1.25rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
  }
`;

export const SytledIconWrap = styled.span`
  z-index: 10;
  position: absolute;
  text-align: center;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  width: 2rem;
  padding-left: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  right: 0.75rem;
`;

export const StyledSvg = styled.svg`
  fill: #fff;
`;

export const StyledNavbarItems = styled.ul`
  flex-direction: column;
  list-style: none;
  align-items: center;
  display: none;

  @media (min-width: 768px) {
    flex-direction: row;
    display: flex;
  }
`;

export const StyledNavbarItem = styled.li`
  display: flex;
  align-items: center;
`;

export const StyledNavbarSpan = styled.span`
  width: 3rem;
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
`;

export const StyledNavbarAvatar = styled.img`
  width: 100%;
  border-radius: 999px;
  vertical-align: middle;
  border: none;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

// Dashboard Styles
export const SytledDashboardWrap = styled.div`
  position: relative;

  @media (min-width: 768px) {
    margin-left: 8.687rem;
  }
`;

export const SytledInvoiceField = styled.span`
  color: ${(props) => props.color || "#231f20"};
  font-weight: ${(props) => props.fw || "300"};
  font-size: 0.75rem;
  line-height: 1.5;
`;

export const SytledInvoiceStatus = styled.span`
  color: ${(props) => (props.status === "COMPLETED" ? "#488925" : "#FF6290")};
  font-size: 0.75rem;
  line-height: 1.5;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  font-weight: 700;
`;
