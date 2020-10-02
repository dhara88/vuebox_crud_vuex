import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex,axios);


export default new Vuex.Store({

    state: {
      users: []

    },
    getters: {
      usersList: state => state.users

    },
    mutations: {
      setUsers: (state, users) => (
        state.users = users
    ),
    addNewUser: (state, user) => state.users.unshift(user),
    removeUser: (state, id) => (
        state.users.filter(user => user.id !== id),
        state.users.splice(user => user.id, 1)
    ),
    editUser:(state,users)=>(
      state.users=users
    )

    },
    actions: {
      async fetchUsers({commit}){
        const response = await axios.get("http://localhost:3000/users");
        commit("setUsers", response.data)
      },
      async addUsers({commit}, user){
        const response = await axios.post("http://localhost:3000/user", user);
        commit("addNewUser", response.data)
      },
      async deleteUser({commit}, id){
        await axios.delete(`http://localhost:3000/users/${id}`);
        commit("removeUser", id)
      },
        async editUser({commit}, {id}){
          const response=  await axios.get('http://localhost:3000/users/'+id);
          commit("editUser",response.data)
      }
    }

    
  });
