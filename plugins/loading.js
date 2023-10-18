export default (context, inject) => {
  inject('loadingStart', function() {
    window.$nuxt.$emit('loading-start');
  });
  inject('loadingFinish', function() {
    window.$nuxt.$emit('loading-finish');
  });
};