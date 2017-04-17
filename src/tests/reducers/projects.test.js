import React from 'react';
import ReactDOM from 'react-dom';
import projects from './../../reducers/projects';

describe('Projects', () => {

  describe('projectsReducer', () => {
    test('should add project to state on ADD_PROJECT action', () => {
      const action = {
        type: 'ADD_PROJECT',
        project: {
          name: 'DEMO',
          url: 'https://google.com'
        }
      };

      const result = projects([], action);
      expect(result.length).toEqual(1);
      expect(result).toContain(action.project);
    });

    test('should add multiple projects on ADD_PROJECTS action', () => {
      const action = {
        type: 'ADD_PROJECTS',
        projects: [
          {
            name: 'DEMO 1',
            url: 'https://google.com'
          },
          {
            name: 'DEMO 2',
            url: 'https://youtube.com'
          }
        ]
      };

      const result = projects([], action);
      expect(result.length).toEqual(2);
      expect(result).toEqual(action.projects);
    });
  });

});
