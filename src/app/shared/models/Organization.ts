import { Certificate } from './Certificate';
import { PostalAddress } from './PostalAddress';
import { TasksSchedule } from './TasksSchedule';
import { Invoice } from './ubl/Invoice';
import { CreditNote } from './ubl/CreditNote';
import { DebitNote } from './ubl/DebitNote';

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
    tasksSchedule: TasksSchedule;

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
