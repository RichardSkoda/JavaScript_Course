const { createApp } = Vue

        createApp({
            data() {
                return {
                    users: [
                        'mojombo',
                        'defunkt',
                        'pjhyett',
                        'wycast',
                        'ezmobius',
                        'ivey'
                    ],
                    userAvatar: ''
                }
            },

            methods: {
                loadUserAvatar(username) {
                    console.log('Loading avatar for user:')
                    console.log(username);

                    this.userAvatar = "https://via.placeholder.com/150"
                }
            }
        }).mount('#app')


// github fetch API = "https://api.github.com/users/mojombo/orgs"