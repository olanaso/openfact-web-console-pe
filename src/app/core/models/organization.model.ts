import { Certificate } from './certificate.model';
import { PostalAddress } from './postal-address.model';
import { Invoice } from './invoice.model';
import { CreditNote } from './credit-note.model';
import { DebitNote } from './debit-note.model';

import { Model } from './model';

export class Organization extends Model {
    id: string;
    organization: string;
    description: string;
    enabled: boolean;

    assignedIdentificationId: string;
    additionalAccountId: string;
    supplierName: string;
    registrationName: string;

    smtpServer: any;
    ublSenderServer: any;
    certificate: Certificate;
    postalAddress: PostalAddress;

    taskFirstTime: Date;
    taskDelay: number;
    tasksEnabled: boolean;

    emailTheme: string;
    supportedLocales: Array<string>;
    defaultLocale: string;
    internationalizationEnabled: boolean;
    supportedUblLocales: Array<string>;
    defaultUblLocale: string;
    internationalizationUblEnabled: boolean;
    supportedCurrencies: Array<string>;
    defaultCurrency: string;

    eventsEnabled: boolean;
    eventsExpiration: number;
    eventsListeners: Array<string>;
    enabledEventTypes: Array<string>;

    adminEventsEnabled: boolean;
    adminEventsDetailsEnabled: boolean;

    requiredActions: Array<string>;
    attributes: any;

    invoices: Array<Invoice>;
    creditNotes: Array<CreditNote>;
    debitNotes: Array<DebitNote>;

    openfactVersion: string;
}
