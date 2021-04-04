<template>
    <div id="app">
        <h1> <span>&#129497;&#127995;</span>Harry Potter </h1>
        <div class="groupBtn">
            <button class="btn-option" @click="componente = 'Ward'">Ward</button>
            <button class="btn-option" @click="componente = 'Actores'">Main Actores</button>
        </div>
        <component :is="componente" 
            :wards="wards"
            :decreaseSize="decreaseSize"
            :increaseSize="increaseSize">
        </component>
        <new-task 
            @taskAdded="addTask"/>
        <task-grid 
            :tasks="tasks"
            @changePending="toggleTask"
            @taskDeleted="deleteTask"/>
    </div>
</template>

<script>
import Actores from './components/actores.vue';
import NewTask from './components/newTask.vue';
import TaskGrid from './components/taskGrid.vue';
import Ward from './components/ward.vue';
    
    export default {
        name: "App",
        components: {Ward, Actores, TaskGrid, NewTask},
        
        data(){
            return {
                componente: 'Ward',
                testet: '',
                wards: [{
                    id: 1,
                    manufacturer: 'Garrick Olivaras',
                    master: 'Hermione Granger',
                    owner: 'Hermione Granger',
                    woodType: 'Videira',
                    core: 'Fibra de coração de dragão',
                    size: 27,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at purus blandit, ultrices leo vel, euismod justo. Pellentesque dui dolor, ultricies eu metus vel, finibus faucibus purus. Quisque id malesuada est. Nunc in eros a diam lobortis hendrerit a id lectus. Cras et pretium mauris. In hac habitasse platea dictumst. '
                },{
                    id: 2,
                    manufacturer: 'Garrick Olivaras',
                    master: 'Harry Potter',
                    owner: 'Harry Potter',
                    woodType: 'Azevinho',
                    core: 'Pena de Fênix',
                    size: 34,
                    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum pellentesque blandit cursus. Donec finibus, urna ut eleifend mollis, nulla sem convallis metus, sed molestie mauris lectus quis augue. Curabitur sapien tortor, vestibulum at nisl nec, viverra porta erat viverra porta erat. '
                },{
                    id: 3,
                    manufacturer: 'Garrick Olivaras',
                    master: 'Draco Malfoy',
                    owner: ['Draco Malfoy', 'Harry Potter'],
                    woodType: 'Pilriteiro',
                    core: 'Pelo de unicórnio',
                    size: 25,
                    description: 'Donec pulvinar diam a varius sagittis. Phasellus ultrices fermentum nibh, sed porttitor orci vulputate vel. Praesent pulvinar magna mi, at tempus nulla euismod eget. Duis at tempus turpis.urna ut eleifend mollis, nulla sem convallis metus, sed molestie mauris lectus quis augue urna ut eleifend mollis, nulla sem convallis metus'
                },{
                    id: 4,
                    manufacturer: 'Garrick Olivaras',
                    master: 'Rony Weasley',
                    owner: ['Rony Weasley', 'Sequestradores', 'Sirius Black'],
                    woodType: 'Salgueiro',
                    core: 'Fio de cauda de unicórnio',
                    size: 36,
                    description: 'Duis et magna lorem. Donec consectetur laoreet elit id accumsan. Morbi ex nisl, ultrices rhoncus enim nec, mollis feugiat nibh. Integer aliquam aliquam sem ac hendrerit.nulla sem convallis metus, sed molestie mauris lectus quis augue. Curabitur sapien tortor, vestibulum at nisl nec, viverra porta erat viverra porta erat. '
                }],
                tasks: [{
                    name: 'Magic wand',
                    pending: false
                },{
                    name: 'buy owl',
                    pending: true
                }]
            }
        },
        methods:{
            increaseSize(i) {
                this.wards[i].size++
            },
            decreaseSize(i) {
                this.wards[i].size--
            },
            toggleTask(i){
                this.tasks[i].pending = !this.tasks[i].pending
            },
            deleteTask(i) {
                this.tasks.splice(i,1)
            },
            
            addTask(task){
                // check if the name already exists
                const sameName = t => t.name === task.name
                const reallyNew = this.tasks.filter(sameName).length == 0

                if(reallyNew) {
                    this.tasks.push({
                        name: task.name,
                        pending: task.pending || true
                    })
                }
            },

        }
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding: 40px;
        background-color: #fafafa;
        height: 100vh;
    }
    .box{
        position: relative;
        background-color: #fff;
        border-radius: 10px;
        width: 41%;
        margin: 0 2%;
        padding: 10px 20px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.068);   
    }
    .box-infoWard{
        text-align: left;
    }
    .box-buttons{
        text-align: center;
        margin: 40px 0 20px 0;
    }
    .btn-option{
        background-color: lightseagreen;
        width: 120px;
        padding: 10px;
        border-radius: 20px;
        color: #fff;
        border: lightslategray;
        margin: 0 10px;
        outline: none;
        cursor: pointer;
    }
    .groupBtn{
        margin-bottom:40px;
    }
    .btn-default{
        background-color: lightslategray;
        width: 80px;
        padding: 10px;
        border-radius: 20px;
        color: #fff;
        border: lightslategray;
        margin: 0 10px;
        outline: none;
        cursor: pointer;
    }
    .btn-line{
        border: 1px solid lightslategray;
        width: 60px;
        font-size: 20px;
        background-color: #fff;
        padding: 5px;
        border-radius: 20px;
        color: lightslategray;
        margin: 0 10px;
        outline: none;
        cursor: pointer;
    }
    .sizePhoto{
        width: 50px;
        height: 50px;
    }
    .b-flex{
        display: flex;
    }
    h2{
        color: lightseagreen;
    }

</style>
