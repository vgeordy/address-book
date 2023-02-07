import { FormControl } from "@angular/forms";

export interface Address {
    id: FormControl<number | null>;
    name: FormControl<string | null>;
    address: FormControl<string | null>;
    email: FormControl<string | null>;
    phNumber: FormControl<string | null>;
}

