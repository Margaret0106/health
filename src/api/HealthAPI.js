import axios from 'axios';
import qs from 'qs';

const apiPath = process.env.REACT_APP_API_PATH || 'http://localhost:8080';

const apiUrls = {
  getProjects: `${apiPath}/v1/projects/`,
  postProjects: `${apiPath}/v1/projects/`,

  getPsAccounts: `${apiPath}/v1/ps-account/`,
  postPsAccount: `${apiPath}/v1/ps-account/`,
  deletePsAccount: (id) => `${apiPath}/v1/ps-account/${id}/`,
  updatePsAccount: (id) => `${apiPath}/v1/ps-account/${id}/`,
};

export const getProjects = () => axios.get(apiUrls.getProjects);

export const addProject = (project) => axios.post(apiUrls.postProjects, qs.stringify(project));

export const getPsAccounts = () => axios.get(apiUrls.getPsAccounts);
export const addPsAccount = (psAccount) => axios.post(apiUrls.postPsAccount, qs.stringify(psAccount));
export const deletePsAccount = (psAccountId) => axios.delete(apiUrls.deletePsAccount(psAccountId));
