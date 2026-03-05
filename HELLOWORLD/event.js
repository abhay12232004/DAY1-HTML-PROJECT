import { EventEmitter } from 'events'
let booking= new EventEmitter
booking.on('signup',()=>{
    console.log('user sign up')
})
booking.on('login',(name1)=>{
    console.log(`${name1} logged in`)
})
booking.on('booked',()=>{
    console.log('user booked ticekt')
})
booking.on('logout',()=>{
    console.log('user logout from web')
})
booking.emit('signup')
booking.emit('login','prabhjit')
booking.emit('booked')
booking.emit('logout')