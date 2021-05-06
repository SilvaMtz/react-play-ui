import { ActionButton } from "react-play-ui";

export const ToastPage = () => {

  const toastList = [
    {
      id: 0,
      title: "Primary Toast!",
      icon: "academicCap",
      color: "primary",
      iconSize: "large",
      fill: true,
    },
    {
      id: 1,
      title: "Danger Toast!",
      icon: "exclamation",
      iconSize: "large",
      color: "danger",
      fill: true,
    },
    {
      id: 2,
      title: "Warning Toast!",
      icon: "academicCap",
      iconSize: "large",
      color: "warning",
      fill: false,
    },
    {
      id: 3,
      title: "Success Toast!",
      icon: "checkCircle",
      iconSize: "large",
      color: "success",
      fill: true,
    }
  ]

  return (
    <div>
      <h2>Toast</h2>
      <ActionButton label="Add!" onClick={handleAddToast} />
    </div>
  )
}