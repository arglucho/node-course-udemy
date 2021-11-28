// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(3))

const eventExample = {
    name: 'Fiesta de cumpleaños',
    guestList: ['Lucho','Bruno','Yoel'],
    printGuestList() {
        console.log('Lista de invitados para ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' asiste a ' + this.name)
        })
    }
}

eventExample.printGuestList()