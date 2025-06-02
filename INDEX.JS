function berechne() {
  const subjects = [
    { unitsId: "ArabicUnits", gradeId: "ArabicGrade" },
    { unitsId: "HebrewUnits", gradeId: "HebrewGrade" },
    { unitsId: "EnglishUnits", gradeId: "EnglishGrade" },
    { unitsId: "MathUnits", gradeId: "MathGrade" },
    { unitsId: "HistoryUnits", gradeId: "HistoryGrade" },
    { unitsId: "MdniatUnits", gradeId: "MdniatGrade" },
    { unitsId: "DeenUnits", gradeId: "DeenGrade" },
    { unitsId: "T5sosUnits", gradeId: "T5sosGrade" },
    { unitsId: "T5sos2Units", gradeId: "T5sos2Grade" },
    { unitsId: "T5sos3Units", gradeId: "T5sos3Grade" },
    { unitsId: "T5sos4Units", gradeId: "T5sos4Grade" }
  ];

  let totalUnits = 0;
  let weightedSum = 0;

  subjects.forEach(subject => {
    const units = parseInt(document.getElementById(subject.unitsId).value) || 0;
    const grade = parseInt(document.getElementById(subject.gradeId).value) || 0;
    if (units > 0 && grade > 0) {
      totalUnits += units;
      weightedSum += units * grade;
    }
  });

  const average = totalUnits > 0 ? (weightedSum / totalUnits) : 0;
  const germanGrade = totalUnits > 0 ? (1 + 3 * ((100 - average) / 45)) : 0;

  document.getElementById("ShowGrades").innerHTML = `
    <h3>المعدل: ${average.toFixed(2)}</h3>
    <h3>المعدل بالنظام الألماني: ${germanGrade.toFixed(2)}</h3>
  `;
}
