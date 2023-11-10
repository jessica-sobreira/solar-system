import { HeaderStyled } from "./style";

interface HeaderProps {
    loading?: boolean;
    title: string;
    subtitle: string;
    input: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Header({ title, subtitle, input, value, onChange }: HeaderProps) {
    return (
        <HeaderStyled>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <input
                type="text"
                placeholder={input}
                value={value}
                onChange={onChange}
            />
        </HeaderStyled>
    );
}