class Post {
  constructor(axios) {
    this.axios = axios;
  }

  getPosts({ limit, sort, category, page }) {
    return this.axios.get('/posts', {
      limit,
      sort,
      category,
      page
    });
  }

  getPost({ name }) {
    return this.axios.get(`/posts/${name}`);
  }

  addViews({ hash }) {
    return this.axios.get(`/base/${hash}`);
  }

  getMostReadPosts({ limit }) {
    return this.axios.get('/most-read-posts', {
      limit
    });
  }
}

export default Post;