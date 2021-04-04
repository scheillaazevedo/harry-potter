<template>
    <div class="box">
        <div class="box-infoWard">
            <h3>Detail</h3>
            <p v-if="!ward">No results</p>
            <div v-else>
                <p><strong>About</strong></p>
                <p>{{ward.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    data(){
        return{
            ward: null
        }
    },
    created(){
        barramento.onSelectActor(ward => {
            this.ward = ward
        })
    }

}
</script>

<style>

</style>