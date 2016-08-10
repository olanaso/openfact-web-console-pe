import { AlertLink } from './alert-link';

export interface Alert {
    type: string;
    message: string;
    details?: string;
    links?: Array<AlertLink>;
    onClose?: any;

    hidden?: boolean;
}