import React, { useState } from "react";

function AddTodo({ onAdd }) {
  const [form, setForm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.trim()) {
      onAdd(form);
      setForm("");
    }
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          placeholder="Add new item"
          value={form}
          onChange={(e) => setForm(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:bg-blue-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddTodo;