import Vue from 'vue'

export default new Vue ({
    methods: {
        setSelectActor(foo){
            this.$emit('actorSelected', foo)
        },
        onSelectActor(callback){
            this.$on('actorSelected', callback)
        }
    }
})