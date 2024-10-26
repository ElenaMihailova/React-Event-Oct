import { Typography } from "@mui/material";
import InfoIcon from "../../assets/login/IconInfo.png";

interface Test {
  name: string;
  login: string;
  password: string;
}

export const TestProfiles: React.FC = () => {
  const tests: Test[] = [
    {
      name: "Первый пользователь",
      login: "test1example@gmail.com",
      password: "qwerty123",
    },
    {
      name: "Второй пользователь",
      login: "test2example@gmail.com",
      password: "qwerty123",
    },
    {
      name: "Третий пользователь",
      login: "test3example@gmail.com",
      password: "qwerty123",
    },
  ];

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "start",
  };

  const cardStyle: React.CSSProperties = {
    padding: "6px",
    display: "flex",
    flexDirection: "row",
    gap: "14px",
    width: "calc(25% - 16px)",
    minWidth: "320px",
    borderRadius: "6px",
    border: "solid #0288D1",
    color: "#014361",
  };

  return (
    <div style={containerStyle}>
      {tests.map((item) => (
        <div style={cardStyle} key={item.name}>
          <div style={{ paddingLeft: "10px" }}>
            <img src={InfoIcon} alt="Info" />
          </div>
          <div>
            <div style={{ textAlign: "start" }}>
              <Typography variant="body1">{item.name}</Typography>
              <Typography variant="body1">{item.login}</Typography>
              <Typography variant="body1">{item.password}</Typography>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
