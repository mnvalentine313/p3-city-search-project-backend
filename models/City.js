const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  name: String,
  comment: String
});

const citySchema = new Schema({
  city: String,
  reviews: [reviewSchema],
  bestPlacesData: {
    link: String,
    rank: Number,
    overall: Number,
    desirability: Number,
    value: Number,
    jobMarket: Number,
    qualityOfLife: Number,
    netMigration: Number
  },
  state: {
    stateShort: String,
    stateFull: String
  },
  population: {
    popEst2018: String,
    popChange: String,
    Pop2010: String
  },
  ageAndGender: {
    underFive: String,
    underEighteen: String,
    SixtyFiveAndOver: String,
    female: String
  },
  raceAndOrigin: {
    whiteAlone: String,
    blackAlone: String,
    nativeAlone: String,
    asianAlone: String,
    pacificIslanderAlone: String,
    twoPlusRaces: String,
    hispanicOrLatino: String,
    whiteAloneNoneHispanicOrLatino: String,
    foreignBorn: String
  },
  veterans: String,
  housing: {
    ownerOccupied: String,
    medianValueOwnerOccupied: String,
    medianMonthlyCostsWithMortgage: String,
    medianMonthlyCostsWithoutMortgage: String,
    medianRent: String
  },
  households: {
    NumberOfhouseholds: String,
    personsPerHousehold: Number,
    sameHouseOneYearAgo: String,
    secondLanguageSpokenInHome: String,
    householdComputer: String,
    householdBroadband: String
  },
  education: {
    highSchoolGraduates: String,
    bachelorsDegreees: String
  },
  employmentAndHealth: {
    disability: String,
    withoutHealthInsurance: String,
    laborForce: String,
    femaleLaborForce: String,
    accomodationsAndFoodServSales: String,
    dailyCommuteInMinutes: Number,
    medianHouseholdIncome: String,
    incomePerCapita: String,
    poverty: String,
    healthCareAndSocialAssistanceRevenue: String
  },
  business: {
    shipments: String,
    wholesalerSales: String,
    retailSales: String,
    retailSalesPerCapita: String,
    firms: String,
    maleOwnedFirms: String,
    femaleOwnedFirms: String,
    minorityOwnedFirms: String,
    nonminorityOwnedFirms: String,
    veteranOwnedFirms: String,
    nonveteranOwnedFirms: String
  },
  geography: {
    popPerSqrMile: String,
    areaInSqrMiles: String
  }
});

const Cities = mongoose.model("Cities", citySchema)
module.exports = Cities;