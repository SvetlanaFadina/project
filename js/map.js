let myMap;

const init = () => {

    myMap = new ymaps.Map("map", {
        center: [55.752004, 37.576133],
        zoom: 14
    });

    const coords = [55.752004, 37.576133];

    const myPlacemark = new ymaps.Placemark ((coords), {}, {
        iconLayout: 'default#image',
        iconImageHref: URL('../img/map/placemark.png'),
        iconImageSize: [58, 73],
        iconImageOffset: [-20, -60]
    });


    myMap.geoObjects.add(myPlacemark);

   
    myMap.behaviors.disable('drag');
}

ymaps.ready(init);