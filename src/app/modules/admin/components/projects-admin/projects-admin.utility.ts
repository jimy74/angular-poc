import { AttributeType } from "src/app/models/attribute-types.enum";
      
    export function getTodayDateFormatted(): string {
      return new Date().toISOString().slice(0, 10);
    }

    //TODO: refactor to DRY the code as it is duplicated in two childs
    export function getValueInputType(attributeType: AttributeType) {
      switch (attributeType) {
        case AttributeType.TEXT:
          return 'text';
        case AttributeType.NUMBER:
          return 'number';
        case AttributeType.BOOLEAN:
          return 'checkbox';
        case AttributeType.DATE:
          return 'date';
      }
    }

    export function getDefaultValueByAttributeType(attributeType: AttributeType) {
      switch (attributeType) {
        case AttributeType.TEXT: return '';
        case AttributeType.NUMBER: return '0';
        case AttributeType.BOOLEAN: return '0';
        case AttributeType.DATE: return getTodayDateFormatted()
      }
    }