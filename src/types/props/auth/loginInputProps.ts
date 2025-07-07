export interface LoginInputProps {
    placeholder: string;
    text: string;
    type: string;
    onChange: (value: string) => void;
    isError: boolean;
}