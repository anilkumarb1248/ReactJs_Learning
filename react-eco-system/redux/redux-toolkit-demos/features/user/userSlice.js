const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

const initialState = {
  loading: false,
  user: [],
  error: "",
};

// Generates pedning, fulfilled and rejected action types
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.data.map((user) => user.id);
    });
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      (state.loading = false), (state.error = "");
      state.user = action.payload;
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      (state.loading = false), (state.user = []);
      state.error = action.error.message;
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
