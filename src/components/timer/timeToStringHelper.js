const timeToString = (counter) => {
  const hours = Math.floor((counter / 1000 / 60 / 60) % 60);
  const minuts = Math.floor((counter / 1000 / 60) % 60);
  const seconds = Math.floor((counter / 1000) % 60);
  return (
    `${(hours < 10 ? `0${hours}` : hours)} :
    ${(minuts < 10 ? `0${minuts}` : minuts)} :
    ${(seconds < 10 ? `0${seconds}` : seconds)}`
  );
}

export default timeToString;
