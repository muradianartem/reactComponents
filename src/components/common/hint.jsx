import React from 'react';
import styled from "styled-components";

const Hint = ({head, text}) => {
    return(
        <StyledWrapper>
            <StyledHead>{head}</StyledHead>
            <Line />
            <StyledContent>{text}</StyledContent>
        </StyledWrapper>
    )
};

const StyledWrapper = styled.div`
  border: solid 1px #dfe0e4;
  border-radius: 3px;
  width: 300px;
`;

const StyledHead = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 18px;
  font-family: proxima-nova-semibold, sans-serif;
  color: #4a4a4a;
  font-weight: 600;
  font-size: 17px;
`;

const StyledContent = styled.div`
  font-family: proxima-nova-regular, sans-serif;
  color: #4a4a4a;
  line-height: 1.77;
  font-size: 13px;
  margin: 18px 29px 20px 14px;
`;

const Line = styled.div`
  margin-left: 8px;
  margin-right: 10px;
  height: 0.5px;
  background-color: #c6c6c6;
`;

export default Hint;
