function projectsInfo(input) {
  let architectName = input[0];
  let numberOfProjects = Number(input[1]);
  let neededHours = numberOfProjects * 3;
  console.log(
    `The architect ${architectName} will need ${neededHours} hours to complete ${numberOfProjects} project/s.`
  );
}

projectsInfo(["George ", "4 "]);
