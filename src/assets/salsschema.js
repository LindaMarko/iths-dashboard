const schedule = [
  {
    day: 'Monday',
    schedule: [
      {
        class: 'WU21',
        classroom: 'Floor 5: room 5',
      },
      {
        class: '.NET21',
        classroom: 'Floor 5: room 2',
      },
      {
        class: 'FEU21',
        classroom: 'Floor 5: room 1',
      },
      {
        class: 'ITP21',
        classroom: 'Floor 6: room 8',
      },
      {
        class: '.NET20',
        classroom: 'Floor 5: room 4',
      },
      {
        class: 'JSU20',
        classroom: 'Floor 5: room 3',
      },
    ],
  },
  {
    day: 'Tuesday',
    schedule: [
      {
        class: 'AU21',
        classroom: 'Floor 5: room 5',
      },
      {
        class: 'JSU21',
        classroom: 'Floor 5: room 3',
      },
      {
        class: 'JU21',
        classroom: 'Floor 5: room 2',
      },
      {
        class: 'WU20',
        classroom: 'Floor 6: room 7',
      },
      {
        class: '.NET20',
        classroom: 'Floor 6: room 8',
      },
      {
        class: 'FEU20',
        classroom: 'Floor 5: room 5',
      },
      {
        class: 'AU20',
        classroom: 'Floor 5: room 4',
      },
    ],
  },
  {
    day: 'Wednesday',
    schedule: [
      {
        class: 'WU21',
        classroom: 'Floor 5: room 5',
      },
      {
        class: '.NET21',
        classroom: 'Floor 5: room 2',
      },
      {
        class: 'ITP21',
        classroom: 'Floor 6: room 8',
      },
      {
        class: 'FEU21',
        classroom: 'Floor 5: room 1',
      },
      {
        class: 'JSU21',
        classroom: 'Floor 5: room 1',
      },
    ],
  },
  {
    day: 'Thursday',
    schedule: [
      {
        class: 'AU21',
        classroom: 'Floor 5: room 1',
      },
      {
        class: 'JU21',
        classroom: 'Floor 5: room 2',
      },
      {
        class: 'WU20',
        classroom: 'Floor 6: room 8',
      },
      {
        class: 'FEU20',
        classroom: 'Floor 5: room 5',
      },
      {
        class: 'AU20',
        classroom: 'Floor 5: room 4',
      },
    ],
  },
  {
    day: 'Friday',
    schedule: [
      {
        class: 'WU20',
        classroom: 'Floor 5: room 4',
      },
      {
        class: '.NET20',
        classroom: 'Floor 5: room 2',
      },
    ],
  },
];

export const getCurrentDaySchedule = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const time = new Date();
  const day = time.getDay();
  const currentDay = `${days[day]}`;
  const correctDayScedule = schedule.find((el) => el.day === currentDay);

  const currentDaySchedule = correctDayScedule.schedule;

  return currentDaySchedule;
};
