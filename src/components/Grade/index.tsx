import { Button, ButtonText } from './styles';

export function Grade() {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <Button>
            <ButtonText>{numbers}</ButtonText>
        </Button>
    )
}