import { useState } from "react";
import { Modal } from "./Modal";

export function SearchEmployee({ onAddEmployee }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    position: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAddEmployee(formData);
    setIsModalOpen(false);
    setFormData({ name: "", lastName: "", position: "", description: "" });
  };

  return (
    <div className="flex items-center justify-between mb-10">
      <div className="flex gap-x-4">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => setIsModalOpen(true)}
        >
          Añadir
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Agregar Empleado</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded-lg"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Apellido"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 rounded-lg"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Cargo"
            value={formData.position}
            onChange={handleChange}
            className="border p-2 rounded-lg"
            required
          />
          <textarea
            name="description"
            placeholder="Descripción"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 rounded-lg"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Guardar
          </button>
        </form>
      </Modal>
    </div>
  );
}
