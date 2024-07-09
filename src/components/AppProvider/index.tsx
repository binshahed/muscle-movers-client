import { ConfigProvider } from "antd";
import { ReactNode } from "react";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#F36B21",
          colorText: "#323231"
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AppProvider;
