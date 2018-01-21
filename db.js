
const { Pool, Client } = require('pg')

// pools will use environment variables
// for connection information


export default (req, res, next) => {
    const pool = new Pool()
    
    // the pool with emit an error on behalf of any idle clients
    // it contains if a backend error or network partition happens
    pool.on('error', (err, client) => {
      console.error('Unexpected error on idle client', err)
      process.exit(-1)
    })

    req.pool = pool;
    next();
}