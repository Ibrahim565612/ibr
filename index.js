// Define the sales target and date range
const monthlySalesTarget = 435;
const startDate = new Date('2023-01-01');
const endDate = new Date('2023-12-31');

// Define the number of working days per week (excluding Fridays)
const workingDaysPerWeek = 6;

// Calculate the number of days in the date range
const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24) + 1);

// Calculate the total target sales for the date range
const totalTargetSales = monthlySalesTarget * (totalDays / 30);

// Calculate the daily target sales
const dailyTargetSales = totalTargetSales / (totalDays / workingDaysPerWeek);

console.log(`Farah's Monthly Sales Target: $${monthlySalesTarget}`);
console.log(`Daily Target Sales (Excluding Fridays): $${dailyTargetSales.toFixed(2)}`);
console.log(`Total Target Sales for the Date Range: $${totalTargetSales.toFixed(2)}`);

