import { CardDashboardContainer, CardDashboardContent, SeparateDiv } from "./styles";

interface CardDashboard {
  value: string
  description: string
}

export function CardDashboard({ value, description }: CardDashboard) {
  return (
    <CardDashboardContainer>
      <CardDashboardContent>
        <h1>{value}</h1>
        <p>{description}</p>
      </CardDashboardContent>
      <SeparateDiv />
    </CardDashboardContainer>
  )
}