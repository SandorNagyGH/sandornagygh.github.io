const displayedSource=document.getElementById("source");
const searchInputLocation=document.getElementById("input-location");
const searchInputNumber=document.getElementById("input-number-of");
const searchInputOwnershipType=document.getElementById("input-ownership-type");
const searchInputCityCentre=document.getElementById("input-city-centre");
const searchInputCurrency=document.getElementById("input-ccurrency");
const calcInputCurrency=document.getElementById("input-ccurrency2");
const searchBtn=document.getElementById("search-button");
const calcInputCol=document.getElementById("input-col");
const calcInputCoh=document.getElementById("input-coh");
const calcInputRoi=document.getElementById("input-roi");
const calculateBtn=document.getElementById("calculate-button");
const displayedLocation=document.getElementById("displayed-location");
const displayedCurrency=document.getElementById("displayed-currency");
const displayedSalary=document.getElementById("displayed-salary");
const displayedEmcName=document.getElementById("displayed-emc-name");
const displayedEmc=document.getElementById("displayed-emc");
const displayedRentName=document.getElementById("displayed-rent-name");
const displayedRent=document.getElementById("displayed-rent");
const displayedPropertyName=document.getElementById("displayed-property-name");
const displayedProperty=document.getElementById("displayed-property");
const displayedTotalP=document.getElementById("displayed-total-positive");
const displayedTotalN=document.getElementById("displayed-total-negative");
const displayedLocalCrclLocation=document.getElementById("local-crcl1");
const displayedLocalCrclNr=document.getElementById("local-crcl2");
const displayedHousingName=document.getElementById("local-crcl-housing");
const displayedLocalCrclLoc=document.getElementById("local-crcl3");
const displayedLocalCrclAmount=document.getElementById("local-crcl4");
const displayedPersonalCol=document.getElementById("personal-crcl1");
const displayedPersonalCoh=document.getElementById("personal-crcl2");
const displayedPersonalCrcl=document.getElementById("personal-crcl3");
var localCurrency, appliedCurrency, personalCurrency
var appCurrExchangeRate=1
var averageSalary, averageEmc, averageEmc4
var averageRent1CC, averageRent1S, averageRent3CC, averageRent3S
var emcCalc, rentCalc, propCalc, totalCalc, localCrcl
var averagePropertyPriceCC, averagePropertyPriceS
var personalCol, personalCoh, personalCrcl

function fetchData() {
    if (searchInputLocation.value==="0"){
        alert("Please select a location.");
    } else {
        displayedLocation.textContent=searchInputLocation.value
        displayedLocalCrclLocation.textContent=searchInputLocation.value
        displayedLocalCrclNr.textContent=searchInputNumber.value
        document.querySelectorAll('.displayed-local-crcl').forEach(el => {
            el.style.display = 'inline-block';
        });


        fetch(`https://raw.githubusercontent.com/SandorNagyGH/crcl/refs/heads/main/${searchInputLocation.value}.json`)
        .then((res)=>{
            if(!res.ok){
                alert("Data not found");
            }
            return res.json();}
            )
        .then((data)=>{
            localCurrency=data.Currency
            averageSalary=data.Salary
            averageEmc=data.EMC[0]
            averageEmc4=data.EMC[1]
            averageRent1CC=data.Rent[0]
            averageRent1S=data.Rent[1]
            averageRent3CC=data.Rent[2]
            averageRent3S=data.Rent[3]
            averagePropertyPriceCC=data.BuyApartment[0]
            averagePropertyPriceS=data.BuyApartment[1]
            fetchExchangeRate()
        })
        .catch((err)=>{console.error(`There was an error: ${err}`);});
    }
}
function fetchExchangeRate() {
    if(searchInputCurrency.value=="0" || searchInputCurrency.value==localCurrency){
        appliedCurrency=localCurrency
        appCurrExchangeRate=1
        displayData()
    } else {
        appliedCurrency=searchInputCurrency.value
        fetch(`https://raw.githubusercontent.com/SandorNagyGH/crcl/refs/heads/main/exchangeRates.json`)
        .then((res)=>{
            if(!res.ok){
                alert("Data not found");
            }
            return res.json();}
            )
        .then((data)=>{
            appCurrExchangeRate= data[localCurrency][localCurrency+appliedCurrency];
            displayData()
        })
        .catch((err)=>{console.error(`There was an error: ${err}`);});
    }
}

function formatData(curr, amount){
    return new Intl.NumberFormat('en-GB', {style: 'currency',
        currency: curr, minimumFractionDigits: 0, maximumFractionDigits: 0,}).format(amount);
}

function displayData(){
    emcCalc=0
    rentCalc=0
    propCalc=0
    if(searchInputCityCentre.value=="city-centre"){
        displayedLocalCrclLoc.textContent="city center"
    } else {
        displayedLocalCrclLoc.textContent="outskirts"
    }
    if(searchInputOwnershipType.value=="rent"){
        displayedPropertyName.style.display = "none";
        displayedProperty.style.display = "none";
        displayedRentName.style.display = "inline-block";
        displayedRent.style.display = "inline-block";
        displayedLocalCrclLoc.style.display = "inline-block";
        displayedHousingName.style.display = "inline-block";
    }
    if(searchInputOwnershipType.value=="own"){
        displayedRentName.style.display = "none";
        displayedRent.style.display = "none";
        displayedPropertyName.style.display = "inline-block";
        displayedProperty.style.display = "inline-block";
        displayedLocalCrclLoc.style.display = "none";
        displayedHousingName.style.display = "none";
    }
    if(searchInputNumber.value=="1"){
        displayedEmcName.textContent="Estimated monthly costs for a single person:"
        emcCalc=averageEmc
        if(searchInputOwnershipType.value=="rent"){
            if(searchInputCityCentre.value=="city-centre"){
                displayedRentName.textContent="Average monthly rent for a 1 bed apartment in "+searchInputLocation.value+" city centre:"
                rentCalc=averageRent1CC
            } else {
                displayedRentName.textContent="Average monthly rent for a 1 bed apartment outskirts of "+searchInputLocation.value+":"
                rentCalc=averageRent1S
            }
        } else {
            if(searchInputCityCentre.value=="city-centre"){
                displayedPropertyName.textContent="Average price of a 50m² 1 bed apartment in "+searchInputLocation.value+" city centre:"
                propCalc=averagePropertyPriceCC*50
            } else {
                displayedPropertyName.textContent="Average price of a 50m² 1 bed apartment in the outskirts of "+searchInputLocation.value+":"
                propCalc=averagePropertyPriceS*50
            }
        }
    }
    if(searchInputNumber.value=="2"){
        displayedEmcName.textContent="Estimated monthly costs for 2:"
        emcCalc=averageEmc*1.9
        if(searchInputOwnershipType.value=="rent"){
            if(searchInputCityCentre.value=="city-centre"){
                displayedRentName.textContent="Average monthly rent for a 1 bed apartment in "+searchInputLocation.value+" city centre:"
                rentCalc=averageRent1CC
            } else {
                displayedRentName.textContent="Average monthly rent for a 1 bed apartment outskirts of "+searchInputLocation.value+":"
                rentCalc=averageRent1S
            }
        } else {
            if(searchInputCityCentre.value=="city-centre"){
                displayedPropertyName.textContent="Average price of a 50m² 1 bed apartment in "+searchInputLocation.value+" city centre:"
                propCalc=averagePropertyPriceCC*50
            } else {
                displayedPropertyName.textContent="Average price of a 50m² 1 bed apartment in the outskirts of "+searchInputLocation.value+":"
                propCalc=averagePropertyPriceS*50
            }
        }
    }
    if(searchInputNumber.value=="3"){
        displayedEmcName.textContent="Estimated monthly costs for 3:"
        emcCalc=averageEmc*2.8
        if(searchInputOwnershipType.value=="rent"){
            if(searchInputCityCentre.value=="city-centre"){
                displayedRentName.textContent="Average monthly rent for a 3 bed apartment in "+searchInputLocation.value+" city centre:"
                rentCalc=averageRent3CC
            } else {
                displayedRentName.textContent="Average monthly rent for a 3 bed apartment outskirts of "+searchInputLocation.value+":"
                rentCalc=averageRent3S
            }
        } else {
            if(searchInputCityCentre.value=="city-centre"){
                displayedPropertyName.textContent="Average price of a 100m² 3 bed apartment in "+searchInputLocation.value+" city centre:"
                propCalc=averagePropertyPriceCC*100
            } else {
                displayedPropertyName.textContent="Average price of a 100m² 3 bed apartment in the outskirts of "+searchInputLocation.value+":"
                propCalc=averagePropertyPriceS*100
            }
        }
    }
    if(searchInputNumber.value=="4"){
        displayedEmcName.textContent="Estimated monthly costs for 4:"
        emcCalc=averageEmc4
        if(searchInputOwnershipType.value=="rent"){
            if(searchInputCityCentre.value=="city-centre"){
                displayedRentName.textContent="Average monthly rent for a 3 bed apartment in "+searchInputLocation.value+" city centre:"
                rentCalc=averageRent3CC
            } else {
                displayedRentName.textContent="Average monthly rent for a 3 bed apartment outskirts of "+searchInputLocation.value+":"
                rentCalc=averageRent3S
            }
        } else {
            if(searchInputCityCentre.value=="city-centre"){
                displayedPropertyName.textContent="Average price of a 100m² 3 bed apartment in "+searchInputLocation.value+" city centre:"
                propCalc=averagePropertyPriceCC*100
            } else {
                displayedPropertyName.textContent="Average price of a 100m² 3 bed apartment in the outskirts of "+searchInputLocation.value+":"
                propCalc=averagePropertyPriceS*100
            }
        }
    }
    averageSalary=averageSalary*appCurrExchangeRate
    emcCalc=emcCalc*appCurrExchangeRate
    rentCalc=rentCalc*appCurrExchangeRate
    propCalc=propCalc*appCurrExchangeRate
    localCrcl=(emcCalc+rentCalc)*12/0.06
    displayedSalary.textContent=formatData(appliedCurrency, averageSalary)
    displayedEmc.textContent=formatData(appliedCurrency, emcCalc)
    displayedRent.textContent=formatData(appliedCurrency, rentCalc)
    displayedProperty.textContent=formatData(appliedCurrency, propCalc)
    displayedLocalCrclAmount.textContent=formatData(appliedCurrency, localCrcl)
    calculateTotal()
}

function calculateTotal(){
    displayedTotalP.textContent=""
    displayedTotalN.textContent=""
    totalCalc=averageSalary-emcCalc-rentCalc
    if(totalCalc>0){
        displayedTotalP.textContent=formatData(appliedCurrency, totalCalc)
    } else {
        displayedTotalN.textContent=formatData(appliedCurrency, totalCalc)
    }
}
function calculatePersonalCrcl(){
    personalCurrency=calcInputCurrency.value
    personalCol=Number(calcInputCol.value)
    displayedPersonalCol.textContent=formatData(personalCurrency, personalCol)
    personalCoh=Number(calcInputCoh.value)
    displayedPersonalCoh.textContent=formatData(personalCurrency, personalCoh)
    personalCrcl=(personalCol+personalCoh)*12/calcInputRoi.value
    displayedPersonalCrcl.textContent=formatData(personalCurrency, personalCrcl)
    document.querySelectorAll('.displayed-personal-crcl').forEach(el => {
            el.style.display = 'inline-block';
        });
}

searchBtn.addEventListener("click", fetchData);

calculateBtn.addEventListener("click", calculatePersonalCrcl);
