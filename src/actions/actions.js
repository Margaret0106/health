import * as HealthAPI from './../api/HealthAPI';

export const addProject = (project) => {
  return {
    type: 'ADD_PROJECT',
    project
  }
};

export const addProjects = (projects) => {
  return {
    type: 'ADD_PROJECTS',
    projects
  }
};

export const startAddProject = (project) => {
  return (dispatch, getState) => {
    return HealthAPI.addProject(project).then((response) => {
      if (response.data.success === true) {
        dispatch(addProject(response.data.project));
      } else {
        console.log('Error adding project', response.data);
      }
    });
  };
};

export const startAddProjects = () => {
  return (dispatch, getState) => {
    return HealthAPI.getProjects().then((response) => {
      console.log('Got some projects', response.data);
      dispatch(addProjects(response.data));
    });
  };
}
