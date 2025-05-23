/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import eventAdminService from "../../services/eventAdminService";

interface EventAdminState {
  eventAdmins: EventAdmin[];
  eventAdmin: EventAdmin | [];
  loading: {
    fetchAll: boolean;
    fetchOne: boolean;
    create: boolean;
    update: boolean;
    delete: boolean;
  };
}

const initialState: EventAdminState = {
  eventAdmins: [],
  eventAdmin: [],
  loading: {
    fetchAll: false,
    fetchOne: false,
    create: false,
    update: false,
    delete: false,
  },
};

const handleError = (error: any): string => {
  return (
    error.response?.data?.message || error.message || "Something went wrong"
  );
};

export const fetchEventAdmins = createAsyncThunk(
  "eventAdmin/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await eventAdminService.getAllEventAdmin();
      console.log(res);
      return res || [];
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleError(error));
    }
  }
);

// export const fetchCategoryById = createAsyncThunk(
//   "category/fetchById",
//   async (id: string, thunkAPI) => {
//     try {
//       const res = await categoryService.getCategoryById(id);
//       return res?.resultObj || null;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(handleError(error));
//     }
//   }
// );

// export const createCategory = createAsyncThunk(
//   "category/create",
//   async (data: CategoryPayload, thunkAPI) => {
//     try {
//       const res = await categoryService.createCategory(data);
//       return res;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(handleError(error));
//     }
//   }
// );

// export const updateCategory = createAsyncThunk(
//   "category/update",
//   async ({ id, data }: { id: string; data: CategoryPayload }, thunkAPI) => {
//     try {
//       const res = await categoryService.updateCategory(id, data);
//       return res;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(handleError(error));
//     }
//   }
// );

// export const deleteCategory = createAsyncThunk(
//   "category/delete",
//   async (id: string, thunkAPI) => {
//     try {
//       await categoryService.deleteCategory(id);
//       return id;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(handleError(error));
//     }
//   }
// );

const eventAdminSlice = createSlice({
  name: "eventAdmin",
  initialState,
  reducers: {
    clearSelectedEventAdmin(state) {
      state.eventAdmin = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventAdmins.pending, (state) => {
        state.loading.fetchAll = true;
      })
      .addCase(fetchEventAdmins.fulfilled, (state, action) => {
        console.log(action.payload, "action.payload");
        state.loading.fetchAll = false;
        state.eventAdmins = action.payload;
      })
      .addCase(fetchEventAdmins.rejected, (state, action) => {
        state.loading.fetchAll = false;
      });

    //   .addCase(fetchCategoryById.pending, (state) => {
    //     state.loading.fetchOne = true;
    //   })
    //   .addCase(
    //     fetchCategoryById.fulfilled,
    //     (state, action: PayloadAction<Category | null>) => {
    //       state.loading.fetchOne = false;
    //       state.category = action.payload?.children || [];
    //     }
    //   )
    //   .addCase(fetchCategoryById.rejected, (state, action) => {
    //     state.loading.fetchOne = false;
    //   })

    //   .addCase(createCategory.pending, (state) => {
    //     state.loading.create = true;
    //   })
    //   .addCase(
    //     createCategory.fulfilled,
    //     (state, action: PayloadAction<Category>) => {
    //       state.loading.create = false;
    //       state.categories.push(action.payload);
    //     }
    //   )
    //   .addCase(createCategory.rejected, (state, action) => {
    //     state.loading.create = false;
    //   })

    //   .addCase(updateCategory.pending, (state) => {
    //     state.loading.update = true;
    //   })
    //   .addCase(
    //     updateCategory.fulfilled,
    //     (state, action: PayloadAction<Category>) => {
    //       state.loading.update = false;
    //       const index = state.categories.findIndex(
    //         (cat) => cat.id === action.payload.id
    //       );
    //       if (index !== -1) state.categories[index] = action.payload;
    //     }
    //   )
    //   .addCase(updateCategory.rejected, (state, action) => {
    //     state.loading.update = false;
    //   })

    //   .addCase(deleteCategory.pending, (state) => {
    //     state.loading.delete = true;
    //   })
    //   .addCase(
    //     deleteCategory.fulfilled,
    //     (state, action: PayloadAction<string>) => {
    //       state.loading.delete = false;
    //       state.categories = state.categories.filter(
    //         (cat) => String(cat.id) !== action.payload
    //       );
    //     }
    //   )
    //   .addCase(deleteCategory.rejected, (state, action) => {
    //     state.loading.delete = false;
    //   });
  },
});

export const { clearSelectedEventAdmin } = eventAdminSlice.actions;
export default eventAdminSlice.reducer;
