import { Component, EventEmitter, Output } from "@angular/core";
import { AttributeType } from "src/app/models/attribute-types.enum";
import { NewAttribute } from "src/app/models/attribute.interface";
import { getDefaultValueByAttributeType, getValueInputType } from "../projects-admin.utility";


@Component({
    selector: 'projects-admin-attribute-creator',
    styleUrls: [],
    template: `
    <td>
    <table>
        <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Value</th>
        </tr>
        <tr>
        <td>
            <input
            name='newAttributeNameInput'
            #newAttributeNameInput='ngModel'
            [(ngModel)]='newAttribute.name'
            placeholder="MyAttributeName"
            />
        </td>
        <td>
            <select
            name="newAttributeTypeInput"
            #newAttributeTypeInput='ngModel'
            [(ngModel)]='newAttribute.valueType'
            (change)='setDefaultNewAttributeValue()'
            >
            <option *ngFor="let attributeType of attributeTypes">
                {{ attributeType }}
            </option>
            </select>
        </td>
        <td>
            <input
            name="newAttributeValueInput"
            #newAttributeValueInput='ngModel'
            [(ngModel)]='newAttribute.value'
            [type]="getValueInputType(newAttribute.valueType)"
            [value]="newAttribute.valueType == 'DATE' && newAttribute.value == '0' ? '' : newAttribute.value"
            (change)="newAttribute.valueType == 'BOOLEAN' ? newProjectCheckboxChange($event) : undefined"
            />
        </td>
        </tr>
    </table>
    <input
        type="button"
        value="Add"
        (click)="addAttributeToNewProject()"
    />
    </td>
    `
})
export class ProjectAdminAttributeCreatorComponent {
    protected newAttribute: NewAttribute = this.getDefaultNewAttribute();

    protected attributeTypes: string[] = Object.keys(AttributeType);

    @Output()
    newAttributeAddedEvent: EventEmitter<NewAttribute> = new EventEmitter<NewAttribute>();

    constructor() {}

    protected addAttributeToNewProject() {
        this.newAttributeAddedEvent.emit(this.newAttribute);
        this.newAttribute = this.getDefaultNewAttribute();
    }

    protected newProjectCheckboxChange(event: any) {
        this.newAttribute.value = event.target.checked ? '1' : '0';
    }

    protected getValueInputType(attributeType: AttributeType) {
        return getValueInputType(attributeType);
    }

    protected setDefaultNewAttributeValue() {
        if (this.newAttribute) {
            this.newAttribute.value = getDefaultValueByAttributeType(this.newAttribute.valueType);
        }
      }

    private getDefaultNewAttribute(): NewAttribute {
    return {
        name: '',
        value: '',
        valueType: AttributeType.TEXT,
        };
    }
}