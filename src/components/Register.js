import './Register.css'


function register () {
    return (
        <div id = "registerBox">
       <form onSubmit={handleSubmit}>
            <h1>Register for your Stranger's Things account</h1>
            <label>Create username:</label>
            <input id="username" placeholder="Create username here"></input>
            <label>Password</label>
            <input id="password" placeholder="Create password"></input>
            <input id="password" placeholder="Retype password"></input>
            <button type="submit">Create account</button>
            
        </form>
        </div>





    )


}
