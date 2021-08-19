import React from "react";
import Avatar from "assets/images/avatar.png";
import {
  StyledNavbarAvatar,
  SytledInputWrap,
  SytledIconWrap,
} from "styles/Styles";
import { StyledNavbarItems, StyledSvg, StyledNavbarSpan } from "styles/Styles";
import {
  SytledNavbarWrap,
  SytledNavbarContainer,
  SytledInput,
  StyledInputForm,
} from "styles/Styles";
import { StyledNavbarItem } from "styles/Styles";

function Navbar() {
  return (
    <>
      <SytledNavbarWrap className="navbar">
        <SytledNavbarContainer>
          <StyledInputForm method="post">
            <SytledInputWrap>
              <SytledInput
                id="search"
                type="text"
                placeholder="Search invoice"
              />
              <SytledIconWrap>
                <StyledSvg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 9.31119C0 14.4682 4.21325 18.6224 9.44348 18.6224C11.7964 18.6224 13.9434 17.7817 15.5937 16.3872L21.973 22.6771L23.0001 21.6643L16.6208 15.3743C18.0346 13.7473 18.887 11.6307 18.887 9.31119C18.887 4.15422 14.6737 0 9.44348 0C4.21325 0 0 4.15422 0 9.31119ZM1.45284 9.31119C1.45284 4.94209 5.01231 1.43249 9.44348 1.43249C13.8747 1.43249 17.4341 4.94209 17.4341 9.31119C17.4341 13.6803 13.8747 17.1899 9.44348 17.1899C5.01231 17.1899 1.45284 13.6803 1.45284 9.31119Z"
                    fill="#FF5733"
                  />
                </StyledSvg>
              </SytledIconWrap>
            </SytledInputWrap>
          </StyledInputForm>
          <StyledNavbarItems>
            <StyledNavbarItem>
              <StyledNavbarSpan>
                <StyledNavbarAvatar src={Avatar} alt="..." />
              </StyledNavbarSpan>
            </StyledNavbarItem>
          </StyledNavbarItems>
        </SytledNavbarContainer>
      </SytledNavbarWrap>
    </>
  );
}

export default Navbar;
