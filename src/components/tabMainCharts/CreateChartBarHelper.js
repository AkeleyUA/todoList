
const chartsArray = (hourInDay, tasks) => {
  let charts = [];
  let extraTime = 0;
  for (let i = 0; i < hourInDay; i += 1) {
    const findTask = tasks.filter((task) => task.hour === i);
    const spend = findTask.map((task) => task.spend);
    let spendSum = extraTime;
    for (let j = 0; j < spend.length; j += 1) {
      spendSum += Math.floor(spend[j] / 1000 / 60);
    }
    const minutesLeft = (findTask[0] !== undefined
      ? 60 - new Date(findTask[0].start).getMinutes() + extraTime
      : 60
    );
    const duration = (spendSum > minutesLeft
      ? (extraTime = spendSum - minutesLeft, minutesLeft)
      : (extraTime = 0, spendSum)
    );
    charts = [...charts, { hour: i, duration }];
  }
  return charts;
};

export default chartsArray;
