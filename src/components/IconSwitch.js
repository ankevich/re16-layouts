import styled from "styled-components";

const IconSwitch = ({ switcher }) => {
  return (
    <Container>
    <Button onClick={() => switcher()} className="material-icons">
      list
    </Button>
    </Container>
  );
};

export default IconSwitch;

const Button = styled.button`
  margin: 10px;
  border: none;
  background: none;
  font-size: 30px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;