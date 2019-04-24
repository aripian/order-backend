import main from './main';

const routes = (app) => {
  const router = app.get('router');

  router.post('/order-create', (req, res) => {
    const data = req.body;

    main.insertOrder(data, (cb) => {
      res.send(cb.data); // let frontend handle payment
    });
  });

  router.get('/order-status', (req, res) => {
    const data = req.body;

    main.getOrderStatus(data, (cb) => {
      res.send(cb.status);
    });
  });

  router.post('/order-update', (req, res) => {
    const data = req.body;

    main.updateOrderStatus(data, (cb) => {
      res.send(cb.res);
    });
  });

  app.use('/api', router);
};

module.exports = routes;
