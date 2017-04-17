import React from 'react';
import ReactDOM from 'react-dom';
import * as actions from './../../actions/actions';

describe('Actions', () => {
  test('should generate ADD_PROJECT action', () => {
    const action = {
      type: 'ADD_PROJECT',
      project: {
        title: 'Demo',
        url: 'https://google.com',
      }
    };

    const result = actions.addProject(action.project);
    expect(result).toEqual(action);
  });

  test('should generate ADD_PROJECTS action', () => {
    const action = {
      type: 'ADD_PROJECTS',
      projects: [
        {
          title: 'Demo',
          url: 'https://google.com',
        }
      ]
    };

    const result = actions.addProjects(action.projects);
    expect(result).toEqual(action);
  });

  test('should generate DELETE_PROJECT action', () => {
    const action = {
      type: 'DELETE_PROJECT',
      id: 1
    };

    const result = actions.deleteProject(action.id);
    expect(result).toEqual(action);
  });

  test('should generate CONFIRM_DELETE_PROJECT action', () => {
    const action = {
      type: 'CONFIRM_DELETE_PROJECT',
      id: 1
    };

    const result = actions.confirmDeleteProject(action.id);
    expect(result).toEqual(action);
  });

  test('should generate EDIT_PROJECT action', () => {
    const action = {
      type: 'EDIT_PROJECT',
      id: 1
    };

    const result = actions.editProject(action.id);
    expect(result).toEqual(action);
  });
});
