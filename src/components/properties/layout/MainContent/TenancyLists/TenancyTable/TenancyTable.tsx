import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import VerticalDots from "../../../../../../assets/icons/ui/VerticalDots";
import Pencil from "../../../../../../assets/icons/ui/Pencil";
import Trash from "../../../../../../assets/icons/ui/Trash";
import TenancyItemActions from "../TenancyItemActions/TenancyItemActions";
import { tenancyData } from "../tenancyData";
import ActionModal from "../../../../../shared/ActionModal/ActionModal";
import styles from "./TenancyTable.module.css";

interface Action {
  icon: React.ReactNode;
  optionText: string;
  routeLink: string;
  onClick?: () => void;
}

export default function TenancyTable() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const tenantActions: Action[] = [
    {
      icon: <Pencil />,
      optionText: "Edit",
      routeLink: "/tenancy/edit",
    },
    {
      icon: <Trash />,
      optionText: "Delete",
      routeLink: "/tenancy/delete",
      onClick: showModal,
    },
  ];

  return (
    <TableContainer className={styles.tenancyTableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={styles.tableHeader}>
              Building/Compound Name
            </TableCell>
            <TableCell className={styles.tableHeader} align="center">
              Apartment/Unit No.
            </TableCell>
            <TableCell className={styles.tableHeader} align="center">
              Tenant Name
            </TableCell>
            <TableCell className={styles.tableHeader} align="center">
              Lease Period
            </TableCell>
            <TableCell className={styles.tableHeader} align="center">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tenancyData.map(row => (
            <TableRow key={row.buildingName}>
              <TableCell className={styles.tableCell}>
                {row.buildingName}
              </TableCell>
              <TableCell className={styles.tableCell} align="center">
                {row.apartmentNumber}
              </TableCell>
              <TableCell className={styles.tableCell} align="center">
                {row.tenantName}
              </TableCell>
              <TableCell className={styles.tableCell} align="center">
                {row.leasePeriod}
              </TableCell>
              <TableCell className={styles.tableCell} align="center">
                <Button className={styles.actionBtn} onClick={handleClick}>
                  <VerticalDots />
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <TenancyItemActions
            anchorEl={anchorEl}
            handleClose={handleClose}
            tenantActions={tenantActions}
          />
        </TableBody>
      </Table>
      {modal && (
        <ActionModal
          open={modal}
          onClose={() => setModal(false)}
          onDelete={() => setModal(false)}
          title="Are you sure you want to delete this tenant?"
          description="Once delete it won’t be undone."
          actionBtnText="Yes, Delete"
        />
      )}
    </TableContainer>
  );
}
