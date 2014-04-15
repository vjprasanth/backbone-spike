package uk.co.o2.mcsspike.server

@Singleton
class CarStore {

    int idGenerator = 11

    Map<Integer, Car> carRepo = [
            1: new Car(id: 1, name: "Bugatti Veyron Supersport"),
            2: new Car(id: 2, name: "Lamborghini Aventador"),
            3: new Car(id: 3, name: "Hennessey Venom GT"),
            4: new Car(id: 4, name: "Koenigsegg Agera R 2013"),
            5: new Car(id: 5, name: "SSC Ultimate Aero XT"),
            6: new Car(id: 6, name: "Koenigsegg CCX"),
            7: new Car(id: 7, name: "McLaren F1"),
            8: new Car(id: 8, name: "Zenvo ST1"),
            9: new Car(id: 9, name: "Gumpert Apollo"),
            10: new Car(id: 10, name: "Aston Martin One 77")

    ] as Map<Integer, Car>
}
