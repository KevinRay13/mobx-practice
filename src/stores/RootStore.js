import {types} from 'mobx-state-tree'

const userStore = types
.model('UserStore' {
    users: types.array(User)
})

const User = types.model('User', {
    username: "",
    messages: ""
})