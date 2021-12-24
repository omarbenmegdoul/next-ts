
const valueMapper = (keys: string[], component: React.FC) => {
  return keys.reduce((accumulator, nextVal: string) => { return { ...accumulator, nextVal: component } },
    {}
  )
};

let AbilityScoreComp: React.FC;
let WordComp: React.FC;
let SlotsComp: React.FC;
let AlignmentComp: React.FC;
let ProficiencyOptionalMechanicComp: React.FC;
let EquippedItemComp: React.FC;
let BagItemComp: React.FC;
let MiscStatusComp: React.FC;
let MiscProficienciesComp: React.FC;
let SpellComp: React.FC;

const abilityScoreKeys = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"]
const skillKeys = [
  "athletics",
  "acrobatics",
  "sleight",
  "stealth",
  "arcana",
  "history",
  "investigation",
  "nature",
  "religion",
  "animal",
  "insight",
  "medicine",
  "perception",
  "survival",
  "deception",
  "intimidation",
  "performance",
  "persuasion"
]

const savingThrows = abilityScoreKeys.map((k: string): string => k + "Save");
const incrementableNumbersKeys = [
  "max", "current", "temp", "ac", "initiative", "speed", "xp", "level", "proficiencyBonus", "passiveWisdom"
]

const slotsKeys = ["success", "failure", "inspiration"]

const componentDict = {
  ...valueMapper(abilityScoreKeys, AbilityScoreComp),
  ...valueMapper(skillKeys, ProficiencyOptionalMechanicComp),
  ...valueMapper(savingThrows, ProficiencyOptionalMechanicComp),
  ...valueMapper(incrementableNumbersKeys, IncrementableNumbersComp)
  ...valueMapper()

}

export default componentDict;