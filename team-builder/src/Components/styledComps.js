import styled from 'styled-components';
export const MemForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  background-color: rgba(0, 0, 0, 0.6);
  width: 50%;
  height: 50vh;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
`;
export const NewInput = styled.input`
  width: 50%;
  margin: 10px;
`;
export const CardWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Card = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column wrap;
  width: 20%;
  height: 30vh;
  text-align: left;
  background-color: rgba(160, 190, 80, 0.6);
  margin: 3%;
`;
export const NewTextArea = styled.textarea`
  width: 50%;
  margin: 10px;
`;
