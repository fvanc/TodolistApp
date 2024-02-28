import * as React from 'react';
import { ListProvider } from './ListContext';
import SecondaryList from './SecondaryList';

export default function App() {
  return (
    <ListProvider>
      <SecondaryList />
    </ListProvider>
  );
}