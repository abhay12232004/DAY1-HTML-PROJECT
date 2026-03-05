const EventEmitter = require('events')

let booking = new EventEmitter   // creating a object of class EventEmittor 
booking.on(`SignUp`,()=>{
    console.log(`User SignUp Successfully`)
})
booking.on(`login`,(name)=>{
    console.log(`${name} Login Successfully`)
})
booking.on(`Booked`,()=>{
    console.log(`User Booked Successfully`)
})
booking.on(`logout`,()=>{
    console.log(`User Logout Successfully`)
})


booking.emit('SignUp')

booking.emit('login','Abhay')
booking.emit('Booked')
booking.emit('logout')
