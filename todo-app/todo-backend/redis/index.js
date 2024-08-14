const redis = require('redis')
const { promisify } = require('util')
const { REDIS_URL } = require('../util/config')

let getAsync
let setAsync

if (!REDIS_URL) {
  const redisIsDisabled = () => {
    console.log('No REDIS_URL set, Redis is disabled')
    return null
  }
  getAsync = redisIsDisabled
  setAsync = redisIsDisabled
} else {
  const client = redis.createClient({
    url: REDIS_URL
  })
    

const initializeRedisAddedTodos = async () => {
  let added_todos = await getAsync('added_todos');
  if (!added_todos) {
    await setAsync('added_todos', 0);
}
};

module.exports = {
  getAsync,
  setAsync,
  initializeRedisAddedTodos,
};
