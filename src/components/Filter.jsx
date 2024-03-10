import { useState } from "react";

export default function Filter({ text, Todo }) {
    const [status, setstatus] = useState([]);
    const handleComplet = () => {
        setstatus(Todo.filter((t) => t.status === text))
        console.log(status)
    }

    return (
        <button onClick={handleComplet}>{text}</button>
    );
}