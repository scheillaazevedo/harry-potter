<template>
    <div class="task"
        :class="stateClass"
        @click="$emit('changePending', task)" >

        <span class="close" @click.stop="$emit('taskDeleted', task)">x</span>
        <p>{{task.name}}</p>
    </div>
</template>

<script>
export default {
    props:{
        task:{
            type: Object,
            require:true
        }
    },
    computed:{
        stateClass(){
            return{
                ColorPending: this.task.pending,
                ColorDone: !this.task.pending
            }
        }
    }
}
</script>

<style>
    .task {
        position: relative;
        box-sizing: border-box;
        width: 350px;
        height: 100px;
        padding: 10px;
        border-radius: 8px;
        font-size: 1.6rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ColorPending {
        border-left: 12px solid rgb(182, 78, 78);
        background-color: lightcoral;
    }

    .ColorDone {
        color: #DDD;
        border-left: 12px solid rgb(17, 112, 107);
        background-color: lightseagreen;
        text-decoration: line-through;
    }

    .ColorPending .close {
        background-color: rgb(218, 105, 105);
    }

    .ColorDone .close {
        background-color: rgb(28, 160, 153);
    }

    .close{
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        height: 20px;
        width: 20px;
        border-radius:10px;
        display: flex;
        justify-content: center;
    }
</style>