import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CascaderComponent } from './cascader/cascader.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FormComponent } from './form/form.component';
import { InputComponent } from './input/input.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { MentionComponent } from './mention/mention.component';
import { RadioComponent } from './radio/radio.component';
import { RateComponent } from './rate/rate.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SwitchComponent } from './switch/switch.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { TransferComponent } from './transfer/transfer.component';
import { TreeSelectComponent } from './tree-select/tree-select.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [{
    path: 'autocomplete',
    component: AutocompleteComponent,
    data: { breadcrumb: 'autocomplete'}
},{
    path: 'cascader',
    component: CascaderComponent,
    data: { breadcrumb: 'cascader'} 
},{
    path: 'checkbox',
    component: CheckboxComponent,
    data: { breadcrumb: 'checkbox'}
},{
    path: 'date-picker',
    component: DatePickerComponent,
    data: { breadcrumb: 'date-picker'}
},{
    path: 'form',
    component: FormComponent,
    data: { breadcrumb: 'form'}
},{
    path: 'input',
    component: InputComponent,
    data: { breadcrumb: 'input'}
},{
    path: 'input-number',
    component: InputNumberComponent,
    data: { breadcrumb: 'input-number'}
},{
    path: 'mention',
    component: MentionComponent,
    data: { breadcrumb: 'mention'}
},{
    path: 'radio',
    component: RadioComponent,
    data: { breadcrumb: 'radio'}
},{
    path: 'rate',
    component: RateComponent,
    data: { breadcrumb: 'rate'}
},{
    path: 'select',
    component: SelectComponent,
    data: { breadcrumb: 'select'}
},{
    path: 'slider',
    component: SliderComponent,
    data: { breadcrumb: 'slider'}
},{
    path: 'switch',
    component: SwitchComponent,
    data: { breadcrumb: 'switch'}
},{
    path: 'time-picker',
    component: TimePickerComponent,
    data: { breadcrumb: 'time-picker'}
},{
    path: 'transfer',
    component: TransferComponent,
    data: { breadcrumb: 'transfer'}
},{
    path: 'tree-select',
    component: TreeSelectComponent,
    data: { breadcrumb: 'tree-select'}
},{
    path: 'upload',
    component: UploadComponent,
    data: { breadcrumb: 'upload'}
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DataEntryRoutingModule {}
