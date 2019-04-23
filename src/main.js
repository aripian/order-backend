// import Request from 'request';
import { logger } from './utils/logger';
import axios from 'axios';
import db from './utils/db';
import Q from './queries';
import conf from '../config/misc';

const paymentURL = '';

const genToken = (length) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

const insertOrder = (data, cb) => {
  const orderDetails = [];

  orderDetails.push(genToken(12));
  orderDetails.push(data.order_by);
  orderDetails.push('start');
  orderDetails.push(data.price);

  db.query(Q.insertOrder, orderDetails, (err, res) => {
    if (err) {
      logger.error(err.stack);
      res.json({ error: 'Error inserting order data' });
    }
    //if success then proceed to payments
  });
};

const getOrderStatus = (data, cb) => {
  db.query(Q.getOrderStatus, [data.token, data.id], (err, res) => {
    if (err) {
      logger.error(err.stack);
      res.json({ error: 'Error getting order data' });
    }
    logger.warn(res);
    logger.warn(res.rows[0]);
    cb({
      status: res.rows[0],
    });
  });
};

const updateOrderStatus = (data, cb) => {
  db.query(Q.updateStatus, [data.status, data.token, data.id], (err, res) => {
    if (err) {
      logger.error(err.stack);
      res.json({ error: 'Error updating order data' });
    }
    logger.warn(res);
    logger.warn(res.rows[0]);
    cb({
      res,
    });
  });
};

module.exports = {
  insertOrder,
  getOrderStatus,
  updateOrderStatus,
};
