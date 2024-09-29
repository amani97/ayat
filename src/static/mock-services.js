export const servicesMockData = [
  {
    id: 1,
    name: "Service 1",
    children: [
      {
        id: 2,
        name: "Sub Service 1",
        children: [
          { id: 3, name: "Sub Sub Service 1" },
          { id: 4, name: "Sub Sub Service 2" },
        ],
      },
      {
        id: 5,
        name: "Sub Service 2",
        children: [{ id: 6, name: "Sub Sub Service 3" }],
      },
    ],
  },
  {
    id: 7,
    name: "Service 2",
    children: [
      {
        id: 8,
        name: "Sub Service 3",
        children: [{ id: 9, name: "Sub Sub Service 4" }],
      },
    ],
  },
];
