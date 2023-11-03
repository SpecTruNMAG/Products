

import { connect } from '@planetscale/database'

const config = {
  database: PLANETSCALE_DB,
  host:PLANETSCALE_DB_HOST,
  username: PLANETSCALE_DB_USERNAME,
  password: PLANETSCALE_DB_PASSWORD
}

const conn = connect(config)


export default conn

