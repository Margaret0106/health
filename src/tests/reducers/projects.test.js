import React from 'react';
import ReactDOM from 'react-dom';
import projects from './../../reducers/projects';

describe('Projects', () => {

  describe('projectsReducer', () => {
    test('should add project to state on ADD_PROJECT action', () => {
      const action = {
        type: 'ADD_PROJECT',
        project: {
          id: 1,
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
            id: 1,
            name: 'DEMO 1',
            url: 'https://google.com'
          },
          {
            id: 2,
            name: 'DEMO 2',
            url: 'https://youtube.com'
          }
        ]
      };

      const result = projects([], action);
      expect(result.length).toEqual(2);
      expect(result).toEqual(action.projects);
    });

    test('should delete project from state on DELETE_PROJECT action', () => {
      const testProjects = [
        {
          id: 1,
          name: 'DEMO 1',
          url: 'https://google.com'
        },
        {
          id: 2,
          name: 'DEMO 2',
          url: 'https://youtube.com'
        }
      ];
      const action = {
        type: 'DELETE_PROJECT',
        id: 1
      }

      const result = projects(testProjects, action);
      expect(result.length).toEqual(1);
      expect(result).toContain(testProjects[1]);
    });
  });

});
