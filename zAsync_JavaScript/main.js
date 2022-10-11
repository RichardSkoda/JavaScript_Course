const { createApp } = Vue

        createApp({
            data() {
                return {
                    users: [],
                    userAvatar: ''
                }
            },

            mounted() {
                fetch("https://api.github.com/users")
                    .then(response => response.json())
                    .then(data => {
                        this.users = data;
                    });

                    // stejny zapis jako nad tim
                // promise.then((response) => {
                //     return response.json(); // vraci promise
                // }).then(data => {
                //     console.log(data)
                // });
            },

            methods: {
                loadUserAvatar(user) {
                    console.log('Loading avatar for user:')
                    console.log(user.login);

                    this.userAvatar = user.avatar_url
                }
            }
        }).mount('#app')