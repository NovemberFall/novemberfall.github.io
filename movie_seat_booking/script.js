const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
//selected seats which is not occupied
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelected = document.getElementById('movie');
let ticketPrice = +movieSelected.value;
// console.log(ticketPrice);
// //we can see the price of '32'
// console.log(typeof ticketPrice);


//update seat numbers and total price
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // console.log(selectedSeats);
    const selectedSeatsCount = selectedSeats.length;
    console.log(selectedSeatsCount);
    count.innerHTML = selectedSeatsCount;
    total.innerHTML = selectedSeatsCount * ticketPrice;
}

//movie selected Event: change price
movieSelected.addEventListener('change', (e) => {
    ticketPrice = +e.target.value; // `+` convert to number
    // console.log(ticketPrice);
    updateSelectedCount();
})

//////////////
// select seat event
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');
        // console.log(e.target);

        updateSelectedCount();
    }
});





















