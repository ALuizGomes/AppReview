import { Avaliacao, Container, TextAvaliativo } from "./styles";
import { Header } from "../../components/Header";
import { Grade } from "../../components/Grade";

export function Dashboard() {
  return (
    <Container>
      <Header />
      <Avaliacao>
        <TextAvaliativo>DE 0 A 10, O QUNTO VOCE RECOMENDARIA A SI SHOES PARA UM AMIGO OU FAMILIAR?</TextAvaliativo>
        <Grade />
      </Avaliacao>
    </Container>
  )
}
