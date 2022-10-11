const getDemoUsers = () => {
    // if(Math.random() > 0.5) {
    //     throw new Error('Unlucky error has happened ...');
    // }

    return new Promise((resolve, reject) => {     // prostudovat, jak facha resolve a reject!!!!!!!!!!!!!
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(data => {
                resolve(data)
            })
            .catch(reject)
    });

    // return [
    //     {id: 1, login: 'John Doe'},
    //     {id: 2, login: 'Billy Blue'},
    //     {id: 3, login: 'Alex Morgan'},
    //     {id: 4, login: 'Victor Norman'},
    // ]
}

const { createApp } = Vue

        createApp({
            data() {
                return {
                    users: [],
                    errorMessage: null
                }
            },

            methods: {
                async loadGithubUsers() {
                    this.errorMessage = null;

                    // try {
                    //     getDemoUsers()
                    //         .then(data => this.users = data)
                    //         .catch(message => this.errorMessage = message);
                    // } catch (e) {
                    //     this.errorMessage = `Error appear while users loading: ${e.message}`
                    // }

                    try {
                        this.users = await getDemoUsers();
                    } catch (e) {
                        console.log(e)
                        this.errorMessage = e.message;
                    }

                    // setTimeout(() => {
                    //     console.log(this.users)
                    // }, 5000)
                    console.log(this.users) // proc tu mam proxy misto pole objektu?
                },

                clearUsers() {
                    this.users = []
                }
            }
        }).mount('#app')