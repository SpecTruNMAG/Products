

import { connect } from '@planetscale/database'

const config = {
  database: process.env.PLANETSCALE_DB,
  host: process.env.PLANETSCALE_DB_HOST,
  username: process.env.PLANETSCALE_DB_USERNAME,
  password: process.env.PLANETSCALE_DB_PASSWORD
}

const conn = connect(config)


export default conn

