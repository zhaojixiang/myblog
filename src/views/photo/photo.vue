<template lang="html">
    <section>
        <photo-wall/>
        <!-- <loading :loading="true"/> -->
    </section>
</template>

<script>
import photoWall from 'components/home/photoWall'
import loading from 'components/common/loading'
export default {
    data(){
        return{

        }
    },
    components: {
        photoWall,
        loading
    }
}
</script>

<style lang="less">
</style>
