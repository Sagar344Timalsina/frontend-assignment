import { notifications } from "@mantine/notifications";

const showNotify = (condition: string, message: string) => {
  notifications.show({
    autoClose: 5000,
    // title: "You've been compromised",
    message: message,

    color: `${
      condition === "success"
        ? "green"
        : condition === "error"
        ? "red"
        : condition === "warning"
        ? "yellow"
        : condition === "notify"
        ? "blue"
        : ""
    }`,
    style: {
      backgroundColor: "whitesmoke",
      height: "60px",
      color: "white",
    },
    loading: false,
  });
};
export default showNotify;
