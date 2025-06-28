import { Message } from "@/model/User";

export interface ApiResponse {
  success: boolean;
  message: string;
  isAcceptiongMessage?: boolean;
  messages?: Array<Message>;
}
