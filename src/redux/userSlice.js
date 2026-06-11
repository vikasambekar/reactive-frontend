import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";


// Async Action
export const loginUser = createAsyncThunk(
    "user/loginUser",
    async ({ username, password }) => {

        const response = await fetch(
            "http://localhost:8080/api/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            }
        );

        if (!response.ok) {
            throw new Error("Login Failed");
        }

        const token = await response.text();

        return {
            username,
            token
        };
    }
);


const initialState = {
    username: "",
    token: "",
    isAuthenticated: false,
    loading: false,
    error: null
};


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.username = "";
            state.token = "";
            state.isAuthenticated = false;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(
                loginUser.pending,
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
            )

            .addCase(
                loginUser.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.username =
                        action.payload.username;
                    state.token =
                        action.payload.token;
                    state.isAuthenticated = true;
                }
            )

            .addCase(
                loginUser.rejected,
                (state, action) => {
                    state.loading = false;
                    state.error =
                        action.error.message;
                }
            );
    }
});


export const {
    logout
} = userSlice.actions;

export default userSlice.reducer;