import mysql from "serverless-mysql";

const conn = mysql({
    config:{
        database:"ecommerce",
        host:"localhost",
        port:3306,
        user:"root",
        password:"password"
    }
})

export default conn