import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  flex-direction: column;
  padding-bottom: 41px;
`;

export const ListItens = styled.div`
  display: flex;
  flex-direction: column;
  width: 734px;
  background-color: #ffffff;
  padding-left: 12px;
  padding-right: 10px;
  padding-bottom: 12px;
  background: #ffffff;
  border-radius: 4px;
`;

export const HeaderList = styled.div`
  display: flex;

  margin-top: 22px;
  width: 60%;

  margin-left: 30px;
  margin-bottom: 21px;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Underline = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background: #999999;
  align-self: center;
  margin-top: 15px;
  margin-bottom: 12px;
`;

export const Title = styled.text`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  padding-left: 0;
  color: #999999;
`;

export const BoxPrice = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: flex-end;
`;

export const TotalPrice = styled.text`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;

  display: flex;

  color: #2f2e41;
`;

//card

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 712px;
  height: 130px;
`;

export const ImgCard = styled.img`
  height: 114px;
`;
export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 119px;
`;

export const ContentButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
`;

export const ButtonCard = styled.button`
  border: none;
  color: #009edd;
  background-color: #ffffff;
`;

export const InputCard = styled.input`
  box-sizing: border-box;
  width: 47px;
  height: 27px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;

export const PriceCard = styled.text`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;

  color: #2f2e41;
`;

export const SubPriceCard = styled.text`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: #2f2e41;
  width: 80px;
`;
