import { FC, useState } from 'react';
import TodoInput from './TodoInput';

const TodoComponent: FC = () => {
  // state
  const [todo, setTodo] = useState<{ title: string; description: string; confirm: boolean }[]>([]);

  return (
    <>
      <TodoInput setTodo={setTodo} />
    </>
  );
};

export default TodoComponent;
