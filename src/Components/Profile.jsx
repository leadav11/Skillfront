import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Lea from '.././assets/Images/Lea.png';

export default function Profile({ onProfileUpdate }) {
  const [profileData, setProfileData] = useState({
    username: "Leadev11",
    name: "Leandro",
    lastName: "Portocarrero",
    email: "leaportocarrero@gmail.com",
    age: 21,
    password: "******",
    avatar: Lea,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newData, setNewData] = useState(profileData);

  const variantStyles = {
    default: {
      bgColor: "bg-gray-100",
      textColor: "text-gray-700",
      buttonColor: "bg-green-500 hover:bg-blue-700 text-white",
      titleFont: "font-sans text-2xl font-bold",
    },
    kids: {
      bgColor:
        "",
      textColor: "text-yellow-800",
      buttonColor: "bg-yellow-500 hover:bg-yellow-700 text-white",
      titleFont: "font-comics text-xl font-bold text-blue-500",
      fontdata: "font-comics text-lg",
      font: "font-comics text-md ml-8",
    },
    young: {
      bgColor:" ",
      textColor: "text-pink-700",
      buttonColor: "bg-pink-500 hover:bg-pink-700 text-white",
      titleFont: "font-arcade text-2xl text-yellow-500  text-shadow-neon animate-neon",
      fontdata: "font-arcade text-xs",
      font: "font-arcade text-xs ml-2",
    },
    adult: {
      bgColor: " ",
      textColor: "text-white",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-white",
      titleFont: "font-bree text-3xl font-bold text-green-700",
      fontdata: "font-bree text-lg",
      font: "font-bree text-md ml-8",
    },
  };

  const [searchParams] = useSearchParams();
  const variant = searchParams.get("variant") || "default";
  const styles = variantStyles[variant] || variantStyles.default;

  // Esta función actualiza el estado del perfil cuando se cambian los valores en los inputs del formulario.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prev) => ({ ...prev, [name]: value }));
  };

  // Esta función guarda los cambios realizados en el perfil y actualiza el estado general.
  const saveChanges = () => {
    setProfileData(newData);
    setIsEditing(false);
    if (onProfileUpdate) onProfileUpdate(newData); // Notificar cambios
  };

  const cancelEditing = () => {
    setNewData(profileData);
    setIsEditing(false);
  };
  // Esta función maneja la carga y previsualización de una nueva imagen de perfil.
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewData((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`min-h-screen ${styles.bgColor} p-6`}>
      <div className="max-w-4xl mx-auto bg-white/70 shadow-lg rounded-lg p-8 mt-20">
        <h2 className={`${styles.titleFont} text-center mt-5 mb-10`}>
          Editar perfil
        </h2>
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Sección de Foto de Perfil */}
          <div className="flex flex-col items-center lg:items-start gap-10">
            <div className="relative group w-40 h-40">
              {/* Imagen de perfil */}
              <img
                src={newData.avatar}
                alt="Avatar"
                className="w-full h-full rounded-full object-cover shadow-md"
              />
              {/* Input de tipo file para cambiar la foto */}
              {isEditing && (
                <label className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center rounded-full text-sm font-semibold cursor-pointer transition-opacity hover:opacity-80">
                  Cambiar Foto
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </label>
              )}
            </div>
            {/* Enlace para subir una foto cuando no se está editando */}
            {!isEditing && (
              <p className={`${styles.font} text-blue-500 mb-10`}>
                <a href="#">Sube una foto</a>
              </p>
            )}
          </div>

          {/* Sección de Datos */}
          <div className={`flex-1 ${styles.fontdata}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-semibold text-gray-600">
                  Nombres
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={newData.name}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                ) : (
                  <p className="text-gray-700">{profileData.name}</p>
                )}
              </div>
              {/* Apellidos */}
              <div>
                <label className="block text-sm font-semibold text-gray-600">
                  Apellidos
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={newData.lastName}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                ) : (
                  <p className="text-gray-700">{profileData.lastName}</p>
                )}
              </div>
              {/* Usuario */}
              <div>
                <label className="block text-sm font-semibold text-gray-600">
                  Usuario
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="username"
                    value={newData.username}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                ) : (
                  <p className="text-gray-700">{profileData.username}</p>
                )}
              </div>
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-600">
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={newData.email}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                ) : (
                  <p className="text-gray-700">{profileData.email}</p>
                )}
              </div>
              {/* Edad */}
              <div>
                <label className="block text-sm font-semibold text-gray-600">
                  Edad
                </label>
                {isEditing ? (
                  <input
                    type="number"
                    name="age"
                    value={newData.age}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                ) : (
                  <p className="text-gray-700">{profileData.age}</p>
                )}
              </div>
              {/* Contraseña */}
              <div>
                <label className="block text-sm font-semibold text-gray-600">
                  Contraseña
                </label>
                {isEditing ? (
                  <input
                    type="password"
                    name="password"
                    value={newData.password}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                ) : (
                  <p className="text-gray-700">{profileData.password}</p>
                )}
              </div>
            </div>
            {/* Botones */}
            <div className="mt-6 flex justify-end space-x-4">
              {isEditing ? (
                <>
                  <button
                    onClick={saveChanges}
                    className={`px-4 py-2 rounded-lg ${styles.buttonColor}`}
                  >
                    Guardar Cambios
                  </button>
                  <button
                    onClick={cancelEditing}
                    className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800"
                  >
                    Cancelar
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className={`px-4 py-2 rounded-lg ${styles.buttonColor}`}
                >
                  Editar Perfil
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
