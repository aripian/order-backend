const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    paymentURL: 'http://localhost:8008/api/payment',
  },
  staging: {
    paymentURL: 'http://localhost:8008/api/payment',
  },
  production: {
    paymentURL: 'http://localhost:8008/api/payment',
  }
};

module.exports = config[env];
