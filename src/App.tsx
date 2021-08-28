import React from 'react';
import Container from './layout/Container';
import BoardList from './layout/BoardList';
import Board from './layout/Board';

const App: React.FC = () => {
  return (
    <Container>
      <BoardList>list</BoardList>
      <Board>board</Board>
    </Container>
  );
};

export default App;
