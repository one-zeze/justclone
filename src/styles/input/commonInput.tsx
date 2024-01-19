import styled from "styled-components";

interface StyledProps{
  size?: string;
  margin?: string;
}

const CommonInput = styled.input<StyledProps>`
  width: ${(props) => props.width || '300px'};
  height: ${(props) => props.height || '40px'};
  padding: 0px;
  margin: 0px 0px 16px 0px;
  background-color: #3A3A3C;
  border: none;
  border-radius: 6px;
  color: white;
  text-indent: 5%;
  &::placeholder {
    text-indent: 5%;
    size: ${(props) => props.size || '16px'};
    margin: ${(props) => props.margin || '0px'};
  }
  &:focus {
    outline: none;
  }
`

export {CommonInput};