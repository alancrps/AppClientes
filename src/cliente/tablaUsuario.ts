import { ICliente } from "./interfaces/cliente.interface";

export function generarTablaClientes(
	clientes: ICliente[],
	div: HTMLDivElement
) {
	if (clientes.length == 0) {
		console.error("No se encontraron datos");
		return;
	}
	const encabezados: (keyof ICliente)[] = Object.keys(
		clientes[0]
	) as (keyof ICliente)[];

	const tabla = document.createElement("table");
	tabla.classList.add("table", "table-striped", "table-sm");

	const thead = document.createElement("thead");
	const encabezadosRow = document.createElement("tr");

	encabezados.forEach((e) => {
		const th = document.createElement("th");
		th.textContent = e;
		encabezadosRow.appendChild(th);
	});

	thead.appendChild(encabezadosRow);
	tabla.appendChild(thead);

	const tbody = document.createElement("tbody");

	clientes.forEach((c) => {
		const fila = document.createElement("tr");
		// itero sobre los encabezados
		encabezados.forEach((e) => {
			const celda = document.createElement("td");
			celda.textContent = c[e]?.toString() || null;
			fila.appendChild(celda);
		});
		tbody.appendChild(fila);
	});
	tabla.appendChild(tbody);

	div.appendChild(tabla);
}
