
export function getCategories(categories) {
  return Array.isArray(categories)
    ? categories.map(category => category.name).join(' | ')
    : '';
}

export function removeFacebookHook() {
  const fbParam = 'fbclid';

  // Check if param exists
  if (location.search.includes(`${fbParam}=`)) {
    let replace = '';

    try {
      const url = new URL(location);
      url.searchParams.delete(fbParam);
      replace = url.href;

      // Check if locale exists
      if (window.location.href.includes(this.locale)) {
        window.history.replaceState(null, null, `/${this.locale}`);
      }
    } catch (ex) {
      const regExp = new RegExp(`[?&]${fbParam}=.*$`);
      replace = location.search.replace(regExp, '');
      replace = `${location.pathname}${replace}${location.hash}`;
    }

    history.replaceState(null, '', replace);
  }
}
export function validURL(str) {
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
}