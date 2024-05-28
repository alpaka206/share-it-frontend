import { format } from "date-fns";
import { ko } from "date-fns/locale";

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, "M월 d일 (E) HH:mm", { locale: ko });
};
