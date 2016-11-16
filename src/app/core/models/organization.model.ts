import { Certificate } from './certificate.model';
import { PostalAddress } from './postal-address.model';
import { Invoice } from './invoice.model';
import { CreditNote } from './credit-note.model';
import { DebitNote } from './debit-note.model';

import { Model } from './model';

export class Organization extends Model {
    id: String;
    organization: String;
    description: String;
    enabled: boolean;

    assignedIdentificationId: String;
    additionalAccountId: String;
    supplierName: String;
    registrationName: String;

    smtpServer: any;
    ublSenderServer: any;
    certificate: Certificate;
    postalAddress: PostalAddress;

    taskFirstTime: Date;
    taskDelay: number;
    tasksEnabled: boolean;

    emailTheme: String;
    supportedLocales: Array<String>;
    defaultLocale: String;
    internationalizationEnabled: boolean;
    supportedUblLocales: Array<String>;
    defaultUblLocale: String;
    internationalizationUblEnabled: boolean;
    supportedCurrencies: Array<String>;
    defaultCurrency: String;

    eventsEnabled: boolean;
    eventsExpiration: number;
    eventsListeners: Array<String>;
    enabledEventTypes: Array<String>;

    adminEventsEnabled: boolean;
    adminEventsDetailsEnabled: boolean;

    requiredActions: Array<String>;
    attributes: any;

    invoices: Array<Invoice>;
    creditNotes: Array<CreditNote>;
    debitNotes: Array<DebitNote>;

    openfactVersion: String;
}
