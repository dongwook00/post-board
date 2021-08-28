import React from 'react';
import Container from './layout/Container';
import BoardList from './layout/BoardList';
import Board from './layout/Board';
import List from './components/List';
import Title from './components/Title';
import Notes from './components/Notes';

const App: React.FC = () => {
  return (
    <Container>
      <BoardList>
        <List />
      </BoardList>
      <Board>
        <Title />
        <Notes />
      </Board>
    </Container>
  );
};

export default App;
