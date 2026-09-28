export default function Sign(){
    return(
        <div className="signup-page">
            <h1>You can sign up here</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="submit" value="Sign Up"/>
        </div>
    )
}