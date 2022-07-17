let restaurant = {
  name: 'Barracca',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability (people) {
    let seatsAvailable = this.guestCapacity - this.guestCount
    return seatsAvailable >= people
  },
  addPeople (people) {
    this.guestCount += people
  },
  removePeople (people) {
    this.guestCount -= people
  }
}

console.log(restaurant.checkAvailability(15))
restaurant.addPeople(15)
restaurant.addPeople(5)
restaurant.removePeople(15)
console.log(restaurant.guestCount)



// cant use arrow function
