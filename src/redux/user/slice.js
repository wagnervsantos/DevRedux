import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    user: null,
    users: [],
    loading: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUser: (state, action) => {
            console.log(action.payload);

            return { ...state,
            user: {
                name: action.payload.name,
                email: action.payload.email,
                address: null,
                } 
            }
        },
        logoutUser: (state) => {
            return{
                ...state,
                user: null,
            }
        },
        address: (state, action) => {
            if(action.payload.location === '' || action.payload.number === ''){
                alert("PREENCHA TODOS OS CAMPOS")
                return{...state}
            }
            if(state.user === null){
                alert("Faça o login para cadastrar um endereço")

                return{ ...state }
            }

            alert("DADOS ATUALIZADO")

            return{
                ...state,
                user:{
                    ...state.user,
                    address:{
                        location: action.payload.location,
                        number: action.payload.number,
                    }
                }
            } 
        },
        deleteAdress: (state) => {
            return{
                ...state,
                user:{
                    ...state.user,
                    address: null,
                }
            }
        },
        fetchUsers: (state) => {
            state.loading = true
        },
        fecthUsersSuccess: (state, action) => {
            //console.log(action.payload)
            state.users = action.payload;
            state.loading = false
            
        },
        fecthUsersFailure: (state, action) => {
            console.log("Caiu na failure")
            console.log(action,payload)
            state.loading = false;
        }

    }
})

export const { createUser, logoutUser, address, deleteAdress, fetchUsers,
     fecthUsersSuccess, fecthUsersFailure } = userSlice.actions;

export default userSlice.reducer;