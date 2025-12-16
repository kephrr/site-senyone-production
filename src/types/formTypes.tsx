export type QuestionAnswer = number | string | number[];

export function calculateSavings (answers?: Record<string, QuestionAnswer>) {
    const hoursPerWeek = answers.volume as number || 10;
    const costPerHour = answers.cout as number || 35;
    const automationRate = answers.taux as number || 70;
    const MULTIPLICATEUR_COUT_IMPL = 0.15;

    const annualHours = hoursPerWeek * 52;
    const automatableHours = annualHours * automationRate/100;
    const annualCost = annualHours * costPerHour;
    const weeklyCost = hoursPerWeek * costPerHour;
    const annualSavings = automatableHours * costPerHour;
    const implementationCost = annualCost * MULTIPLICATEUR_COUT_IMPL;
    const roiNet = annualSavings - implementationCost
    const weeklySavings = annualSavings / 52;
    
    const roi = ((roiNet) / implementationCost) * 100;
    const paybackPeriod = implementationCost / (annualSavings / 12);
    const etpLibere = automatableHours / annualHours;

    const productivityRate = ((annualHours - automatableHours) / annualHours) *100
    return {
      hoursPerWeek: hoursPerWeek,
      costPerHour: costPerHour,
      automationRate: automationRate,
      weeklyCost: Math.round(weeklyCost),
      annualCost: Math.round(annualCost),
      automatableHours: Math.round(automatableHours),
      weeklySavings: Math.round(weeklySavings),
      annualSavings: Math.round(annualSavings),
      roi: Math.round(roi),
      roiNet: Math.round(roiNet),
      paybackPeriod: Math.round(paybackPeriod),
      monthlySavings: Math.round(weeklySavings * 4.33),
      implementationCost: Math.round(implementationCost),
      etpLibere: Math.round(etpLibere),
      productivityRate: Math.round(productivityRate)
    };
};