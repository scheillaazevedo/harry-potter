<template>
    <div class="box">
        <div class="box-infoWard">
            <h3>Detail</h3>
            <p><strong>About</strong></p>
            <p>{{ description }}</p>
            <p><strong>Size:</strong> {{ size }} cm</p>
        </div>
        <div class="box-buttons">
            <button class="btn-line" @click="decreaseSize(indice)">-</button>
            <button class="btn-line" @click="increaseSize(indice)">+</button>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        description: {
            type: String,
        },
        size: {
            type: Number,
        },
        decreaseSize: {
            type: Function,
        },
        increaseSize: {
            type: Function,
        },
        indice: {
            type: Number,
        }
    },
}
</script>

<style>

</style>