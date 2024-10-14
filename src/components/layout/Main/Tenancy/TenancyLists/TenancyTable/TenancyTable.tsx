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
import { useNavigate } from "react-router-dom";
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
      routeLink: "/property/tenancy/edit",
    },
    {
      icon: <Trash />,
      optionText: "Delete",
      routeLink: "/tenancy/delete",
      onClick: showModal,
    },
  ];

  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate("/property/tenancy/details");
  };

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
            <TableRow
              key={row.buildingName}
              style={{ cursor: "pointer" }}
              hover={true}
            >
              <TableCell className={styles.tableCell} onClick={handleRowClick}>
                {row.buildingName}
              </TableCell>
              <TableCell
                className={styles.tableCell}
                align="center"
                onClick={handleRowClick}
              >
                {row.apartmentNumber}
              </TableCell>
              <TableCell
                className={styles.tableCell}
                align="center"
                onClick={handleRowClick}
              >
                {row.tenantName}
              </TableCell>
              <TableCell
                className={styles.tableCell}
                align="center"
                onClick={handleRowClick}
              >
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
