import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Error from "../components/Error";
import { estado } from "../data/estado";
import axiosInstance from "../config/axios";
export default function Proyects() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const formSubmit = async (data) => {
    console.log(data);

    const response = await axiosInstance.get(
      `/readActivity/${data.proyecto_id}`
    );
    setActividades(response.data);
    navigate("/listProyect");
    // cuando ya se termine de enviar el formulario se reinician los valores
    setValue("name", "");
    setValue("description", "");
  };

  const handleFilter = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Proyectos</h1>
        <form
          className="mb-10 rounded-2xl bg-white px-5 py-10 shadow-2xl"
          noValidate
          onSubmit={handleSubmit(formSubmit)}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="text-sm font-bold uppercase">
              Nombre del Proyecto
            </label>
            <input
              id="name"
              className="w-full border border-gray-100 p-3"
              type="text"
              placeholder="Ingrese el Nombre del Proyecto"
              {...register("name", {
                required: "El Nombre del Proyecto es obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "El Nombre del Proyecto debe tener al menos 2 caracteres",
                },
              })}
            />
            {errors.name && <Error>{errors.name.message?.toString()}</Error>}
          </div>
          <div className="mb-5">
            <label
              htmlFor="description"
              className="text-sm font-bold uppercase">
              Descripcion
            </label>
            <textarea
              id="description"
              className="w-full border border-gray-100 p-3"
              type="text"
              placeholder="Coloca una descripcion del Proyecto"
              {...register("description", {
                required: "La Descripcion del proyecto es obligatorio",
                minLength: {
                  value: 5,
                  message:
                    "La Descripcion del proyecto debe tener al menos 5 caracteres",
                },
              })}></textarea>
            {errors.description && (
              <Error>{errors.description.message?.toString()}</Error>
            )}
          </div>
          <div className="mb-5">
            <select
              id="category"
              className="flex-1 rounded-xl bg-slate-300 w-full p-3"
              onChange={handleFilter}
              {...register("category", {
                required: "La Categoria del proyecto es obligatorio",
              })}>
              <option value=""> --Todos los estados</option>
              {estado.map((estadoOp) => (
                <option
                  key={estadoOp.id}
                  value={estadoOp.nombre}
                  className={`${estadoOp.color}`}>
                  {estadoOp.nombre}
                </option>
              ))}
            </select>
            {errors.category && (
              <Error>{errors.category.message?.toString()}</Error>
            )}
          </div>
          <input
            type="submit"
            className="w-full cursor-pointer bg-gray-500 p-3 font-bold uppercase text-white transition-colors hover:bg-gray-700"
            value={"Crear Proyecto"}
          />
        </form>
      </div>
    </div>
  );
}
