export interface Patient {
    resourceType:         string;
    id:                   string;
    text:                 Text;
    identifier:           Identifier[];
    active:               boolean;
    name:                 NameElement[];
    telecom:              PatientTelecom[];
    gender:               string;
    birthDate:            string;
    _birthDate:           BirthDate;
    deceasedBoolean:      boolean;
    address:              Address[];
    contact:              Contact[];
    managingOrganization: ManagingOrganization;
}

export interface BirthDate {
    extension: BirthDateExtension[];
}

export interface BirthDateExtension {
    url:           string;
    valueDateTime: string;
}

export interface Address {
    use:        string;
    type:       string;
    text?:      string;
    line:       string[];
    city:       string;
    district:   string;
    state:      string;
    postalCode: string;
    period:     AddressPeriod;
}

export interface AddressPeriod {
    start: string;
}

export interface Contact {
    relationship: Type[];
    name:         ContactName;
    telecom:      ContactTelecom[];
    address:      Address;
    gender:       string;
    period:       AddressPeriod;
}

export interface ContactName {
    family:  string;
    _family: Family;
    given:   string[];
}

export interface Family {
    extension: FamilyExtension[];
}

export interface FamilyExtension {
    url:         string;
    valueString: string;
}

export interface Type {
    coding: Coding[];
}

export interface Coding {
    system: string;
    code:   string;
}

export interface ContactTelecom {
    system: string;
    value:  string;
}

export interface Identifier {
    use:      string;
    type:     Type;
    system:   string;
    value:    string;
    period:   AddressPeriod;
    assigner: Assigner;
}

export interface Assigner {
    display: string;
}

export interface ManagingOrganization {
    reference: string;
}

export interface NameElement {
    use:     string;
    family?: string;
    given:   string[];
    period?: NamePeriod;
}

export interface NamePeriod {
    end: string;
}

export interface PatientTelecom {
    use:     string;
    system?: string;
    value?:  string;
    rank?:   number;
    period?: NamePeriod;
}

export interface Text {
    status: string;
    div:    string;
}
