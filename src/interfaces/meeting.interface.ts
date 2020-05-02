export interface Meeting {
  agentId: number;
  orgId: number;
  status: string;
  meetingSource: string;
  schedulerId: bigint;
  eventId: string;
  slug: string;
  slotStart: bigint;
  slotEnd: bigint;
  updatedAt: bigint;
  scheduledAt: bigint;
  meetingType: string;
  conversationId: bigint;
  endUserTimeZone: string;
  meetingNotes: string;
  bookedBy: number;
}
