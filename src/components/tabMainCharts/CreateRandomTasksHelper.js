const randomTasks = () => {
  const random = (min, max) => Math.round(Math.random() * (max - min) + min);
  let newTasksArray = [];
  let randomStart = new Date().getTime() - 43200000;
  for (let i = 0; i < random(10, 15); i++) {
    const randomSpend = random(600000, 5400000);
    const randomEnd = randomStart + randomSpend;
    newTasksArray = [...newTasksArray, {
      id: randomStart,
      start: randomStart,
      end: randomEnd,
      spend: randomSpend,
      isCompleted: true,
      hour: new Date(randomStart).getHours(),
      name: `random task №${i + 1}`,
    }];
    randomStart = randomEnd + random(0, 600000);
  }
  return newTasksArray;
};

export default randomTasks;
