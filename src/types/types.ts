export type HelpRequestData = {
    id: string;
    title: string;
    organization: {
        title: string;
        isVerified?: boolean;
    };
    description: string;
    goalDescription: string;
    actionsSchedule: Array<{
        stepLabel: string;
        isDone?: boolean;
    }>;
    endingDate: Date;
    location: {
        latitude: number;
        longitude: number;
        district: string;
        city: string;
    };
    contacts: {
        email: string;
        phone?: string;
        website?: string;
    };
    requesterType: "person" | "organization";
    helpType: "finance" | "material";
    helperRequirements: {
        helperType: "group" | "single";
        isOnline: boolean;
        qualification: "professional" | "common";
    };
    contributorsCount: number;
    requestGoal: number;
    requestGoalCurrentValue: number;
};
