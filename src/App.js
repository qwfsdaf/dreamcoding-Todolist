import { useState } from 'react';
import './App.css';
import TodoList from './TodoList/TodoList';
import Header from './Header/Header';
import { DarkModeProvider } from './context/DarkModeContext';

export default function App() {
  const Filters = ['all', 'active', 'completed'];
  const [Filter, setFilter] = useState(Filters[0]);

  return (
    <DarkModeProvider>
      <Header filters={Filters} filter={Filter} onFilterChange={setFilter} />
      <TodoList filter={Filter} />
    </DarkModeProvider>
  );
}