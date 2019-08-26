import request from 'umi-request';

export async function queryTodos() {
  return request('/api/todos');
}
