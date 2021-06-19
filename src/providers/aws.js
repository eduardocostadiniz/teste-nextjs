import AWS from 'aws-sdk'

let config = {
    region: process.env.NEXT_PUBLIC_REGION,
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
    endpoint: process.env.NEXT_PUBLIC_DYNAMO_DB_URL,
}

AWS.config.update(config)
let DynamoDB = new AWS.DynamoDB(config)

export default DynamoDB