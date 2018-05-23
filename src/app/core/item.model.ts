import { State } from "../items/components/item/state.enum";

export interface Item {
    id: string;
    name: string;
    reference: string;
    state: State;
}
