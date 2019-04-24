const insertOrder = 'INSERT INTO my_order VALUES (DEFAULT, $1, $2, $3, $4, DEFAULT) RETURNING id;';
const getOrderStatus = 'SELECT status FROM my_order WHERE token = $1 AND id = $2;';
const updateStatus = 'UPDATE my_order SET status = $1 WHERE token = $2 AND id = $3;';

export default {
  insertOrder,
  getOrderStatus,
  updateStatus,
};
