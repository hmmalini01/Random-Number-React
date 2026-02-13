import { useState } from "react"

// Random num

function Random() {

    let [ranum, setRando] = useState(null)

    function randomNumber() {
        setRando(Math.floor(Math.random() * 100) + 1)
    }

    return (
        <div style={{
            textAlign: "center",
            padding: "20px",
            border: "1px solid #ccc",
            width: "300px",
            margin: "50px auto",
            borderRadius: "10px",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.2)"
        }}>

            <h2>Random Number Generator</h2>

            {/* Conditional Rendering */}
            {ranum === null ? (<p>No number generated yet</p>) : (<h1>{ranum}</h1>)}

            <button
                onClick={randomNumber}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#007bff",
                    color: "white"
                }}
            >
                Generate Random Number
            </button>

        </div>
    )
}

export default Random
