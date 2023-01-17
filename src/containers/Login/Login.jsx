import "./Login.css"
const Home = () => {
  return (
    <div className="welcomeDesign">
      <div className="back"></div>
      <div className="Text-Wrapper">
        <div className="left-text">
          <h1 className="user">User Login</h1>
          <h4 className="description1">Logic not done yet</h4>
        </div>
        <div className="right-text">
          <h3></h3>
        </div>
      </div>
    </div>
  )
}

export default Home

// fazer alterações

/*const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const { addUserToContext } = useContext(AuthContext)
  const { addAdminToContext } = useContext(AuthContext)

  const handleData = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const login = async (user) => {
    let response = await loginUser(user)
    if (response.length === 0 || response === false) {
      setError("E-mail or password doesn't match")
    } else {
      addUserToContext(response[0])
      setError("no error")
      if (response[0].isAdmin === "true") {
        addAdminToContext(response[0])
        navigate("/admin")
      } else navigate("/profile")
    }
  }

  return (
    <div className="loginDesign">
      <input
        className="myInput"
        type="email"
        name="email"
        id="email"
        title="email"
        placeholder="E-mail:"
        autoComplete="off"
        onChange={(e) => {
          handleData(e)
        }}
      />
      <input
        className="myInput"
        type="password"
        name="password"
        id="password"
        title="password"
        placeholder="Password:"
        autoComplete="off"
        onChange={(e) => {
          handleData(e)
        }}
      />
      <div className="bottomSection">
        <div
          className="designLoginButton"
          onClick={() => {
            login(user)
          }}
        >
          Login
        </div>
      </div>
      <div>{error === "no error" ? null : error}</div>
    </div>
  )
}

export default Login*/
