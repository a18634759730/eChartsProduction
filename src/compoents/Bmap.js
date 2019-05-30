import React,{useState,useEffect} from 'react'

export default props =>{
    useEffect(()=>{
        let BMap = window.BMap
        // 创建地图实例实现一块地图 
        let map = new BMap.Map("Bmap");     
        // 创建点坐标       
        let point = new BMap.Point(116.404, 39.915); 
        // 初始化地图，设置中心点坐标和地图级别
        map.centerAndZoom(point, 15);        
        // 开启鼠标缩放滚动
        map.enableScrollWheelZoom(true);
        //定位
        function myFun(result){
            var cityName = result.name;
            map.setCenter(cityName);
            console.log('...result',result)
            let points = new BMap.Point(result.center.lng, result.center.lat);
            map.centerAndZoom(points, 15);
        }
        var myCity = new BMap.LocalCity();
        myCity.get(myFun);
    })
    return (
        <div className="Bmap_contaner">
            <div id="Bmap" className="Bmap_border"></div>
        </div>
        
    )
}