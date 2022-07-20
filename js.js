const pupilOne = {
    name: 'Vasy',
    avgGrade: 4
}

const pupilTwo = {
    name: 'Pety',
    avgGrade: 5
}

const pupilThree = {
    name: 'Any',
    avgGrade: 5
}

const mailPupil = [pupilOne, pupilTwo];
const femalePupil = [pupilThree];

const allPupil = [...mailPupil, ...femalePupil]

allPupil.forEach((value)=>{
    value.cheket = true
});

  console.log (allPupil)
  