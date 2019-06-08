import { NgModule } from '@angular/core';
import { ButtonsModule, BsDropdownModule, CollapseModule, ModalModule, TabsModule, TooltipModule, AccordionModule, PopoverModule, BsDatepickerConfig } from 'ngx-bootstrap';

export function getDatepickerConfig(): BsDatepickerConfig {
    return Object.assign(new BsDatepickerConfig(), {
        containerClass: 'theme-red',
        dateInputFormat: 'DD/MM/YYYY'
    });
}

@NgModule({
    imports: [
        ButtonsModule.forRoot(),
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        TooltipModule.forRoot(),
        PopoverModule.forRoot(),
        //BsDatepickerModule.forRoot(),
        AccordionModule.forRoot(),
        //TimepickerModule.forRoot(),
    ],
    exports: [
        ButtonsModule,
        BsDropdownModule,
        CollapseModule,
        ModalModule,
        TabsModule,
        TooltipModule,
        PopoverModule,
        //BsDatepickerModule,
        AccordionModule,
        //TimepickerModule
    ],
    providers: [        
        { provide: BsDatepickerConfig, useFactory: getDatepickerConfig }
    ]
})
export class AppBootstrapModule { }