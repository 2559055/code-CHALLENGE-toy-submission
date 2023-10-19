
function calculateGrade(marks) {
    let grade;
  
    switch (true) {
      case marks > 79:
        grade = "A";
        break;
      case marks >= 60:
        grade = "B";
        break;
      case marks >= 50:
        grade = "C";
        break;
      case marks >= 40:
        grade = "D";
        break;
      default:
        grade = "E";
    }
  
    return grade;
  }
  
  function promptForMarks() {
    const input = prompt("Enter the student's marks (between 0 and 100):");
    const marks = parseFloat(input);
  
    if (isNaN(marks) || marks < 0 || marks > 100) {
      return "Invalid input. Marks should be between 0 and 100.";
    }
  
    const grade = calculateGrade(marks);
    return `The student's grade is: ${grade}`;
  }
  
  const result = promptForMarks(60);
  console.log(result);


  function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates, NHIF, and NSSF deductions
    const TAX_RATE = 0.15; // 15% tax rate
    const NHIF_RATE = 0.02; // 2% NHIF rate
    const NSSF_RATE = 0.06; // 6% NSSF rate
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate payee (tax)
    const tax = grossSalary * TAX_RATE;
  
    // Calculate NHIF deductions
    const nhifDeductions = grossSalary * NHIF_RATE;
  
    // Calculate NSSF deductions
    const nssfDeductions = grossSalary * NSSF_RATE;
  
    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
  
    return {
      grossSalary,
      tax,
      nhifDeductions,
      nssfDeductions,
      netSalary
    };
  }
  
  
  const basicSalary = 50000;
  const benefits = 10000;
  
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  
  console.log("Basic Salary:", basicSalary);
  console.log("Benefits:", benefits);
  console.log("Gross Salary:", salaryDetails.grossSalary);
  console.log("Payee (Tax):", salaryDetails.tax);
  console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
  console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
  console.log("Net Salary:", salaryDetails.netSalary);
  function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsThreshold = 12;
  
    if (speed <= speedLimit) {
      console.log("Ok");
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      
      if (demeritPoints >= pointsThreshold) {
        console.log(`Points: ${demeritPoints}, License suspended`);
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
  }
  
  
  const carSpeed = 80;
  calculateDemeritPoints(carSpeed);
  