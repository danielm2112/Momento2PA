//traigo libreria que controla variables de entorno
import * as dotenv from 'dotenv'
dotenv.config()
console.log(process.env.PORT)

import { ServidorAPI } from './API/ServidorAPI.js'

let servidorhoteles = new ServidorAPI() //instacia de una clase(OBJETO)
servidorhoteles.despertarServidor()


