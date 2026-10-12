// FIRST TASK
const guestName=' Amina Yusuf ';
console.log(guestName);

const cleanName= guestName.trim();
console.log(cleanName);

console.log(cleanName.toUpperCase());
console.log(cleanName.toLowerCase());
console.log(cleanName.length);
console.log(cleanName.charAt(0));


const eventName='Creative Meetup';
console.log(eventName.includes('Meetup'));
console.log(eventName.startsWith('Creative'));
console.log(eventName.endsWith('Meetup'));
console.log(eventName.indexOf("M"));
console.log(eventName.substring(9));

const eventDate='24th October 2026';
console.log();


const venue='Lagos Community Hall';
console.log(venue);

const activities='Design,Photography,Writing';
console.log(activities.split(','));

const bookingId = '83';
console.log(bookingId);

const bookingDid=bookingId.padStart(4, '00')
console.log(bookingDid);
console.log(bookingId.padEnd(5, '***'));

const ticketPrice=2500;
console.log(ticketPrice);

const ticketQuantity=2;
console.log(ticketQuantity);

const thrill='See you there! '
console.log(thrill.repeat(3));


// SECOND TASK
// Message: 
// Welcome, Amina Yusuf! Your booking for Creative Meetup on 24 October 2026 at Lagos Community Hall has been received. We look forward to seeing you!

const bookingMessage='welcome, ' + cleanName + '! ' + 'Your booking for ' + eventName + ' on ' + eventDate + ' at ' + venue + ' has been received. ' + 'We look forward to seeing you!';
console.log(bookingMessage);


const secondMessage='welcome, '.concat(cleanName, '! ', 'Your booking for ', eventName, ' on ', eventDate, ' at ', venue, ' has been received. ', 'We look forward to seeing you!' )
console.log(secondMessage);

// THIRD TASK
const sentence=`${cleanName} booked ${ticketQuantity} tickets for ${eventName} on ${eventDate} at ${venue}. The booking ID is ${bookingDid}, and the total cost is ₦${ticketPrice * ticketQuantity}.`
console.log(sentence);

// FOURTH TASK
console.log(eventName.replace('Creative', 'Community'));

