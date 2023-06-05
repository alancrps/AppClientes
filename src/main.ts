import { ICliente } from "./cliente/interfaces/cliente.interface";
import { crearCliente } from "./cliente/services/cliente.service";

const logo = document.querySelector<HTMLAnchorElement>("#logo");
const main = document.querySelector<HTMLDivElement>("#main");
const home = document.querySelector<HTMLAnchorElement>("#home");
const clientes = document.querySelector<HTMLAnchorElement>("#clientes");
const crearClientes =
	document.querySelector<HTMLAnchorElement>("#crearClientes");

const cargarContenido = () => {
	main!.innerHTML = `
    <div class="hero">
    <div class="container my-5">
        <div
            class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"
        >
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
                    App Clientes
                </h1>
                <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                    sint delectus perspiciatis quas animi repellat laborum numquam
                    veniam sed voluptatum fuga.
                </p>
                <div
                    class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
                >
                    <button
                        type="button"
                        class="btn btn-primary btn-md px-4 me-md-2 fw-bold"
                    >
                        Ir a Clientes
                    </button>
                    <button
                        type="button"
                        class="btn btn-outline-secondary btn-md px-4"
                    >
                        Contacto
                    </button>
                </div>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden">
                <img
                    class="svg-image"
                    src="src/assets/img/undraw_Engineering_team.png"
                    alt=""
                    width="100%"
                />
            </div>
        </div>
    </div>
</div>`;
};

window.addEventListener("load", () => {
	cargarContenido();
});

logo?.addEventListener("click", () => {
	cargarContenido();
});

home?.addEventListener("click", () => {
	cargarContenido();
});

crearClientes?.addEventListener("click", () => {
	main!.innerHTML = `
    <div class="container my-5">
        <div
            class="row p-4 pb-0 pe-lg-0 pt-lg-5 justify-content-start align-items-center rounded-3 border shadow-lg"
        >
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 class="display-6 fw-bold lh-1 text-body-emphasis mb-5">
                Crear Cliente:
                </h1>
                <div
                    class="d-grid gap-2 d-flex justify-content-end mb-4 mb-lg-3"
                >
                <div class="input-box">
                    <label class="input-label">Nombre</label>
                    <input placeholder="Ingrese nombre..." class="input" id="nombre" type="text">
                    <span class="input-helper text-danger">Ingrese un dato valido</span>

                    <label class="input-label">Apellido</label>
                    <input placeholder="Ingrese apellido..." class="input" id="apellido" type="text">
                    <span class="input-helper text-danger">Ingrese un dato valido</span>

                    <label class="input-label">Telefono</label>
                    <input placeholder="Ingrese telefono..." class="input" id="telefono" type="number">
                    <span class="input-helper text-danger">Ingrese un dato valido</span>

                    <label class="input-label">Dirección</label>
                    <input placeholder="Ingrese dirección..." class="input" id="direccion" type="text">
                    <span class="input-helper text-danger">Ingrese un dato valido</span>

                    <label class="input-label">Empresa</label>
                    <input placeholder="Ingrese código postal..." class="input" id="empresa" type="text">
                    <span class="input-helper text-danger">Ingrese un dato valido</span>
                </div>
                    <div class="input-box">
                        <label class="input-label">Cuit/Cuil</label>
                        <input placeholder="Ingrese cuit/cuil..." class="input" id="cuit" type="number">
                        <span class="input-helper text-danger">Ingrese un dato valido</span>

                        <label class="input-label labelPais">Pais</label>
                        <select class="selectPais" id="pais">
                        <option value="default" selected disabled>Seleccione un país...</option>
                        <option value="argentina">Argentina</option>
                        <option value="bolivia">Bolivia</option>
                        <option value="brasil">Brasil</option>
                        <option value="canada">Canadá</option>
                        <option value="chile">Chile</option>
                        <option value="colombia">Colombia</option>
                        <option value="costa-rica">Costa Rica</option>
                        <option value="cuba">Cuba</option>
                        <option value="ecuador">Ecuador</option>
                        <option value="el-salvador">El Salvador</option>
                        <option value="estados-unidos">Estados Unidos</option>
                        <option value="guatemala">Guatemala</option>
                        <option value="haiti">Haití</option>
                        <option value="honduras">Honduras</option>
                        <option value="mexico">México</option>
                        <option value="nicaragua">Nicaragua</option>
                        <option value="panama">Panamá</option>
                        <option value="paraguay">Paraguay</option>
                        <option value="peru">Perú</option>
                        <option value="uruguay">Uruguay</option>
                        </select>
                        

                        <label class="input-label">Localidad</label>
                        <input placeholder="Ingrese localidad..." class="input" id="localidad" type="text">
                        <span class="input-helper text-danger">Ingrese un dato valido</span>

                        <label class="input-label">Código postal</label>
                        <input placeholder="Ingrese código postal..." class="input" id="codpostal" type="text">
                        <span class="input-helper text-danger">Ingrese un dato valido</span>


                    </div>
                </div>
                <div class=" d-flex justify-content-end">
                    <button
                        id="guardarButton"
                        type="button"
                        class="btn btn-primary  btn-sm fw-bold mx-2"
                    >
                        Guardar
                    </button>
                    <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                    >
                        Cancelar
                    </button>
                    </div>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden">
            <img
                class="crearClienteImg"
                src="src/assets/img/undraw_Add_user.png"
                alt=""
                width="100%"
            />
        </div>
        </div>
    </div>
    `;
	//Escuchar evento del boton
	const guardarButtonInput =
		document.querySelector<HTMLButtonElement>("#guardarButton");

	guardarButtonInput?.addEventListener("click", (e) => {
		e.preventDefault();
		const cargaDeCliente: ICliente = cargarInputs();
		const validacion = validar(cargaDeCliente);
		console.log(validacion);
		if (validacion.length == 0) {
			crearCliente(cargaDeCliente);
		} else {
			validacion.forEach((element) => {
				alert(element);
			});
		}
	});
});

clientes?.addEventListener("click", () => {
	main!.innerHTML = `
    <p>proximamente...</p>
    `;
});

const cargarInputs = () => {
	const nombreInput = document.querySelector<HTMLInputElement>("#nombre")!;
	const apellidoInput = document.querySelector<HTMLInputElement>("#apellido")!;
	const telefonoInput = document.querySelector<HTMLInputElement>("#telefono")!;
	const cuitInput = document.querySelector<HTMLInputElement>("#cuit")!;
	const paisInput = document.querySelector<HTMLSelectElement>("#pais")!;
	const empresaInput = document.querySelector<HTMLInputElement>("#empresa")!;
	const localidadInput =
		document.querySelector<HTMLInputElement>("#localidad")!;
	const codPostalInput =
		document.querySelector<HTMLInputElement>("#codpostal")!;
	const direccionInput =
		document.querySelector<HTMLInputElement>("#direccion")!;

	const cliente: ICliente = {
		nombre: nombreInput.value,
		apellido: apellidoInput.value,
		numeroTelefono: Number(telefonoInput.value),
		pais: paisInput.value,
		localidad: localidadInput.value,
		codPostal: codPostalInput.value,
		direccion: direccionInput.value,
		empresa: empresaInput.value,
		cuitCuil: cuitInput.value,
	};
	return cliente;
};

function validar(cliente: ICliente) {
	const err = [];
	if (
		cliente.nombre.length == 0 ||
		cliente.apellido.length == 0 ||
		cliente.numeroTelefono == 0 ||
		cliente.direccion.length == 0 ||
		cliente.cuitCuil.length == 0 ||
		//falta validar pais si no hay ninguna opción seleccionada
		cliente.localidad.length == 0 ||
		cliente.codPostal.length == 0 ||
		cliente.empresa.length == 0
	) {
		err.push("Existen campos vacios");
		return err;
	}
	if (cliente.nombre.length < 3 || cliente.nombre.length >= 18) {
		err.push("Campo nombre debe tener entre 3 y 18 carácteres");
	}
	if (cliente.apellido.length < 3 || cliente.apellido.length >= 18) {
		err.push("Campo apellido debe tener entre 3 y 18 carácteres");
	}
	if (cliente.numeroTelefono < 8) {
		err.push("Campo telefono debe contener al menos 8 digitos");
	}
	if (cliente.direccion.length < 3 || cliente.direccion.length >= 30) {
		err.push("Campo direccion debe contener entre 3 y 30 carácteres");
	}
	if (cliente.cuitCuil.toString().length !== 11) {
		err.push("Campo cuit debe contener 11 carácteres Ej: 20393235222");
	}
	if (cliente.localidad.length < 3 || cliente.localidad.length >= 18) {
		err.push("Campo localidad debe contener entre 3 y 18 carácteres");
	}
	if (cliente.codPostal.length !== 5) {
		err.push("Campo código postal debe contener 5 digitos Ej: C1437");
	}
	if (cliente.empresa.length < 3 || cliente.empresa.length > 18) {
		err.push("Campo empresa debe contener entre 3 y 18 carácteres");
	}
	return err;
}

//Hacer que los alerts de las validaciones se muestren en los span de clase input-helper
