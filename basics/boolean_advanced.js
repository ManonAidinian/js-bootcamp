let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
  console.log('Account is locked')
} else if (userRole === 'admin') {
  console.log('Welcome Admin')
} else {
  console.log('Hello!')
}
