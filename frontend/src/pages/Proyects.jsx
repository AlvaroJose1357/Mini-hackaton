import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Error from "../components/Error";
export default function Proyects() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const formSubmit = handleSubmit((data) => {
    console.log(data);
    navigate("/proyectos");
    // cuando ya se termine de enviar el formulario se reinician los valores
    setValue("name", "");
  });
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Proyectos</h1>
        <form
          className="mb-10 rounded-2xl bg-white px-5 py-10 shadow-2xl"
          noValidate
          onSubmit={formSubmit}>
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
                required: "El Nombre del Paciente es obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "El Nombre del Paciente debe tener al menos 2 caracteres",
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
              {...register("name", {
                required: "El Nombre del Paciente es obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "El Nombre del Paciente debe tener al menos 2 caracteres",
                },
              })}></textarea>
            {errors.name && <Error>{errors.name.message?.toString()}</Error>}
          </div>
        </form>
      </div>
    </div>
  );
}
