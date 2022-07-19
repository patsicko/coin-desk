const main=document.getElementById("main");
const time=document.getElementById("time");



const cardDisplay=(time,code,rate,description)=>{

    const cards=`
    
    <div class="container">
    <div class="time" id="time">
         ${time}
    </div>
    <div class="cards" id="cards">
   
    <div class="usd">
      
      code: Bitcoin to ${code} <br>
      rate:${rate}<br>
      description:${description}

    </div>
  

  </div> 
    </div>
    `
main.innerHTML+=cards;

}

const fetchData=async()=>{
    const data=await (await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")).json();
    console.log(data);
   

     cardDisplay(data.time.updated,data.bpi.USD.code,data.bpi.USD.rate,data.bpi.USD.description);
     cardDisplay(data.time.updated,data.bpi.GBP.code,data.bpi.GBP.rate,data.bpi.GBP.description);
     cardDisplay(data.time.updated,data.bpi.EUR.code,data.bpi.EUR.rate,data.bpi.EUR.description);

   console.log(data.bpi.EUR.description);
   console.log(data.bpi.GBP.description);
   

}

fetchData();