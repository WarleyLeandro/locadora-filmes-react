import styled from "styled-components";

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-left: 12px;
  width: 734px;
  height: 72px;
  margin-top: 16px;
  margin-bottom: 41px;
  //border: solid 2px red;
`;

export const Title = styled.text`
  color: #ffffff;
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
  font-size: 20px;
  font-style: normal;
  line-height: 27.24px;
`;

export const BoxCarButton = styled.button`
  display: flex;
  flex-direction: row;
  margin-left: 474px;
  background-color: #2f2e41;
  border: none;
`;

export const BoxCarButtonText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MyCarText = styled.text`
  color: #ffffff;
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 14px;
  font-style: normal;
  line-height: 19.07px;
`;

export const ItemText = styled.text`
  align-self: flex-end;
  color: #999999;
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 12px;
  font-style: normal;
  line-height: 16.34px;
`;

export const Icon = styled.img`
  margin-left: 10px;
`;
