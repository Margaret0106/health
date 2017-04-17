export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        action.project
      ];

    case 'ADD_PROJECTS':
      return [
        ...state,
        ...action.projects
      ];

    default:
      return state;
  }
};
