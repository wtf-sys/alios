/**
 * Represents a condition.
 * @class
 */
export class Condition {
    /** 
     * Healing level ceiling value.
     * @type {humber}
     * @default
     */
    static #MAXHEALING = 100;
    /** 
     * Healing level floor value.
     * @type {humber}
     * @default
     */
    static #MINHEALING = -100;

    /**
     * Valid condition types enum.
     * @readonly
     * @enum {string}
     */
    static conditionType = {
        INJURY: 'Injury',
        ILLNESS: 'Illness'
    };

    #condition;

    /**
     * Condition class constructor
     * @param {string} name 
     * @param {string} type 
     */
    constructor(name, type) {
        this.#condition = {
            name: name,
            type: type,
            healing: 0
        }
    }

    /**
     * Creates new condition of given name and type, returns the new Condition object.
     * @param {string} newName 
     * @param {string} newType 
     * @returns {Condition}
     */
    newCondition(newName, newType) {
        const allowedConditionTypes = [conditionType.INJURY, conditionType.ILLNESS];

        if (!allowedConditionTypes.includes(newType)) {
            throw new Error('Invalid type for condition: ' + newType);
        } else {
            return new Condition(newName, newType);
        }
    }

    /**
     * Creates new condition from a JSON-formatted string, returns the new Condition object.
     * @param {string} str 
     * @returns {Condition}
     */
    createFromJSONString(str) {
        let tempObj;
        let tempCondition;

        try {
            tempObj = JSON.parse(str);
        } catch (error) {
            console.error("Error parsing JSON in condition.js: " + error);
            throw error;
        }

        try {
            tempCondition = newCondition(tempObj.name, tempObj.type);
        } catch (error) {
            throw error;
        }

        return tempCondition;
    }

    /**
     * Returns JSON stringified condition object.
     * @returns {string}
     */
    getJSONString() {
        return JSON.stringify(this.#condition);
    }

    /**
     * 
     * @returns {string}
     */
    getName() {
        return this.#condition.name;
    }

    /**
     * 
     * @returns {string}
     */
    getType() {
        return this.#condition.type;
    }

    /**
     * 
     * @returns {number}
     */
    getHealingValue() {
        return this.#condition.healing;
    }

    /**
     * 
     * @returns {string}
     */
    getHealingString() {
        return toString(this.#condition.healing);
    }

    /**
     * 
     * @param {number} addedHealing 
     * @returns {void}
     */
    addHealing(addedHealing) {
        const tempHealing = addedHealing + this.#condition.healing;

        if (tempHealing > MAXHEALING) {
            this.#condition.healing = MAXHEALING;
            return;
        } else if (tempHealing < MINHEALING) {
            this.#condition.healing = MINHEALING;
            return;
        } else {
            this.#condition.healing = tempHealing;
            return;
        }
    }
}