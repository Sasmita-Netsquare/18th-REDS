/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { AdminUserForm } from "../../components";
import Dialog from "../../components/common/Dialog";
import useEventAdmin from "../../features/hooks/useEventAdmin";

export default function Users() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const { fetchEventAdmins, eventAdmins } = useEventAdmin();

  useEffect(() => {
    fetchEventAdmins();
  }, []);
  console.log(eventAdmins, "eventAdmins");

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-end items-end w-full mb-4">
        <button
          onClick={openDialog}
          className="flex justify-center items-center bg-blue-700 rounded-md text-white py-2 px-4 uppercase text-sm"
        >
          <IoIosAdd className="text-xl mr-1" />
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
          {Array.isArray(eventAdmins) &&
            eventAdmins.map((item: any) => (
              <>
                {console.log(item, "item")}
                <tr key={item.id} className="bg-white rounded-lg shadow-sm">
                  <td className="px-4 py-2 text-sm">
                    {item.user?.first_name} {item.user?.last_name}
                  </td>
                  <td className="px-4 py-2 text-sm">{item.user?.email}</td>
                  <td className="px-4 py-2 text-sm">{item?.user?.role}</td>
                  <td className="px-4 py-2 text-sm">
                    {new Date(item.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 text-right text-sm">
                    <div className="flex gap-2 justify-end">
                      <button className="px-4 py-2 border border-blue-500 rounded hover:bg-blue-50">
                        Update
                      </button>
                      <button className="px-4 py-2 border border-red-500 rounded hover:bg-red-50">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </div>
  );
}
