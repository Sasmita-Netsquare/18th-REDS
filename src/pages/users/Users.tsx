// src/components/UserTable.tsx
import { useState } from "react";

import { IoIosAdd } from "react-icons/io";
import { AdminUserForm } from "../../components";
import Dialog from "../../components/common/Dialog";
import type { EventUser } from "../types/EventUser";

export const dummyUsers: EventUser[] = [
  {
    id: 1,
    fullName: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "admin",
    createdAt: "2025-01-02T08:15:30Z",
  },
  {
    id: 2,
    fullName: "Bob Smith",
    email: "bob.smith@example.com",
    role: "user",
    createdAt: "2025-01-10T11:22:45Z",
  },
  {
    id: 3,
    fullName: "Carol Martinez",
    email: "carol.martinez@example.com",
    role: "guest",
    createdAt: "2025-01-18T14:35:20Z",
  },
  {
    id: 4,
    fullName: "David Lee",
    email: "david.lee@example.com",
    role: "user",
    createdAt: "2025-01-25T09:05:10Z",
  },
  {
    id: 5,
    fullName: "Eva Green",
    email: "eva.green@example.com",
    role: "admin",
    createdAt: "2025-02-02T16:45:00Z",
  },
  {
    id: 6,
    fullName: "Frank Wright",
    email: "frank.wright@example.com",
    role: "guest",
    createdAt: "2025-02-10T12:30:55Z",
  },
  {
    id: 7,
    fullName: "Grace Kim",
    email: "grace.kim@example.com",
    role: "user",
    createdAt: "2025-02-18T07:50:40Z",
  },
  {
    id: 8,
    fullName: "Henry Adams",
    email: "henry.adams@example.com",
    role: "guest",
    createdAt: "2025-02-25T19:15:25Z",
  },
];
export default function Users() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-end items-end w-full">
        <button
          onClick={openDialog}
          className="flex justify-center items-center bg-blue-700 rounded-md text-white py-2 px-4 uppercase text-sm"
        >
          <IoIosAdd className="text-xl" />
          Add User
        </button>
        {isDialogOpen && (
          <Dialog onClose={closeDialog} isOpen={isDialogOpen}>
            <AdminUserForm setIsDialogOpen={setIsDialogOpen} />
          </Dialog>
        )}
      </div>
      <table className="min-w-full table-auto md:table-fixed border-separate border-spacing-y-2">
        <thead className="bg-purple-200 rounded-2xl">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium">
              Full Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium">Email</th>
            <th className="px-4 py-2 text-left text-sm font-medium">Role</th>
            <th className="px-4 py-2 text-left text-sm font-medium">
              Created At
            </th>
            <th className="px-4 py-2 text-right text-sm font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {dummyUsers.map((user) => (
            <tr
              key={user.id}
              className="bg-white md:bg-transparent md:border md:border-gray-200"
            >
              <td className="px-4 py-2 whitespace-nowrap">{user.fullName}</td>
              <td className="px-4 py-2 whitespace-nowrap">{user.email}</td>
              <td className="px-4 py-2 whitespace-nowrap capitalize">
                {user.role}
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                {new Date(user.createdAt).toLocaleDateString()}
              </td>
              <td className="px-4 py-2 text-right space-x-2">
                <button
                  // onClick={() => handleUpdate(user)}
                  className="px-3 py-1 border border-blue-500 rounded hover:bg-blue-50 focus:outline-none focus:ring"
                >
                  Update
                </button>
                <button
                  // onClick={() => handleDelete(user.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
