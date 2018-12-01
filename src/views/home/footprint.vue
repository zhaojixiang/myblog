<template>
    <section id="footprint">
        <backIndex :label="subLabel" class="backIndex"/>
        <div class="footPrint">
            <div class="map1Box">
                <map1 class='map1'></map1>
            </div>
        </div>
    </section>
</template>
<script>
    import backIndex from 'components/common/backIndex'

    import map1 from '../../components/common/map'
    export default {
        data() {
            return {
                 subLabel: {
                    label: '足迹',
                    text: '走过万水千山，只为重叠你的脚印。'
                },
            }
        },
        components: {
            map1,
            backIndex
        },
        mounted() {}
    }
</script>
<style lang="less">
    #footprint {
        background: #fff;
        padding-bottom: 60px;
        .footPrint{
            width: 90%;
            margin: 0 auto;
            background: #fff;
            .map1Box{
                width: 55%;
                height: 500px;
                .map1 {
                    padding: 10px;
                }
            }
        }
    }
</style>