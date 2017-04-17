import axios from 'axios';
import qs from 'qs';

const apiUrls = {
  getProjects: 'http://api.health.rocketfirm.net/v1/projects/',
  postProjects: 'http://api.health.rocketfirm.net/v1/projects/'
};

export const getProjects = () => axios.get(apiUrls.getProjects);

export const addProject = (project) => axios.post(apiUrls.postProjects, qs.stringify(project));
