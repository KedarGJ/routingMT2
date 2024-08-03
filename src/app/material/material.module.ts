import { NgModule } from "@angular/core";
import {MatSnackBarModule} from '@angular/material/snack-bar';

const matModArr=[
    MatSnackBarModule
]

@NgModule({
    declarations:[],
    imports:[
        ...matModArr
    ],
    exports:[
        ...matModArr
    ]
})
export class MaterialModule{}