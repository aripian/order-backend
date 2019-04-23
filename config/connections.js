const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    host: 'localhost',
    user: 'postgres',
    password: 'data01',
    database: 'setel_test',
    port: 5432,
  },
  staging: {
    host: 'localhost',
    user: 'postgres',
    password: 'data01',
    database: 'setel_test',
    port: 5432,
  },
  production: {
    host: 'localhost',
    user: 'postgres',
    password: 'data01',
    database: 'setel_test',
    port: 5432,
  }
};

// module.exports = function(env) {
//   var c = config[env];
//   return `${ c.engine }://${ c.username }:${ c.password }@${ c.hostname }:${ c.port }/${ c.name }`;
// };

module.exports = config[env];
