import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";

export const CheckIcon = styled("span")(() => ({
  width: "15px",
  height: "15px",
  borderRadius: "4px",
  outline: "1px solid #E3E3E3",
  "input:hover ~ &": {
    backgroundColor: "#ebf1f5",
  },
}));

export const CheckedIcon = styled(CheckIcon)({
  backgroundColor: "#001283",
  outline: "1px solid #001283",
});

export const Checkfield = (props: CheckboxProps) => {
  return (
    <Checkbox
      disableRipple
      color="primary"
      checkedIcon={<CheckedIcon />}
      icon={<CheckIcon />}
      sx={{ padding: 0, marginRight: "6px" }}
      {...props}
    />
  );
};
