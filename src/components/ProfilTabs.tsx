import { Tabs, Tab } from "@mui/material";

interface ProfileTabsProps {
  activeButton: string;
  setActiveButton: (value: string) => void;
}

export const ProfileTabs: React.FC<ProfileTabsProps> = ({ activeButton, setActiveButton }) => {
  const tabValues = ["personalInfo", "contacts", "favorites"];
  const tabLabels = ["Личные данные", "Контакты", "Избранное"];

  return (
    <Tabs
      value={tabValues.indexOf(activeButton)}
      indicatorColor="primary"
      textColor="primary"
      sx={{
        width: { xs: "100%", sm: 388 },
        borderBottom: 1,
        borderColor: "divider",
        mb: 2,
      }}
      onChange={(event, newValue) => {
        setActiveButton(tabValues[newValue]);
      }}
    >
      {tabLabels.map((label, index) => (
        <Tab key={index} label={label} />
      ))}
    </Tabs>
  );
};
