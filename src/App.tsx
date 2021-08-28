import React from 'react';
import Container from './layout/Container';
import BoardList from './layout/BoardList';
import Board from './layout/Board';
import List from './components/List';

const App: React.FC = () => {
  return (
    <Container>
      <BoardList>
        <List />
      </BoardList>
      <Board>{/* <Notes /> */}</Board>
    </Container>
  );
};

export default App;
