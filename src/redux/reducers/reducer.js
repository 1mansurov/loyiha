const initialState = {
    token: localStorage.getItem("token"),
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("token", action.token)
            return {
              token: action.token
            }

        case "LOGOUT":
            localStorage.removeItem("token")
            return {
                token: null
            }

        default:
            return state
    }
}

export default loginReducer