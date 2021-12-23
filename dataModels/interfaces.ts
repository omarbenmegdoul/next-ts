import { IncrementableNumberComp, WordComp, DeathSaveComp, AlignmentComp, ProficiencyOptionalMechanicComp, EquippedItemComp, BagItemComp, MiscStatusComp, MiscProficienciesComp, SpellComp, SpellSlotsComp } from "../components/inputs";

// export class stat {
//   score: number;
//   modifier: number;
//   comp: 

//   constructor(stat : number) {
//     this.score = stat;

//   }
//   modifier: string; value: number
// }

export interface stats {
  strength: stat;
  dexterity: stat;
  constitution: stat;
  intelligence: stat;
  wisdom: stat;
  charisma: stat;
}

interface GenericAttribute { nice: string, component: () => number; }

export interface ProficiencyOptionalMechanic extends GenericAttribute {
  proficient: boolean;
  modifier: number;

}
interface NullableIncrementableNumber extends GenericAttribute {
  val: number | null;
}
interface IncrementableNumber extends GenericAttribute {
  val: number;
}

interface Slots extends GenericAttribute {
  val: number;
  cap: number;
}
export interface skills {
  athletics: ProficiencyOptionalMechanic;
  acrobatics: ProficiencyOptionalMechanic;
  sleight: ProficiencyOptionalMechanic;
  stealth: ProficiencyOptionalMechanic;
  arcana: ProficiencyOptionalMechanic;
  history: ProficiencyOptionalMechanic;
  investigation: ProficiencyOptionalMechanic;
  nature: ProficiencyOptionalMechanic;
  religion: ProficiencyOptionalMechanic;
  animal: ProficiencyOptionalMechanic;
  insight: ProficiencyOptionalMechanic;
  medicine: ProficiencyOptionalMechanic;
  perception: ProficiencyOptionalMechanic;
  survival: ProficiencyOptionalMechanic;
  deception: ProficiencyOptionalMechanic;
  intimidation: ProficiencyOptionalMechanic;
  performance: ProficiencyOptionalMechanic;
  persuasion: ProficiencyOptionalMechanic;
}

export interface hp {
  max: IncrementableNumber;
  current: IncrementableNumber;
  temp: IncrementableNumber;
}
export interface survival {
  hp: hp;
  ac: IncrementableNumber;
  deathSaves: {
    s: Slots;
    f: Slots;
  }
}

export interface combatSpeed {
  initiative: NullableIncrementableNumber;
  speed: IncrementableNumber;
}

export interface Word extends GenericAttribute {
  val: string;
}

export interface Selection extends GenericAttribute {
  allowed: string[];
  current: string;
}
export interface identity {
  name: Word;
  class: Selection; //TODO restrict to actual classes?
  race: Selection;
  alignment: {
    order: Selection;
    good: Selection;
  }
}
export interface progression {
  experience: IncrementableNumber;
  level: IncrementableNumber;
  proficiencyBonus: IncrementableNumber;
}
export interface List extends GenericAttribute {

}

export interface character {
  identity: identity;
  stats: stats;
  progression: progression;
  skills: skills;
  combatSpeed: combatSpeed;
  profAndLang: string[];
  equipment: equipment;
};

export interface miscStatus {
  inspiration: boolean;
  passiveWisdom: number;
}

type equSlot = null | string
export interface equipment {
  slots: equSlot[];
  bag: string[];
}
