let seatCount = 0;
function buyTicket() {
    document.addEventListener('click', handleKeyboardButtonPress);
}
let totalSeat = 41;
function handleKeyboardButtonPress(event){
    const pressButton = event.target.id;

    totalSeat--;
    if (totalSeat > 36) {
        addBackgroundById(pressButton);
    }
    seatCount++;
    if (seatCount === 1) {
        showSeat1(pressButton);
        calculateTaka(550); // Add 550 to the total
        totalInfo(total);
    }
        
    
    if (seatCount === 2) {
        showSeat2(pressButton);
        calculateTaka(550); // Add 550 to the total
        totalInfo(total);
       
    }
    if (seatCount === 3) {
        showSeat3(pressButton);
        calculateTaka(550); // Add 550 to the total
        totalInfo(total);
    }
    if (seatCount === 4) {
        showSeat4(pressButton);
        calculateTaka(550); // Add 550 to the total
        totalInfo(total);
        handleCouponInput();
    }
    // if(seatCount > 4){
    //     alert('You can only select a maximum of four seats')
    // }
}

function addBackgroundById(idElement) {
    let count = 1;
    seatAllocated(count);
    const element = document.getElementById(idElement);
    element.classList.add('bg-[#1DD100]');
}

function seatAllocated(value) {
    const seatText = document.getElementById('seat-count');
    const seatAvailable = seatText.innerText;
    const seat = parseInt(seatAvailable);
    const allocatedSeat = seat - value;
    if (allocatedSeat > 35) {
        seatText.innerText = allocatedSeat;
    }
}
function showSeat1(seatName) {
    const seatInfo = document.getElementById('seat-1');
    seatInfo.classList.remove('hidden');
    const element = document.getElementById('seat-name1');
    element.innerText = seatName;
}
function showSeat2(seatName) {
    const seatInfo = document.getElementById('seat-2');
    seatInfo.classList.remove('hidden');
    const element = document.getElementById('seat-name2');
    element.innerText = seatName;
}
function showSeat3(seatName) {
    const seatInfo = document.getElementById('seat-3');
    seatInfo.classList.remove('hidden');
    const element = document.getElementById('seat-name3');
    element.innerText = seatName;
}
function showSeat4(seatName) {
    const seatInfo = document.getElementById('seat-4');
    seatInfo.classList.remove('hidden');
    const element = document.getElementById('seat-name4');
    element.innerText = seatName;
}

//total price

function totalInfo(total) {
    const finalInfo = document.getElementById('final-info');
    finalInfo.classList.remove('hidden');
    const element = document.getElementById('total-taka');
    element.innerText = total;
  }
  
  let total = 0;
  
  function calculateTaka(value) {
    total = total + value;
    return total;
  }
// cuPhone




// // Function to handle input event
function handleCouponInput() {
    const couponInput = document.getElementById('haveCoupon');
    const couponCode = couponInput.value.trim(); // Get the entered coupon code and trim any leading or trailing spaces
    total=2200;
    // Check if the entered coupon code is valid
    if (couponCode === 'NEW15') {
        const discount = total * 0.15;
        const finalTaka = total - discount;
        applyInfo(finalTaka); // Update the grand total with discounted amount
    } else if (couponCode === 'Couple 20') {
        const discount = total * 0.20;
        const finalTaka = total - discount;
        applyInfo(finalTaka); // Update the grand total with discounted amount
    } else {
        // No coupon entered, update the grand total without any discount
        applyInfo(total);
    }
}

// Function to update grand total
function applyInfo(total) {
    const finalInfo = document.getElementById('apply-info');
    finalInfo.classList.remove('hidden');
    const element = document.getElementById('grand-total');
    element.innerText = total;
}



// Add event listener to the coupon input field
document.getElementById('haveCoupon').addEventListener('input', handleCouponInput);
