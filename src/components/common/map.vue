<template>
    <section id="mapBox">
        <div id="map"></div>
    </section>
</template>
<script>
export default{
    data(){
        return{
            map: {},
            marker: [
                {
                    x: 104.06,
                    y: 30.67
                },{
                    x: 113.23,
                    y: 23.16 // guangzhou
                },{
                    x: 113.06,
                    y: 22.61 // jiangmen
                },{
                    x: 106.55,
                    y: 29.57 // chongqing
                },{
                    x: 121.47,
                    y: 31.23 // shanghai
                },{
                    x: 119.95,
                    y: 31.78 // 常州
                },{
                    x: 118.78,
                    y: 32.07
                },{
                    x: 117.25, 
                    y: 31.83
                },{
                    x: 112.93,
                    y: 28.23  // 长沙
                },{
                    x: 104.37,
                    y: 31.13 // 德阳
                },{
                    x: 104.73,
                    y: 31.48 // 绵阳
                }
            ]
        }
    },
    methods: {
        // 向地图中添加 marker
        addMarker(point){
            this.marker.forEach((item)=>{
                let point = new BMap.Point(item.x,item.y)
                let marker = new BMap.Marker(point);
                this.map.addOverlay(marker);
                marker.addEventListener('click',this.onMarkerClick)
            })
            // let options = {
            //     icon: new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(300,157))
            // }
            
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
        // let guangzhou = new BMap.Point(113.23, 23.16); 
        // let jiangmen = new BMap.Point(113.06, 22.61); 
        // let chongqing = new BMap.Point(106.55, 29.57); 
        // let shanghai = new BMap.Point(121.47, 31.23); 

        this.map.centerAndZoom(point, 10); 
        this.map.enableScrollWheelZoom(true); 

        

        this.addMarker()
        // this.addMarker(guangzhou)
        // this.addMarker(jiangmen)
        // this.addMarker(chongqing)
        // this.addMarker(shanghai)
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

