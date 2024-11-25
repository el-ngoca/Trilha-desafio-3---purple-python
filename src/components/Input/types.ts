import { Control } from "react-hook-form";

export interface IInput  extends React.InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: React.ReactNode;
    name?: string;
    control?: Control<any, any>;
    placeholder?: string;
    type?: string;
    errorMessage?: string;
}