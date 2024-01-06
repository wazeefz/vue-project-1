const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Wazeef',
            lastName: 'Zainol',
            url: 'https://google.com',
            raw_url: '<a href="https://google.com" target="_blank">Google</a>',
            age: 20,
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        },
        increment() {
            this.age++
        },
        updateLastName(msg, event) {
            event.preventDefault()
            console.log(msg)
            this.lastName = event.target.value
        },
    },
}).mount('#app')

// setTimeout(() => {
//     vm.firstName = 'Bob'
// }, 2000)

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Milla',
//             lastName: 'Ridzuan'
//         }
//     },
// }).mount('#app2')
