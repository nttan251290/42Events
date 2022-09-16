import axios from 'axios'

export const getService: any = (url: string, params = {}, headers = {}, options = {}) => {
  return axios.get(url, {
    ...options,
    params,
    headers
  })
    .then(({ status, data }) => {
      return {
        status,
        data
      }
    })
    .catch(error => {
      if (!error) {
        return {
          status: '504',
          error: {
            message: 'Request Timeout'
          }
        }
      }

      const { status, data } = error.response

      return {
        error: {
          status,
          data
        }
      }
    })
}
