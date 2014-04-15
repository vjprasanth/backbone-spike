package uk.co.o2.mcsspike.server

import javax.ws.rs.*
import javax.ws.rs.core.MediaType

@Path("")
class CarResource {

    @GET
    @Path("/cars")
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<Car> getCars() {
        return CarStore.instance.carRepo.values()
    }

    @GET
    @Path("/car/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Car getCar(@PathParam("id") int id) {
        return CarStore.instance.carRepo.get(id)
    }

    @POST
    @Path("/car")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Car createCar(Car car) {
        int i = CarStore.instance.idGenerator++
        car.id = i
        CarStore.instance.carRepo.put(i, car)
        return car
    }

    @PUT
    @Path("/car/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Car updateCar(@PathParam("id") int id, Car car) {
        CarStore.instance.carRepo.put(id, car)
        return car
    }

    @DELETE
    @Path("/car/{id}")
    public void deleteCars(@PathParam("id") int id) {
        CarStore.instance.carRepo.remove(id)
    }

}

