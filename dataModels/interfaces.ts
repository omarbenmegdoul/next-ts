export interface stat {
  modifier: string; value: number
}

export interface stats {
  strength: stat;
  dexterity: stat;
  constitution: stat;
  intelligence: stat;
  wisdom: stat;
  charisma: stat;
}
interface skill { proficient: boolean; score: number }

export interface skills {
  athletics: skill;
  acrobatics: skill;
  sleight: skill;
  stealth: skill;
  arcana: skill;
  history: skill;
  investigation: skill;
  nature: skill;
  religion: skill;
  animal: skill;
  insight: skill;
  medicine: skill;
  perception: skill;
  survival: skill;
  deception: skill;
  intimidation: skill;
  performance: skill;
  persuasion: skill;
}

export interface hp {
  max: number;
  current: number;
  temp: number;
}

export interface survival {
  hp: hp;
  ac: number;
  deathSaves: {
    s: 0 | 1 | 2 | 3;
    f: 0 | 1 | 2 | 3;
  }
}

export interface combatSpeed {
  initiative: null | number;
  speed: number;
}


export interface identity {
  name: string;
  class: string; //TODO restrict to actual classes?
  race: string;
  alignment: ["Lawful" | "Neutral" | "Chaotic", "Good" | "Neutral" | "Evil"];
}

export interface progression {
  experience: number;
  level: number;
  proficiencyBonus: number;
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
