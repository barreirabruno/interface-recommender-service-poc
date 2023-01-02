const httpMethods = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete'
}

export const sponsorConfigs = {
  base_url: {
    dev: 'https://fragrant-rain-4494.fly.dev',
    prod: 'https://divine-sky-6511.fly.dev',
  },
  recommendation: {
    path: '/sponsor/recommender?sponsor_id=',
    method: httpMethods.get,
  },
  available_sponsors: {
    path: '/sponsor',
    method: httpMethods.get,
  },
  sponsor_by_id: {
    path: '/sponsor/single?sponsor_id=',
    method: httpMethods.get,
  }
}
