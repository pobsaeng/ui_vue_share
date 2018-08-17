import Vue from 'vue'
import Promise from 'bluebird'

export default {
  getService(serverPath, authorization) {
    return new Promise((resolve, reject) => {
      Vue.$http.get(serverPath,
        {
          headers: { "X-Auth-Token": authorization }
        }).then(({ data }) => {
          resolve(data)

        }).catch((error) => {
          reject(error)

        })
    })
  }
}
