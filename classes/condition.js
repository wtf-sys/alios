class Condition {
    static #MAXHEALING = 100;
    static #MINHEALING = -100;

    static #conditionType = {
        INJURY: 'Injury',
        ILLNESS: 'Illness'
    };

    #name;
    #type;
    #healing;

    constructor(name, type) {
        this.#name = name;
        this.#type = type;
        this.#healing = 0;
    }

    newCondition(newName, newType) {
        const allowedConditionTypes = [INJURY, ILLNESS];

        if (!allowedConditionTypes.includes(newType)) {
            throw new Error('Invalid type for condition: ' + newType);
        } else {
            return new Condition(newName, newType);
        }
    }

    toJSON() {
        const conditionJson = {
            conditionName: this.#name,
            conditionType: this.#type,
            conditionHealing: this.#healing
        }

        return conditionJson;
    }

    getInfoString() {
        // "Metabolic Disease [Illness] [0]"
        return (`${this.#name} [${this.#type}] [${toString(this.#healing)}]`);
    }

    getName() {
        return this.#name;
    }

    getType() {
        return this.#type;
    }

    getHealingValue() {
        return this.#healing;
    }

    getHealingString() {
        return toString(this.#healing);
    }

    addHealing(addedHealing) {
        const tempHealing = addedHealing + this.#healing;

        if (tempHealing > MAXHEALING) {
            this.#healing = MAXHEALING;
            return;
        } else if (tempHealing < MINHEALING) {
            this.#healing = MINHEALING;
            return;
        } else {
            this.#healing = tempHealing;
            return;
        }
    }
}