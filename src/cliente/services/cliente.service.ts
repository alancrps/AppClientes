import axios from "axios";
import { ICliente } from "../interfaces/cliente.interface";

const URL = "https://api-user-production.up.railway.app";

export const getClientes = async () => {
	const { data } = await axios.get<ICliente[]>(`${URL}/usuarios`);
	return data;
};

export const crearCliente = async (cliente: ICliente) => {
	const response = await axios.post(`${URL}/usuarios`, cliente);
	const data: ICliente = response.data;

	if (response.status != 201) {
		console.error("Fallo la llamada a la api para crear un cliente");
	}
	return console.log(`Se creó el usuario con id: ${data.id}`);
};
