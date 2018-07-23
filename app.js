const car = (name, model, owner, year, phone, image) => ({name, model, owner, phone, image, year});

const cars = [
    car('Ford', 'Focus', 'Max', '2016', '+7 929 123 45 67', 'img/img1.jpg'),
    car('Ford', 'Mondeo', 'Vlad', '2018', '+7 929 453 45 67', 'img/img2.jpg'),
    car('Porshe', 'Panamera', 'Ira', '2019', '+7 929 576 00 00', 'img/img3.jpg')
];

new Vue ({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search:''
    },
    methods:{
        selectCar: function (index) {
            this.car = cars[index]
            this.selectedCarIndex = index
        }
    },
    computed:{
        phoneBtnText(){
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars(){
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) >-1 || car.model.indexOf(this.search) >-1
            })
        }
    }
});