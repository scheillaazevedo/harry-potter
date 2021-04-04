<template>
    <div>
        <h2>Main Actores</h2>
        <div class="b-flex">
            <div class="box">
                <div class="box-infoWard">
                    <h3>List Actores</h3>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>CORE WARD</th>
                        </tr>
                        <tr v-for="(ward, index) in wards" :key="index">
                            <td> {{ward.id}}</td>
                            <td> {{ward.master}}</td>
                            <td> {{ward.core}}</td>
                            <td>
                                <button class="btn-default" @click="setSelectActor(ward)">View</button>
                            </td>
                        </tr>
                    </table>   
                    <p></p>
                </div>
            </div>
            <detail-actores />
        </div>
    </div>
</template>

<script>
import DetailActores from './detailActores.vue'
import barramento from '@/barramento'

export default {
  components: { DetailActores },
    props:{
        wards:{
            type: Array
        }
    },
    methods:{
        setSelectActor(ward){
            barramento.setSelectActor(ward)
        }
    }
}
</script>

<style>

</style>