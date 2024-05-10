import { useState } from "react"

const ContactForm = ({}) => {
    const [firstName, setFristName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            firstName,
            lastName,
            email
        }
        const url = "http://127.0.0.1:5000/create_contact"
        const option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, option)
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json()
            alert(data.message)
        } else {
            // successful
        }
    }

    return <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="firstName">First Name:</label>
            <input 
                type="text" 
                id="firstName" 
                value={firstName} 
                onChange={(e) => setFristName(e.target.value)} 
            />
        </div>
        <div>
            <label htmlFor="lastName">Last Name:</label>
            <input 
                type="text" 
                id="lastName" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
            />
        </div>
        <div>
            <label htmlFor="email">email:</label>
            <input 
                type="text" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
        </div>
        <button type="submit">Create Contact</button>
    </form>
}

export default ContactForm