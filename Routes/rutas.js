import express from 'express'
import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
import { ControladorReservas } from '../Controllers/ControladorReserva.js'

let controladorHabitacion = new ControladorHabitacion()// usando el controlador
let controladorReservas = new ControladorReservas()

export let rutasPersonalizadas=express.Router()


rutasPersonalizadas.get('/hoteleriaDMU/habitaciones',controladorHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hoteleriaDMU/habitacion/:idHabitacion',controladorHabitacion.buscarHabitacionesPorId )
rutasPersonalizadas.post('/hoteleriaDMU/habitacion', controladorHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hoteleriaDMU/modificarhabitacion/:idHabitacion', controladorHabitacion.editarHabitacion)



rutasPersonalizadas.get('/hoteleriaDMU/reservas',controladorReservas.buscarReservas)
rutasPersonalizadas.get('/hoteleriaDMU/reserva/:idReserva',controladorReservas.buscarReservasPorId)
rutasPersonalizadas.post('/hoteleriaDMU/reserva',controladorReservas.registrarReservas)
rutasPersonalizadas.put('/hoteleriaDMU/modificoreserva/:idReserva',controladorReservas.editarReservas)