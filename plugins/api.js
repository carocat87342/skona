import Api from '@/api';

export default (context, inject) => {
  const api = new Api(context.app.$config.WORDPRESS_API_URL, context.$axios);

  inject('api', api);
};