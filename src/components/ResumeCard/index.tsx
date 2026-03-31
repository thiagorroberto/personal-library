import { ResumeCardContainer } from "./styles";

interface resumeProps {
  number: number;
  status: string;
}

export function ResumeCard({ number, status }: resumeProps) {
  return (
    <ResumeCardContainer>
      <h2>{number}</h2>
      <p>{status}</p>
    </ResumeCardContainer>
  );
}
