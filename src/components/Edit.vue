<template>
<div>
 <form @submit.prevent="onUserSubmit" >
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Enter name" v-model="users.name">
  </div>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Enter email" v-model="users.email">
  </div>
  <button type="submit" class="btn btn-block btn-primary">Add</button>
</form>
</div>
</template>

<script>
  import { mapActions,mapState} from "vuex";

  export default {
    methods: {
      ...mapActions(["editUser"])
    },
    created() {
     this.$store.dispatch('editUser',{id:this.$route.params.id})

    },
    computed:{
    ...mapState([
      'users'
    ])
  },
  }
</script>
