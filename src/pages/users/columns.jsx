import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CaretSortIcon,
  DotsHorizontalIcon,
  CheckIcon,
} from "@radix-ui/react-icons";

// batas
import * as React from "react";
// import { CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link, useNavigate } from "react-router-dom";
import { candidateDecision } from "@/services/candidate/candidate-decission";
import { toast } from "@/components/ui/use-toast";
import { useAuthStore } from "@/stores/useAuthStore";

const frameworks = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "superAdmin",
    label: "Super Admin",
  },
  {
    value: "phKeanggotaan",
    label: "PH - Keanggotaan",
  },
  {
    value: "phPendidikan",
    label: "PH - Pendidikan",
  },
  {
    value: "phMinatDanBakat",
    label: "PH - Minat & Bakat",
  },
  {
    value: "ph",
    label: "PH - Pendidikan",
  },
  {
    value: "phPublikasi",
    label: "PH - Publikasi",
  },
];

const roleIndex = {
  1: "Super Admin",
  2: "Admin",
  3: "BPH",
  4: "PH",
  5: "DPO",
  6: "Anggota",
  7: "Calon Anggota",
};

const handleDecision = async (decision) => {
  try {
    const payload = {
      approval: decision.approval,
      description: decision.description,
    };

    const res = await candidateDecision(
      decision.id,
      decision.accessToken,
      payload
    );

    if (res)
      toast({
        title: "Success",
        description: "Decision Success",
      });
  } catch (error) {
    toast({
      title: "Failed",
      description: "Decision Failed",
    });
    throw error;
  }
};

export const columns = [
  {
    id: "select",
    accessorKey: "id",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <>
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </>
    ),
    enableSorting: false,
    size: 50,
  },
  {
    accessorKey: "nra",
    header: "NRA",
    cell: ({ row }) => {
      const value = row.getValue("nra");
      return value ?? <i className="text-grey-8">Masih Calon Anggota</i>;
    },
  },
  {
    accessorKey: "nama",
    header: "Name",
    cell: ({ row }) => {
      const value = row.getValue("nama");
      const style = { width: "200px", display: "flex" };

      return <td style={style}>{value}</td>;
    },
  },
  {
    accessorKey: "jenis_kelamin",
    // header: "Jenis Kelamin",
    // // size: 800000
    // size: 140,
    header: () => {
      const style = { width: "max-content", display: "flex" };
      return <div style={style}>Jenis Kelamin</div>;
    },
    cell: ({ row }) => {
      const value = row.getValue("jenis_kelamin");
      const style = { width: "max-content", display: "flex" };

      return (
        <td style={style}>{value === "MALE" ? "Laki - Laki" : "Perempuan"}</td>
      );
    },
  },
  {
    accessorKey: "program_studi",
    header: "Prodi",
    cell: ({ row }) => {
      const value = row.getValue("program_studi");
      const style = { width: "150px", display: "flex" };

      return <td style={style}>{value}</td>;
    },
  },
  // {
  //   accessorKey: "role_id",
  //   header: () => {
  //     // eslint-disable-next-line react-hooks/rules-of-hooks
  //     const [open, setOpen] = React.useState(false)
  //     // eslint-disable-next-line react-hooks/rules-of-hooks
  //     const [value, setValue] = React.useState("")
  //     return (
  //       <Popover open={open} onOpenChange={setOpen}>
  //         <PopoverTrigger asChild>
  //           <Button
  //             variant="outline"
  //             role="combobox"
  //             aria-expanded={open}
  //             className="w-[150px] justify-between bg-transparent hover:bg-transparent border-none"
  //           >
  //             {value
  //               ? frameworks.find((framework) => framework.value === value)?.label
  //               : "Role & Subrole"}
  //             <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
  //           </Button>
  //         </PopoverTrigger>
  //         <PopoverContent className="w-[200px] p-0">
  //           <Command>
  //             <CommandInput placeholder="Search Role or Subrole" className="h-9 text-xs" />
  //             <CommandEmpty className="">No framework found.</CommandEmpty>
  //             <CommandGroup>
  //               {frameworks.map((framework) => (
  //                 <CommandItem
  //                   key={framework.value}
  //                   value={framework.value}
  //                   className=""
  //                   onSelect={(currentValue) => {
  //                     setValue(currentValue === value ? "Role &" : currentValue)
  //                     setOpen(false)
  //                   }}
  //                 >
  //                   {framework.label}
  //                   <CheckIcon
  //                     className={cn(
  //                       "ml-auto h-4 w-4",
  //                       value === framework.value ? "opacity-100" : "opacity-0"
  //                     )}
  //                   />
  //                 </CommandItem>
  //               ))}
  //             </CommandGroup>
  //           </Command>
  //         </PopoverContent>
  //       </Popover>
  //     )
  //   },
  //   // size: 180,
  //   cell: ({ row }) => {
  //     const value = row.getValue("role_id")
  //     const styleBox = {
  //       backgroundColor: "#D6D6D6",
  //       paddingInline: "14px",
  //       paddingBlock: "4px",
  //       borderRadius: "120px",
  //     }
  //     const style = { ...styleBox, width: "max-content", display: "flex", alignItems: "center", gap: "8px", }
  //     const fontStyle = {
  //       fontWeight: "semi-bold",
  //       fontSize: "9px",
  //       color: "#121212",
  //     }
  //     return (
  //       <div style={style}>
  //         <img src="/list.svg" alt="" />
  //         <div style={fontStyle}>
  //           {roleIndex[value]}
  //         </div>
  //       </div>
  //     )
  //   }
  // },
  // {
  //   accessorKey: "status",
  //   header: ({ column }) => {
  //     const style = { width: "95px"  }
  //     return (
  //       <Button
  //         style={style}
  //         variant='combobox'
  //         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
  //         className="bg-transparent hover:bg-transparent"
  //       >
  //         Status
  //         <ArrowUpDown className="ml-2 h-4 w-4" />
  //       </Button>
  //     )
  //   },
  //   cell: ({ row }) => {
  //     const active = row.getValue("status")
  //     return (
  //       <Switch
  //         checked={active}
  //         onCheckedChange={(checked) => {
  //           // Handle the switch change event here
  //           console.log("Switch checked:", checked)
  //         }}
  //       />
  //     )
  //   }
  // },
  {
    accessorKey: "candidateStatus",
    header: "Decision",
    cell: ({ row }) => {
      const { accessToken } = useAuthStore();
      const [desc, setDesc] = React.useState("");
      const [rejectModalOpen, setRejectModalOpen] = React.useState(false);
      const [acceptModalOpen, setAcceptModalOpen] = React.useState(false);
      const navigate = useNavigate();

      return (
        <div className="flex gap-4">
          <Dialog open={acceptModalOpen}>
            <DialogTrigger asChild>
              <button
                onClick={() => setAcceptModalOpen(true)}
                className="transition-all duration-300 ease-linear hover:-mt-2"
              >
                <img src="/btn-approve.svg" alt="Approve" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Alasan</DialogTitle>
                <DialogDescription>
                  Berikan Alasan Jika Diperlukan (Kosongkan jika tidak perlu)
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 items-center gap-4">
                  <Label htmlFor="name" className="text-left">
                    Description
                  </Label>
                  <Input
                    id="desc"
                    value={desc}
                    onChange={(event) => {
                      setDesc(event.target.value);
                    }}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  onClick={async () => {
                    handleDecision({
                      id: row.getValue("id"),
                      approval: "Accepted",
                      description: desc,
                      accessToken,
                    });
                    await navigate('/users');
                    setAcceptModalOpen(false);
                  }}
                >
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={rejectModalOpen}>
            <DialogTrigger asChild>
              <button onClick={() => setRejectModalOpen(true)} className="transition-all duration-300 ease-linear hover:-mt-2">
                <img src="/btn-reject.svg" alt="Reject" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Alasan</DialogTitle>
                <DialogDescription>
                  Berikan Alasan Jika Diperlukan (Kosongkan jika tidak perlu)
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 items-center gap-4">
                  <Label htmlFor="name" className="text-left">
                    Description
                  </Label>
                  <Input
                    id="desc"
                    value={desc}
                    onChange={(event) => {
                      setDesc(event.target.value);
                    }}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  onClick={async () => {
                    handleDecision({
                      id: row.getValue("id"),
                      approval: "Rejected",
                      description: desc,
                      accessToken,
                    });
                    await navigate('/users');
                    setRejectModalOpen(false);
                  }}
                >
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => {
      const value = row.getValue("id");
      return (
        <DropdownMenu className="">
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 mx-au p-0 hover:bg-transparent "
            >
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4 rotate-90 ml-3 " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="relative overflow-visible"
          >
            <img
              src="./x-circle.svg"
              alt="Close-Icon"
              className="absolute -top-2 -right-2 z-50"
            />
            <DropdownMenuItem className="flex flex-row gap-4 font-medium">
              <img src="./eye.svg" alt="Eye-Icon" />
              View
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link to={`/users/edit-users/${value}`}>
              <DropdownMenuItem className="flex flex-row gap-4 font-medium">
                <img src="./edit-3.svg" alt="Edit-Icon" />
                Edit
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-row gap-4 font-medium">
              <img src="./trashicon2.svg" alt="Trash-Icon" />
              Delete
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
