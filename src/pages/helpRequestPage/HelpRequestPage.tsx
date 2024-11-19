import { Box, Typography, Container, Card } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import DonateWidget from "./DonateWidget";
import HelpMainInformation from "./HelpMainInformation";
import { useGetRequestCardQuery } from "../../API/RTKQuery/api";
import { ErrorBlock } from "../../components/ErrorBlock";

const HelpRequestPage = () => {
  const [searchParams] = useSearchParams();
  const requestId: string | null = searchParams.get("id");

  const { data, error, isLoading } = useGetRequestCardQuery(requestId || "");

  if (!requestId) {
    return <Typography>Не передан requestId в searchParams</Typography>;
  }

  if (isLoading) {
    return <Typography>Загрузка данных...</Typography>;
  }

  return (
    <Container component="section" sx={{ p: 3 }}>
      <Typography variant="h3" fontSize={34} align="left" py={3}>
        Запрос о помощи
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
      {error && (
          <Card
            variant="outlined"
            sx={{
              width: "100%",
              minHeight: "calc(100vh - 292px)", //подогнано под высоту экрана
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ErrorBlock errorText="Ошибка! Не удалось загрузить информацию" />
          </Card>
        )}
        {data && (
          <Box sx={{ display: "flex", gap: 2 }}>
            <HelpMainInformation
              actionsSchedule={data.actionsSchedule}
              description={data.description}
              contacts={data.contacts}
              endingDate={data.endingDate}
              goalDescription={data.goalDescription}
              location={data.location}
              organization={data.organization}
              title={data.title}
            />
            <DonateWidget
              requestId={requestId}
              requestGoal={data.requestGoal}
              requestGoalCurrentValue={data.requestGoalCurrentValue}
              endingDate={data.endingDate}
            />
          </Box>
        )}

      </Box>
    </Container>
  );
};

export default HelpRequestPage;
