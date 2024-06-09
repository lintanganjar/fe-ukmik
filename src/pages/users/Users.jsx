import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { dummyData } from "./data-dummy";
import { Button } from "@/components/ui/button";
import { useQuery } from "react-query";
import { getAllUsers } from "@/services/user/get-all-users";
import { useAuthStore } from "@/stores/useAuthStore";

const Users = () => {
  const [selectedRows, setSelectedRows] = useState({});
  const { accessToken } = useAuthStore();

  const handleCheckboxChange = (userId) => {
    setSelectedRows((prevSelectedRows) => ({
      ...prevSelectedRows,
      [userId]: !prevSelectedRows[userId],
    }));
  };

  function convertToCSV(data) {
    const header =
      "ID,NRA,NIM,role_id,subrole_id,Nama,Username,Email,Password,No Telp,Jenis Kelamin,Agama,Image,Fakultas,Prodi,Status,Created At,Updated At";
    const rows = data.map((entry) =>
      Object.values(entry)
        .map((value) => `"${value}"`)
        .join(",")
    );
    return `${header}\n${rows.join("\n")}`;
  }

  const handleDownload = (data) => {
    const csvData = convertToCSV(data);
    const blob = new Blob([csvData], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "CalonAnggota.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // Queries
  const {
    data: users,
    isLoading,
    error,
  } = useQuery(["getusers", accessToken], () => getAllUsers(accessToken));

  if (error) return <div>An error occurred: {error.message}</div>;
  return (
    <section className="flex flex-col gap-4  md:pt-24 w-[85vw]">
      <h1 className="text-black text-xl font-bold pl-[13px] pr-9 ">
        Data Calon Anggota
      </h1>
      <div className="flex flex-col gap-[21px] pl-[13px] pr-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between gap-8">
              <div className="w-full flex flex-row gap-2 p-2 border border-grey-9 rounded-lg">
                <img src="/search.svg" alt="Search-Icon" />
                <input
                  className="text-xs leading-5 focus:outline-none"
                  type="text"
                  placeholder="Search Site"
                />
              </div>

              <div className="flex items-center gap-1 justify-end ">
                <img src="/settings-2.svg" alt="Setting-Icon" />
                <DropdownMenu className="">
                  <DropdownMenuTrigger className=" ">
                    Filter
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <DropdownMenuLabel>Filter by :</DropdownMenuLabel>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem>NRA</DropdownMenuItem>

                    <DropdownMenuItem>Name</DropdownMenuItem>

                    <DropdownMenuItem>jenisKelamin</DropdownMenuItem>

                    <DropdownMenuItem>Departemen</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-fit bg-white text-black flex flex-row gap-[7px] items-center border border-gray-300 rounded-md p-2 text-xs font-medium focus:outline-none focus:border-blue-500"
            >
              <img src="/trash-2.svg" alt="Trash-Icon" />
              Delete
            </Button>
          </div>

          <div className="flex flex-row justify-end -mt-14 md:mt-0 gap-7">
            <div className="flex flex-col gap-5">
              <div className="flex flex-row justify-between gap-[10px]">
                <Button
                  variant="outline"
                  className="flex flex-row gap-[7px] w-fit bg-white text-black items-center border border-gray-300 rounded-md p-2 text-xs font-medium focus:outline-none focus:border-blue-500"
                  onClick={() => handleDownload(users.data.filter((user) => user.role_id === 6))}
                >
                  <img src="/download.svg" alt="Trash-Icon" />
                  Download CSV
                </Button>
                <Button
                  variant="outline"
                  className="flex flex-row gap-[7px] text-black items-center bg-[#A2D7FF] border border-gray-300  rounded-md p-2 text-xs font-medium focus:outline-none focus:border-blue-500"
                >
                  <img src="/plus.svg" alt="Trash-Icon" />
                  Add user
                </Button>
              </div>

              <div className="flex justify-end">
                <h3 className="text-xs font-semibold">
                  150 users registrations
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full">
        <div className=" mx-[13px] ">
          {/* Integrate DataTable component */}
          {isLoading ? (
            <div>Fetching users...</div>
          ) : (
            <DataTable
              columns={columns}
              data={users.data.filter((user) => user.role_id === 7)}
              selectedRows={selectedRows}
              handleCheckboxChange={handleCheckboxChange}
            />
          )}
        </div>
      </div>

      {/* <ExportData /> */}
    </section>
  );
};

export default Users;
