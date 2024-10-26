import { Box, Typography, Container } from "@mui/material";

import DonateWidget from "./DonateWidget";
import HelpMainInformation from "./HelpMainInformation";
import {
  useGetRequestCardQuery,
  useGetRequestCardsQuery,
} from "../../API/RTKQuery/api";

interface HelpRequestPageProps {
  requestId: string;
}

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

  contacts: Contacts;
}

interface GetRequestCardQuery {
  data: DataRequestCard;
}

const HelpRequestPage = ({
  requestId = "a0f43343-3015-45a9-b161-3a6aa9b3a0b4",
}: HelpRequestPageProps) => {
  const { data } = useGetRequestCardQuery<GetRequestCardQuery>(requestId);
  if (!data) return;
  console.log(data);
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
        <DonateWidget requestId={requestId} />
      </Box>
    </Container>
  );
};

export default HelpRequestPage;
