let ticketIncrementBtn = document.getElementById('increment-btn');
let currentTicketElement = document.getElementById('count-el');
let ticketQty = 0;
let ticketSaverBtn = document.getElementById("save-btn");
let allTicketSavedEl = document.getElementById('save-el');
ticketIncrementBtn.addEventListener('click',()=>{
   // console.log("btn was clicked");
    ticketQty += 1;
    currentTicketElement.textContent = ticketQty;
    //console.log("the ticket is" + currentTicketElement);
})

ticketSaverBtn.addEventListener('click',()=>{
    console.log("save btn was clicked"); 
    allTicketSavedEl.textContent += ticketQty + " - ";
    ticketQty = 0;
    currentTicketElement.textContent = ticketQty;
   
})


