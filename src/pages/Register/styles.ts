import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 25px 10px;
`;

export const Image = styled.Image``;

export const Main = styled.View`
  height: 300px;
  width: 260px;

  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #cfcfcf;
  width: 265px;

  margin-bottom: 10px;
  padding: 1.5px;
  text-align: center;

  font-family: 'Jost-Light';
  font-size: 18px;
`;
