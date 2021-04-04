<template>
    <div >
        <h2>Ward</h2>
        <div class="b-flex">
            <div class="box">
                <div class="box-infoWard">
                    <h3>Information</h3>
                    <p>Master: <strong>{{ wards[indice].master}}</strong></p>
                    <p>Manufacturer: <strong>{{ wards[indice].manufacturer }}</strong></p>
                    <p>Type: <strong>{{ wards[indice].woodType }}</strong></p>
                    <p>Core: <strong>{{ wards[indice].core }}</strong></p>
                    <p>Size: <strong>{{ wards[indice].size }} cm</strong></p>
                </div>
                <div class="box-buttons">
                    <button class="btn-default" @click="firstNumber--">Previous</button>
                    <button class="btn-default" @click="firstNumber++">Next</button>
                </div>
            </div>  
            <detail-ward 
            :description="wards[indice].description"
            :size="wards[indice].size"
            :decreaseSize="decreaseSize"
            :increaseSize="increaseSize"
            :indice="indice" />
        </div>
    </div>
</template>

<script>
import detailWard from './detailWard.vue'

export default {
    components: { detailWard },
    props:{
        wards: {
            type: Array,
            require: true
        },
        increaseSize: {
            type: Function,
        },
        decreaseSize: {
            type: Function,
        }
    },
    data() {
        return {
            firstNumber: 0,
        }
    },
    computed:{
        indice(){
            return Math.abs(this.firstNumber % 4)
        }
    }
}
</script>

<style>

</style>