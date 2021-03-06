import { faker } from '@faker-js/faker';

export const activity = {
  activity: {
    id: faker.datatype.uuid(),
    activityTemplateID: 1,
    userID: null,
    plotID: null,
    startDate: '2021-09-13 14:11:26.942',
    endDate: '2021-09-13 14:11:26.942',
    synced: '2021-09-13 14:11:26.942',
    measurementCount: 3,
    restarted: 0,
    mobileAppVersion: '2.201',
    outsidePolygon: [
      [
        [-67.13734, 45.13745],
        [-66.96466, 44.8097],
        [-68.03252, 44.3252],
        [-69.06, 43.98],
        [-70.11617, 43.68405],
        [-70.64573, 43.09008],
        [-70.75102, 43.08003],
        [-70.79761, 43.21973],
        [-70.98176, 43.36789],
        [-70.94416, 43.46633],
        [-71.08482, 45.30524],
        [-70.66002, 45.46022],
        [-70.30495, 45.91479],
        [-70.00014, 46.69317],
        [-69.23708, 47.44777],
        [-68.90478, 47.18479],
        [-68.2343, 47.35462],
        [-67.79035, 47.06624],
        [-67.79141, 45.70258],
        [-67.13734, 45.13745],
      ],
    ],
    fullyCompleted: true,
    labels: ['test', 'something else'],
    comment: 'test',
    commentAudio: 'http://www.test.com',
    totalSteps: 6,
    preQuestionnaireID: 1,
    preQuestionnaireData: null,
    postQuestionnaireID: null,
    postQuestionnaireData: null,
    deviceInformationID: null,
  },
};

export const activity3 = {
  activity: {
    id: faker.datatype.uuid(),
    activityTemplateID: 1,
    userID: null,
    plotID: null,
    startDate: '2021-09-13 14:11:26.942',
    endDate: '2021-09-13 14:11:26.942',
    synced: '2021-09-13 14:11:26.942',
    measurementCount: 3,
    restarted: 0,
    mobileAppVersion: '2.201',
    outsidePolygon: [
      [
        [-67.13734, 45.13745],
        [-66.96466, 44.8097],
        [-68.03252, 44.3252],
        [-69.06, 43.98],
        [-70.11617, 43.68405],
        [-70.64573, 43.09008],
        [-70.75102, 43.08003],
        [-70.79761, 43.21973],
        [-70.98176, 43.36789],
        [-70.94416, 43.46633],
        [-71.08482, 45.30524],
        [-70.66002, 45.46022],
        [-70.30495, 45.91479],
        [-70.00014, 46.69317],
        [-69.23708, 47.44777],
        [-68.90478, 47.18479],
        [-68.2343, 47.35462],
        [-67.79035, 47.06624],
        [-67.79141, 45.70258],
        [-67.13734, 45.13745],
      ],
    ],
    fullyCompleted: true,
    labels: ['test', 'something else'],
    comment: 'test',
    commentAudio: 'http://www.test.com',
    totalSteps: 6,
    preQuestionnaireID: 1,
    preQuestionnaireData: null,
    postQuestionnaireID: null,
    postQuestionnaireData: null,
    deviceInformationID: null,
  },
};

export const activity2 = {
  activity: {
    id: faker.datatype.uuid(),
    activityTemplateID: 1,
    userID: null,
    plotID: null,
    startDate: '2021-09-13 14:11:26.942',
    endDate: '2021-09-13 14:11:26.942',
    synced: '2021-09-13 14:11:26.942',
    measurementCount: 3,
    restarted: 0,
    mobileAppVersion: '2.201',
    outsidePolygon: null,
    fullyCompleted: true,
    labels: ['test', 'something else'],
    comment: 'test',
    commentAudio: 'http://www.test.com',
    totalSteps: 6,
    preQuestionnaireID: 1,
    preQuestionnaireData: null,
    postQuestionnaireID: null,
    postQuestionnaireData: null,
    deviceInformationID: null,
  },
};
