/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { fetchEventAdmins } from "../slices/eventAdminSlice";
import type { AppDispatch, RootState } from "../store";

const useEventAdmin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { eventAdmins, eventAdmin, loading } = useSelector(
    (state: RootState) => state.eventAdmin
  );
  console.log(eventAdmins, "eventAdmin hook");
  return {
    eventAdmins,
    eventAdmin,
    isLoading: {
      fetchAll: loading.fetchAll,
      fetchOne: loading.fetchOne,
      create: loading.create,
      update: loading.update,
      delete: loading.delete,
    },
    fetchEventAdmins: () => dispatch(fetchEventAdmins()),
    // fetchCategoryById: (id: string) => dispatch(fetchCategoryById(id)),
    // createCategory: (data: CategoryPayload) => dispatch(createCategory(data)),
    // updateCategory: (id: string, data: CategoryPayload) =>
    //   dispatch(updateCategory({ id, data })),
    // deleteCategory: (id: string) => dispatch(deleteCategory(id)),
    // clearSelectedCategory: () => dispatch(clearSelectedCategory()),
  };
};

export default useEventAdmin;
