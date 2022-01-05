import React, {useState} from "react";

const AddUserForm = (props) => {

    const initUser = {id: null, nome:'', sobrenome:'' };

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(user.nome && user.sobrenome){
            handleChange(e, props.addUser(user));
        }
    }

    return(
        <form className="card-body">
            <div className="mb-4">
                <label className="form-label">Nome:</label>
                <input className="form-control" type="text" value={user.nome} name="nome" onChange={handleChange} />
            </div>
            <div className="mb-4">
                <label className="form-label">Sobrenome:</label>
                <input className="form-control" type="text" value={user.sobrenome} name="sobrenome" onChange={handleChange} />
            </div>
            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Adicionar</button>
        </form>
    )

}

export default AddUserForm;