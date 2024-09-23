import Pencil from "../../../../../../../assets/icons/ui/Pencil";
import Trash from "../../../../../../../assets/icons/ui/Trash";

interface Action {
  icon: React.ReactNode;
  optionText: string;
  routeLink: string;
}

export const PropertyActions: Action[] = [
  {
    icon: <Pencil />,
    optionText: "Edit",
    routeLink: "/property/edit",
  },
  {
    icon: <Trash />,
    optionText: "Delete",
    routeLink: "/property/delete",
  },
];
