/* import mysql from "serverless-mysql";

const conn = mysql({
    config:{
        database:"ecommerce",
        host:"aws.connect.psdb.cloud",
        user:"n3glfmt3xzbh0q7cusvd",
        password:"pscale_pw_pldXxNBlQOUt2ToEPUBI0gwC3usjVj8IwIf21BBtTuj"
    }
})



export default conn */

import { connect } from '@planetscale/database'

const config = {
  database: 'ecommerce',
  host: 'aws.connect.psdb.cloud',
  username: 'n3glfmt3xzbh0q7cusvd',
  password: 'pscale_pw_pldXxNBlQOUt2ToEPUBI0gwC3usjVj8IwIf21BBtTuj'
}

const conn = connect(config)


export default conn

