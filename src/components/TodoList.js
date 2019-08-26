import PropTypes from 'prop-types';
import { Table, Popconfirm, Button, Tag } from 'antd';

const { CheckableTag } = Tag;

const TodoList = ({ onDelete, toggleComplete, todos }) => {
  const columns = [
    {
      title: 'Message',
      dataIndex: 'message',
    },
    {
      title: 'Completed',
      dataIndex: 'completed',
      render: (checked, record) => {
        return (
          <CheckableTag onChange={() => toggleComplete(record._id)} checked={checked}>
            {checked ? 'Yes' : 'No'}
          </CheckableTag>
        );
      },
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record._id)}>
            <Button type="danger">Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={todos} />;
};

TodoList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

export default TodoList;
