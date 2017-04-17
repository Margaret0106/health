import axios from 'axios';
import qs from 'qs';

const apiPath = process.env.REACT_APP_API_PATH;

const apiUrls = {
  getProjects: `${apiPath}/v1/projects/`,
  postProjects: `${apiPath}/v1/projects/`
};

export const getProjects = () => axios.get(apiUrls.getProjects);

export const addProject = (project) => axios.post(apiUrls.postProjects, qs.stringify(project));
