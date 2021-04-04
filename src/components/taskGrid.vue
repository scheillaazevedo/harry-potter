<template>
    <div>
        <div class="task-grid">
            <task v-for="(task, i) in tasks" :key="task.name"
                :task="task" 
                @changePending="$emit('changePending', i)"
                @taskDeleted="$emit('taskDeleted', i)"/>
        </div>
    </div>
</template>

<script>
import task from './task.vue'

export default {
  components: { task },
    props:{
        tasks:{
            type: Array
        },
    }
}
</script>

<style>
    .task-grid { 
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .task-grid .task {
        margin: 10px;
    }

    .no-task {
        color: #AAA;
        font-size: 1.7rem;
    }
</style>