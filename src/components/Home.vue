<template>
<div>
 <form @submit.prevent="onUserSubmit" >
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Enter name" v-model="name">
  </div>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Enter email" v-model="email">
  </div>
  <button type="submit" class="btn btn-block btn-primary">Add</button>
   <p v-if="msg" class="alert alert-success">{{ msg }}</p>

</form>
 <p v-if="errors.length" class="error" >
    <b>Please correct the following error(s):</b>
    <ul>
      <li  v-for="error in errors"  :key="error.id">{{ error }}</li>
    </ul>
  </p>

</div>
</template>

<script>
import { mapActions } from "vuex";

export default { 
  name: 'AddUser', 
  data(){
      return {
        name: '',
        email: '',
        errors: [],
        msg:''


  }
  },
  methods:{
    ...mapActions(["addUsers"]),
    onUserSubmit:function(e) {
        try{
          this.addUsers({
          name: this.name,
          email: this.email
          
        })

      }
      catch(error){
        this.msg="Name or ID incorrect";
      }
      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.errors.length) {
        return true;
      }
      e.preventDefault();

    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}
</script>
<style scoped>
.error{
  color:red;
}
</style>
