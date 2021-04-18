import Vue from 'vue'
import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8081/',
  json: true
})

export default {
  async execute (method, resource, data) {
    return client({
      method,
      url: resource,
      data
    }).then(req => {
      return req.data
    })
  },
  getHighscores () {
    return this.execute('get', '/highscores')
  },
  createHighscore (data) {
    return this.execute('post', '/highscores', data)
  },
  updateHighscore (id, data) {
    return this.execute('put', `/highscores/${id}`, data)
  },
  deleteHighscore (id) {
    return this.execute('delete', `/highscores/${id}`)
  }
}
