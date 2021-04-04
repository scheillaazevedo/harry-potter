<template>
  <div class="new-task">
      <input class="form-element" v-model="nameTask" @keydown.enter="add" type="text" placeholder="New task">
      <button class="form-element" @click="add">submit</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            nameTask: '',
        }
    },
    methods:{
        add() {
            if(this.nameTask != ''){
                this.$emit('taskAdded', {name:this.nameTask})
                this.nameTask= ''
            }
        }
    }
}
</script>

<style>
    .new-task{
        margin: 35px;
    }

    .form-element {
        outline: none;
        font-size: 1rem;
        border: 1px solid #fff;
        padding: 5px 10px 8px;
        color: rgb(54, 54, 54);
    }

    input.form-element{
        width: 500px;
        background: #FFF2;
        border: 1px solid rgba(82, 82, 82, 0.377);
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button.form-element {
        border-left: none;
        background-color: lightslategray;
        border: 1px solid lightslategray;
        border-top-right-radius:8px;
        border-bottom-right-radius:8px;
        color: #fff;
    }
</style>