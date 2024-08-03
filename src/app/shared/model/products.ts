export interface Iproduct{
    pname:string;
    pid:string;
    pstatus: Pstatus;
    canReturn: number
}

export type Pstatus = "Dispatched" | "In-Progress" | "Delivered";