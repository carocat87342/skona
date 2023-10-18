import axios from 'axios';
import Api from '../api/index';
import { GENERATE_CASE_STUDY_PAGES_LIMIT, GENERATE_POST_PAGES_LIMIT } from '../constants';

const api = new Api(`${process.env.HEADLESS_URL}/wp-json`, axios);

export const dynamicRoutes = async() => {
  const data = await api.post.getPosts({ limit: GENERATE_POST_PAGES_LIMIT });

  const postsRoutes = data.result.map(post => ({
    route: `blog/${post.post_name}`
  }));

  const caseStudiesData = await api.caseStudy.getCaseStudies({
    limit: GENERATE_CASE_STUDY_PAGES_LIMIT
  });

  const caseStudiesRoutes = caseStudiesData.result.map(caseStudy => ({
    route: `work/${caseStudy.post_name}`
  }));

  return postsRoutes.concat(caseStudiesRoutes);
};