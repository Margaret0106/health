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
});
