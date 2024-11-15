import { Box, Typography, Container } from "@mui/material";

import { useSearchParams } from "react-router-dom";
import DonateWidget from "./DonateWidget";
import HelpMainInformation from "./HelpMainInformation";
import { useGetRequestCardQuery } from "../../API/RTKQuery/api";
import { ErrorBlock } from "../../components/ErrorBlock";

export interface ActionsScheduleElement {
  stepLabel: string;
  isDone?: boolean;
}

export interface Organization {
  title: string;
  isVerified: boolean;
}

export interface Location {
  latitude: number;
  longitude: number;
  district: string;
  city: string;
}
export interface Contacts {
  email: string;
  phone: string;
  website: string;
}

interface DataRequestCard {
  id: string;
  actionsSchedule: ActionsScheduleElement[];
  title: string;
  organization: Organization;
  description: string;
  goalDescription: string;
  endingDate: string;
  location: Location;
  requestGoal: number;
  requestGoalCurrentValue: number;
  contacts: Contacts;
}

interface ErrorRequesrCard {
  status: number;
  data: { message: string };
}

interface GetRequestCardQuery {
  data?: DataRequestCard;
  error?: ErrorRequesrCard;
}

const HelpRequestPage = () => {
  const [searchParams] = useSearchParams();
  const requestId: string | null = searchParams.get("id");


  const { data, error } = useGetRequestCardQuery<GetRequestCardQuery>(
    requestId || "",
  );

  if (error) {
    console.log(error);
  }

  if (!requestId) {
    return <Typography>Не передан requestId в searchParams</Typography>;
  }

  if (!data) {
    return <Typography>Загрузка данных...</Typography>;
  }

  return (
    <Container component="section" sx={{ p: 3 }}>
      <Typography variant="h3" fontSize={34} align="left" py={3}>
        Запрос о помощи
      </Typography>
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
    </Container>
  );
};

export default HelpRequestPage;
