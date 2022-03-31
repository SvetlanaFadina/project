let myMap;

const init = () => {

    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 15
    });

    const coords = [
        [55.75, 37.50],
        [55.75, 37.71],
        [55.70, 37.70]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "",
        iconImageSize: [],
        iconImageOffset: []
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');

}

ymaps.ready(init);