import axios from 'axios';

export default function mock(cluster, defaults) {
  const instance = axios.create(defaults);

  if (process.env.NODE_ENV !== 'production') {
    instance.interceptors.request.use(config => {
      config.params = config.params || {};
      config.params.mockCluster = cluster;

      return config;
    }, error => {
      return Promise.reject(error);
    });
  }

  return instance;
}
