import { useEffect } from 'react';
import { Typography } from 'antd';
import TodoList from '../components/TodoList';
import { connect } from 'dva';

const { Title } = Typography;

function Index({ dispatch, todos }) {
  useEffect(() => {
    dispatch({
      type: 'todos/fetchTodos',
    });
  }, []);

  const handleDelete = id => {
    dispatch({
      type: 'todos/delete',
      payload: id,
    });
  };

  const toggleComplete = id => {
    dispatch({
      type: 'todos/toggleComplete',
      payload: id,
    });
  };

  return (
    <div>
      <Title level={2}>Your todos:</Title>
      <TodoList onDelete={handleDelete} toggleComplete={toggleComplete} todos={todos} />
    </div>
  );
}

export default connect(({ todos }) => ({ todos }))(Index);
