//All data in table format

let countSort='';
let StylebyCount=false;
let StylebyAge=false;
let  StyleCountRow=false;
let StyleAgeRow=false;
let person=[
    {"name":"Jack", "country":"USA", "age":35},
    {"name":"Amit", "country":"India", "age":38},
    {"name":"Edward", "country":"USA", "age":41},
    {"name":"Vishal", "country":"India", "age":30},
    {"name":"Annie", "country":"USA", "age":27},
    {"name":"Nick", "country":"France", "age":32},
    {"name":"Francis", "country":"France", "age":44},
    {"name":"Preeti", "country":"India", "age":25},
    {"name":"Sophie", "country":"France", "age":29},
    {"name":"Harpreet", "country":"India", "age":48},
    {"name":"Bob", "country":"USA", "age":21}
];


function showPersonDetails(person){
    const showMap=person.map(function(per){
        console.log(per);
       // let str='<li class=\''+getClassPersons1(per)+'\'' +'\''+getClassPersons2(per)+'\'>';
        let str='<tr class=\''+getClassPersons(per)+'\'>';
        str+='<td class=\'td1\'>'+per.name+'</td>';
        str+='<td class=\''+getclassCountry(per.country ,StyleCountRow)+'\'>'+per.country+'</td>';
        str+='<td class=\''+getclassAge(per.age,StyleAgeRow)+'\'>'+per.age+'</td>';
       str+='<td><button class=\'remBtn\' onclick=\'remove(\"'+per.name+'")\'>Remove</button></td>';
        str+='<td><button  class=\'addBtn\' onclick=\'Add1toAge("'+per.name+'")\'>Add 1 to Age</button></td>'
        str+='</tr>';
        return str;
        // // str=per.name+'  '+per.country+'  '+per.age;
        // // console.log(str);
        // return '<li>'+str+'</li>';
    });

    console.log(showMap);
    let header='<tr>';
    header+='<th class=\'th1\' onclick=\'sort(0)\'>Name</th>';
    header+='<th class=\'th1\' onclick=\'sort(1)\'>Country</th>';
    header+='<th class=\'th1\' onclick=\'sort(2)\'>Age</th>';
    header+='<th class=\'th1\'></th>';
    header+='<th class=\'th1\'></th>';
    header+='</tr>';


    let str='<table class=\'table1\'>'+header+showMap.join('')+'</table>';
    let element=document.getElementById('data');
    element.innerHTML=str;
}
// a) Show -Show all the people
function showDetails(){
    StylebyCount=false;
    StylebyAge=false;
    StyleCountRow=true;
    StyleAgeRow=true;
    showPersonDetails(person,StyleCountRow,StyleAgeRow);
}

//b) Hide -Do not show anybody
function hideDetails(){
    let element=document.getElementById('data');
    element.innerHTML='';
}

//c) Sort by name
function sortName(){
    person.sort(sortNameAsc);
    showDetails();
}
function sortNameAsc(per1,per2){
    let name1=per1.name;
    let name2=per2.name;
    return name1.localeCompare(name2);
}

//d) Sort by country
function sortCountry(){
    countSort= person.sort(sortCountryAsc);
    showDetails();
}
function sortCountryAsc(per1,per2){
    let coun1=per1.country;
    let coun2=per2.country;
    return coun1.localeCompare(coun2);
}

//e) Sort by age
function sortAge(){
    person.sort(sortAgeAsc);
    showDetails();
}
function sortAgeAsc(per1,per2){
    let age1=per1.age;
    let age2=per2.age;
        if(age1>age2)
            return 1;//later
        else if(age1<age2)
            return -1;//earlier
        else 
            return 0;//same
}


//f) Sort by country and name , sorted by country and within country sorted by name
function sortCounName(){
    sortCountry();
    countSort.sort(sortCounNameAsc);
    showDetails();
}
function sortCounNameAsc(per1,per2){
    let name1=per1.name;
    let name2=per2.name;
    if(per1.country==per2.country){
        return name1.localeCompare(name2);
    }
}


//g) Sort by country and age,sorted by country and within country sorted by Age
function sortCounAge(){
    sortCountry();
    countSort.sort(sortCounAgeAsc);
    showDetails();
}
function sortCounAgeAsc(per1,per2){
    let age1=per1.age;
    let age2=per2.age;
    if(per1.country==per2.country){
        if(age1>age2)
            return 1;
        else if(age1<age2)
            return -1;
        else
            return 0;
    }
}


//h)all India
function Allindia(){
    let perarr=person.filter(function(per){
        return per.country=='India';
    });
    StylebyCount=false;
    StylebyAge=false;
    StyleCountRow=false;
    StyleAgeRow=false;
    showPersonDetails(perarr);
}

//i) all the people with country as USA
function AllUSA(){
    let perarr=person.filter(function(per){
        return per.country=='USA';
    });
    StylebyCount=false;
    StylebyAge=false;
    StyleCountRow=false;
    StyleAgeRow=false;
    showPersonDetails(perarr);
}

//all the people with country as France
function AllFrance(){
    let perarr=person.filter(function(per){
        return per.country=='France';
    });
    StylebyCount=false;
    StylebyAge=false;
    StyleCountRow=false;
    StyleAgeRow=false;
    console.log(perarr);
    showPersonDetails(perarr);
}

//k) Style by country
function getClassPersons(per){
    let coun=per.country;
    let age=per.age;
    // console.log(StyleCountRow,StyleAgeRow)
    // console.log(StylebyCount);
    if((coun=='India' && StylebyCount)||(age>30 && age<=40 && StylebyAge)){
        return 'td1 IndiaBlue';
    }
    else if((coun=='USA' && StylebyCount)||(age<=30 && StylebyAge))
        return 'td1 USAGreen';
    else if((coun=='France' && StylebyCount)||(age>=40 && StylebyAge))
        return 'td1 FranceRed';
    // showPersonDetails(coun);
}

function StybyCount(){
    StylebyCount=true;
    StylebyAge=false;
    StyleCountRow=false;
    StyleAgeRow=false;
    showPersonDetails(person);
}


//Style by age(Show the text in different colors)
// function getClassPersons2(per){
//     let age=per.age;
//     console.log(age);
//     console.log(StylebyAge);
//     if(age>30 && age<=40 && StylebyAge){
//         console.log('hi');
//         return 'IndiaBlue';
//     }
//     else if(age<=30 && StylebyAge)
//         return 'USAGreen';
//     else if(age>=40 && StylebyAge)
//         return 'FranceRed';
//     // showPersonDetails(coun);
// }

function StybyAge(){
    StylebyCount=false;
    StyleCountRow=false;
    StyleAgeRow=false;
    StylebyAge=true;
    showPersonDetails(person);
}


//task 4.1
function sort(colno){
    if(colno==0){
        console.log('in name');
        person.sort(sortNameAsc);
    }
    else if(colno==1)
        person.sort(sortCountryAsc);
    else
        person.sort(sortAgeAsc);
    showDetails()
}

//task 4.2
function getclassCountry(count,StyleCountRow){
    if(count=='India' && StyleCountRow)
        return 'td1 IndiaBlue' ;
    else if(count=='France' && StyleCountRow)
        return 'td1 FranceRed';
    else if(count=='USA' && StyleCountRow)
        return 'td1 USAGreen';
    else 
        return 'td1';
}
function getclassAge(age,StyleAgeRow){
    if(age>30 && age<=40 && StyleAgeRow)
        return 'td1 IndiaBlue';
    else if(age<=30 && StyleAgeRow)
        return 'td1 FranceRed';
    else if(age>=40,StyleAgeRow)
        return 'td1 USAGreen';
    else 
        return 'td1';
}

// function StyCountRow(){
//     StylebyCount=false;
//     StylebyAge=false;
//     StyleAgeRow=false;
//     StyleCountRow=true;
//     showPersonDetails(person);
// }

// function StyAgeRow(){
//     StylebyCount=false;
//     StylebyAge=false;
//     StyleCountRow=false;
//     StyleAgeRow=true;
    
//     showPersonDetails(person);
// }

//task 4.3

function remove(name){
    let index=person.findIndex(function(pr){
        return pr.name==name;
    });
    person.splice(index,1);
    showPersonDetails(person);
}


//task 4.4
function Add1toAge(name){
    let nam=person.find(function(per){
        return per.name==name;
    });
    console.log(nam);
    let element=nam.age;
    console.log(element);
    nam.age=nam.age+1;
    showPersonDetails(person);
}