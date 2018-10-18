<template>
    <section id="mapBox">
        <div id="map"></div>
    </section>
</template>
<script>
export default{
    data(){
        return{
            map: {}
        }
    },
    methods: {
        // 向地图中添加 marker
        addMarker(point){
            // let options = {
            //     icon: new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(300,157))
            // }
            let marker = new BMap.Marker(point);
            this.map.addOverlay(marker);
            marker.addEventListener('click',this.onMarkerClick)
        },
        onMarkerClick(e){
            let options = {
                width: 250,
                height: 80,
                title: '信息',
                enableMessage: true
            }
            let p = e.target;
            // console.log(e,'======');
            
            let text = `marker的位置是${p.getPosition().lng},${p.getPosition().lat}`;
            // console.log(text,'------------');
            let point = new BMap.Point(p.getPosition().lng,p.getPosition().lat)
            var infoWindow = new BMap.InfoWindow(text,options); // 创建信息窗口对象
            this.map.openInfoWindow(infoWindow, point) // 开启信息窗口

            this.$emit('markerClick')
        }
    },
    mounted(){
        // 初始化地图
        this.map = new BMap.Map("map")
        let point = new BMap.Point(104.06, 30.67); 
        this.map.centerAndZoom(point, 10); 
        this.map.enableScrollWheelZoom(true); 

        

        this.addMarker(point)
    }
}    
</script>
<style lang="less">
#mapBox{
    width: 100%;
    height: 100%;
    #map{
        width: 100%;
        height: 100%;
    }
}
</style>

