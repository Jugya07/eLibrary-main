/*fetch("https://alpha-lms.herokuapp.com/sherlock").then((e)=>{
  return e.json();
}).then((a)=>{
console.log(a);
})*/
let success=false;
let datalist;
let usa=`sherlock`;



function leapyr(yr){ 
	if ( (yr%4 == 0 && !(yr%100 == 0)) || yr%400 == 0){
        return true;
    }
		
	else{
            return false;
        }
}


function returnday(){
let d=new Date();
let day=d.getDate();
let mon=d.getMonth();
let yr=d.getFullYear();
let rday;
let rmon;
let ryr;

if(mon===01){
    if(day>=25){
        rday=day+7-31;
        rmon=02;
        ryr=yr
    }
    else{
        rday=day+7;
        rmon=mon;
        ryr=yr;
    }
}
else if(mon===02){
    let checklep=leapyr(yr);
    if(checklep){
        if(day>=23){
            rday=day+7-29;
            rmon=03;
            ryr=yr
        }
        else{
            rday=day+7;
            rmon=mon;
            ryr=yr;
        }
    }
    else{
        if(day>=22){
            rday=day+7-28;
            rmon=03;
            ryr=yr
        }
        else{
            rday=day+7;
            rmon=mon;
            ryr=yr;
        }
    }

}
else if(mon===03){
    if(day>=25){
        rday=day+7-31;
        rmon=04;
        ryr=yr
    }
    else{
        rday=day+7;
        rmon=mon;
        ryr=yr;
    }
    
}
else if(mon===04){
    if(day>=24){
        rday=day+7-30;
        rmon=04;
        ryr=yr
    }
    else{
        rday=day+7;
        rmon=mon;
        ryr=yr;
    }
}
else if(mon==05){
    if(day>=25){
        rday=day+7-31;
        rmon=06;
        ryr=yr
    }
    else{
        rday=day+7;
        rmon=mon;
        ryr=yr;
    }
}
else if(mon===06){
    if(day>=24){
        rday=day+7-30;
        rmon=07;
        ryr=yr
    }
    else{
        rday=day+7;
        rmon=mon;
        ryr=yr;
    }
}
else if(mon===07){
    if(day>=25){
        rday=day+7-31;
        rmon=08;
        ryr=yr
    }
    else{
        rday=day+7;
        rmon=mon;
        ryr=yr;
    }
}
else if(mon===08){
    if(day>=25){
        rday=day+7-31;
        rmon=09;
        ryr=yr
    }
    else{
        rday=day+7;
        rmon=mon;
        ryr=yr;
    }
}
else if(mon===09){
    if(day>=24){
        rday=day+7-30;
        rmon=10;
        ryr=yr
    }
    else{
        rday=day+7;
        rmon=mon;
        ryr=yr;
    }
}
else if(mon===10){
    if(day>=25){
        rday=day+7-31;
        rmon=11;
        ryr=yr
    }
    else{
        rday=day+7;
        rmon=mon;
        ryr=yr;
    }
}
else if(mon===11){
    if(day>=24){
        rday=day+7-30;
        rmon=12;
        ryr=yr
    }
    else{
        rday=day+7;
        rmon=mon;
        ryr=yr;
    }
}
else if(mon===12){
    if(day>=25){
        rday=day+7-31;
        rmon=01;
        ryr=yr+1;
    }
    else{
        rday=day+7;
        rmon=mon;
        ryr=yr;
    }
}
return (String(rmon)+'/'+String(rday)+'/'+String(ryr));
}

// ABOVE FUNCTION IS FOR CHECKING LEAP YEAR
const BASE_URL='https://alpha-lms.herokuapp.com/'

async function datas(book){
  let fdata=await fetch(BASE_URL+book);
  

  let sdata=await fdata.json();
  
  for(let i in sdata){
    let ISBN=sdata[i]['ISBN'];
    let isbn=document.createElement("pre");
    // isbn.textContent=sdata[i]['ISBN']+'\n'+sdata[i]['name']+'\n'+sdata[i]['copies'] +'\n';
    isbn.innerHTML="<strong>ISBN : </strong>"+ sdata[i]['ISBN']+'\n'+ "<strong>Book Name : </strong>"+sdata[i]['name']+'\n'+ "<strong>Author Name : </strong>"+sdata[i]['author']+'\n'+ "<strong>No. of copies : </strong>"+sdata[i]['copies'] +'\n';
    let btn=document.createElement("button");
    btn.setAttribute("id",ISBN);
    btn.setAttribute("class",'bookBtn');
    btn.textContent="BOOK";
    btn.setAttribute("onclick","bookonclick(this)");
    let inputTag=document.createElement("input");
    inputTag.setAttribute("id",'input-text');
    inputTag.setAttribute("placeholder","Enter your name");
    isbn.append(inputTag);
    isbn.append(btn);
    
    document.getElementById("result-div").append(isbn);
  }
  
    
  console.log(sdata);

}


function getData(){

  let srch=document.getElementById("booksearch");
  if(srch){
    let rempre=document.querySelectorAll("pre");
    Array.from(rempre);
    for(let i=0;i<rempre.length;i++){
            rempre[i].remove();
    }
  }
  srch=document.getElementById("booksearch");
    let srchdata=srch.value;
    
    console.log(srchdata);
        datas(srchdata);
        
}


//POST DATA

async function postdata(isbn,name,author,copies){
  let data={"ISBN":isbn,
        "name":name,
        "author":author,
        "copies":copies
}

let pload={
  method:"POST",
  header:{
    'Content-Type':'application/json',
    
    
    'Accept':'application/json'
  },
  json:JSON.stringify(data)
}

await fetch(BASE_URL+'add/', {
  method: 'POST', // or 'PUT'
  
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  alert(data["message"]);
})
.catch((error) => {
  console.error('Error:', error);
});

console.log(JSON.stringify(data));

}




function postonclick(){
  console.log("testing");
 let isbnn=document.getElementById("isbn").value;
 let bkname=document.getElementById("bkname").value;
 let aname=document.getElementById("aname").value;
 let copyy=document.getElementById("copy").value;

 console.log(isbnn,bkname,aname,copyy);
 
 postdata(isbnn,bkname,aname,copyy);
 document.getElementById("isbn").value="";
 document.getElementById("bkname").value="";
 document.getElementById("aname").value="";
 document.getElementById("copy").value="";
 
}

async function bookdata(isbn,name,date,rdate){
  let data={"ISBN":isbn,
        "booked_by":name,
        "booked_on":date,
        "return_date":rdate
      
}

let pload={
  method:"POST",
  header:{
    'Content-Type':'application/json',
    
    
    'Accept':'application/json'
  },
  json:JSON.stringify(data)
}

await fetch(BASE_URL+'book/', {
  method: 'POST', // or 'PUT'
  
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  alert(data["message"]);
})
.catch((error) => {
  
  console.error('Error:', error);
});

console.log(JSON.stringify(data));

}


function bookonclick(e){
 let datee=new Date();
 let rrdate=datee.getDate();
 console.log(datee);
  let isbndata=e.id;
  let inputtext=e.parentNode.querySelector("input").value;
  
  let rdatee=returnday();
  
  bookdata(isbndata,inputtext,datee,rdatee);


}



//delete data
async function deleteData(isbn){
  let fdata=await fetch(BASE_URL+'delete/'+isbn);
  let sdata=await fdata.json();
  alert(sdata["message"]);
}

function delonclick(){
  let isbn=document.getElementById("isbndel").value;
  deleteData(isbn);
  document.getElementById("isbndel").value="";
}



//LEND BOOK


async function lendData(isbn,name){
  let data={"ISBN":isbn,
        "wanted_by":name,
        
      
}

let pload={
  method:"POST",
  header:{
    'Content-Type':'application/json',
    
    
    'Accept':'application/json'
  },
  json:JSON.stringify(data)
}

await fetch(BASE_URL+'lend/', {
  method: 'POST', // or 'PUT'
  
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  alert(data["message"]);
})
.catch((error) => {
  console.error('Error:', error);
});

console.log(JSON.stringify(data));

}




function lendonclick(){
  let ISbn=document.getElementById("isbnnn").value;
  let bkkname=document.getElementById("bkkname").value;
  lendData(ISbn,bkkname);
}




//RETURN BOOK

async function returnBook(isbn){
  let data={"ISBN":isbn,
      
}

let pload={
  method:"POST",
  header:{
    'Content-Type':'application/json',
    
    
    'Accept':'application/json'
  },
  json:JSON.stringify(data)
}

await fetch(BASE_URL+'return/', {
  method: 'POST', // or 'PUT'
  
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  alert(data['message']);
})
.catch((error) => {
  console.error('Error:', error);
});

console.log(JSON.stringify(data));

}

function returnonclick(){

  let inisbn=document.getElementById("isbnreturn").value;
  returnBook(inisbn);
}








