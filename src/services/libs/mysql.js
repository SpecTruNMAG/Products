

import { connect } from '@planetscale/database'

const config = {
  database: process.env.DATABASE,
  host:process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD
}

const conn = connect(config)


export default conn

