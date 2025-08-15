import { Tooltip } from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Action } from "../../../common/constants";
import type { MouseEvent } from "react";

type ActionIconsProps = {
  // onView: (e: MouseEvent<SVGSVGElement>) => void;
  onEdit: (e: MouseEvent<SVGSVGElement>) => void;
  onDelete: (e: MouseEvent<SVGSVGElement>) => void;
};

export const ActionIcons = ({ onEdit, onDelete }: ActionIconsProps) => (
  <>
    <Tooltip title={Action.View}>
      <VisibilityOutlinedIcon
        sx={{
          cursor: "pointer",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
        // onClick={(e) => onView(e)}
        color="secondary"
      />
    </Tooltip>
    <Tooltip title={Action.Edit}>
      <EditOutlinedIcon
        sx={{
          cursor: "pointer",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
        color="secondary"
        onClick={(e) => onEdit(e)}
      />
    </Tooltip>
    <Tooltip title={Action.Delete}>
      <DeleteOutlineIcon
        sx={{
          cursor: "pointer",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
        onClick={(e) => onDelete(e)}
        color="secondary"
      />
    </Tooltip>
  </>
);
