import { Condition } from "./condition.js";

/**
 * Represents a character.
 * @class
 */
class Character {

    static validAgeStages = {
        YOUNG_ADULT: 'Young Adult',
        ADULT: 'Adult',
        SENIOR_ADULT: 'Senior Adult',
        ELDERLY: 'Elderly'
    }

    static validHealthStatuses = {
        INJURED: 'Injured',
        SICK: 'Sick'
    }

    name;
    species;
    subspecies;
    age_stage;
    playtime;
    lineage; // TBA
    genetics; // TBA
    conditions = [];

    health_status;

    constructor(name, species, subspecies, age_stage, playtime, conditions) {
        //
    }

    /**
     * Returns the array of Condition objects.
     * @returns {Condition[]}
     */
    getConditions() {
        return this.conditions;
    }

    /**
     * OVERRIDES the current Conditions array, with the given array of Conditions.
     * @param {Condition[]} conditionArr 
     * @returns {void}
     */
    setConditions(conditionArr) {
        this.conditions = conditionArr;
        return;
    }

    /**
     * Pushes a new Condition onto the conditions array.
     * @param {Condition} newCondition 
     * @returns {void}
     */
    addCondition(newCondition) {
        this.conditions.push(newCondition);

        if (newCondition.type === Condition.conditionType.ILLNESS) {
            this.health_status = validHealthStatuses.SICK;
            return;
        } else {
            this.health_status = validHealthStatuses.INJURED;
            return;
        }
    }
}