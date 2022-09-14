import { Container, Title } from './styles'


interface Props {
    title: string;
}

export function Header() {
    return (
        <Container>
            <Title>SI SHOES</Title>
        </Container>
    )
}