/* eslint-disable @typescript-eslint/no-explicit-any */
import { get } from "../utils/api";

const eventAdminService = {
  getAllEventAdmin: async () => {
    try {
      const response = await get("event-admin", { requireAuth: false });
      return response as {
        resultObj: any;
        eventAdmin: EventAdmin[];
        totalItems: number;
        totalPages: number;
        currentPage: number;
      };
    } catch (error) {
      console.error("Fetch Event Admin failed:", error);
      throw new Error("Fetch Event Admin failed. Please try again.");
    }
  },

  // createCategory: async (categoryData: CategoryPayload) => {
  //   try {
  //     const response = await create("admin/categories", categoryData);
  //     return response as Category;
  //   } catch (error) {
  //     throw error;
  //   }
  // },

  // getCategoryById: async (id: string) => {
  //   try {
  //     const response = await get(`admin/categories/${id}`, {
  //       requireAuth: false,
  //     });
  //     return response as Category;
  //   } catch (error) {
  //     throw error;
  //   }
  // },

  // getCategoryBySlug: async (slug: string) => {
  //   try {
  //     const response = await get(`admin/categories/slug/${slug}`, {
  //       requireAuth: false,
  //     });
  //     return response as Category;
  //   } catch (error) {
  //     throw error;
  //   }
  // },

  // updateCategory: async (id: string, categoryData: CategoryPayload) => {
  //   try {
  //     const response = await update("admin/categories", id, categoryData);
  //     return response as Category;
  //   } catch (error) {
  //     throw error;
  //   }
  // },

  // deleteCategory: async (id: string) => {
  //   try {
  //     const response = await _delete("admin/categories", id);
  //     return response as { id: number; name: string };
  //   } catch (error) {
  //     throw error;
  //   }
  // },
};

export default eventAdminService;
