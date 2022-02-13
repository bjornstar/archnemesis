function keys<T extends PropertyKey>(o: Record<T, unknown>): T[] {
  return Object.keys(o) as T[]
}

const basicOrgans = {
  'Arcane Buffer': { contents: ['Essences'] },
  'Berserker': { contents: ['Uniques'] },
  'Bloodletter': { contents: ['Weapon', 'Trinkets'], },
  'Bombardier': { contents: ['Weapon', 'Armour'], },
  'Bonebreaker': { contents: ['Generic', 'Weapon'], },
  'Chaosweaver': { contents: ['Gems'] },
  'Consecrator': { contents: ['Fragments'] },
  'Deadeye': { contents: ['Armour', 'Trinkets'], },
  'Dynamo': { contents: ['Generic', 'Trinkets'], },
  'Echoist': { contents: ['Generic', 'Currency'], },
  'Flameweaver': { contents: ['Weapon'] },
  'Frenzied': { contents: ['Generic', 'Uniques'], },
  'Frostweaver': { contents: ['Armour'] },
  'Gargantuan': { contents: ['Currency'] },
  'Hasted': { contents: ['Generic'] },
  'Incendiary': { contents: ['Generic', 'Weapon'], },
  'Juggernaut': { contents: ['Harbinger'] },
  'Malediction': { contents: ['DivinationCards'] },
  'Opulent': { contents: [] },
  'Overcharged': { contents: ['Trinkets', 'Trinkets'], },
  'Permafrost': { contents: ['Generic', 'Armour'], },
  'Sentinel': { contents: ['Armour', 'Armour'], },
  'Soul Conduit': { contents: ['Maps'] },
  'Steel-infused': { contents: ['Weapon'] },
  'Stormweaver': { contents: ['Trinkets'] },
  'Toxic': { contents: ['Generic', 'Gems'], },
  'Vampiric': { contents: ['Fossils'] },
} as const

type BasicOrganMap = typeof basicOrgans
type BasicOrganId = keyof BasicOrganMap

const basicOrganList = keys(basicOrgans)
const isBasicOrgan = (id: unknown): id is BasicOrganId => basicOrganList.includes(id as BasicOrganId)

const recipeOrgans = {
  'Abberath-touched': { contents: ['Trinkets', 'Trinkets', 'Maps'], requires: ['Flame Strider', 'Frenzied', 'Rejuvenating'] },
  'Arakaali-touched': { contents: ['DivinationCards'], requires: ['Corpse Detonator', 'Entangler', 'Assassin'] },
  'Assassin': { contents: ['Currency', 'Currency'], requires: [ 'Deadeye', 'Vampiric'] },
  'Brine King-touched': { contents: ['Armour', 'Armour', 'Armour'], requires: ['Ice Prison', 'Storm Strider', 'Heralding Minions'] },
  'Corpse Detonator': { contents: ['DivinationCards', 'DivinationCards'], requires: [ 'Necromancer', 'Incendiary'] },
  'Corrupter': { contents: ['Abyss', 'Abyss'], requires: [ 'Bloodletter', 'Chaosweaver'] },
  'Crystal-skinned': { contents: ['Harbinger', 'Harbinger'	], requires: [ 'Permafrost', 'Rejuvenating', 'Berserker'] },
  'Drought Bringer': { contents: ['Labyrinth', 'Labyrinth'	], requires: [ 'Malediction', 'Deadeye'] },
  'Effigy': { contents: ['DivinationCards', 'DivinationCards'], requires: [ 'Hexer', 'Malediction', 'Corrupter'] },
  'Empowered Elements': { contents: ['Uniques', 'Uniques'], requires: ['Evocationist', 'Steel-infused', 'Chaosweaver'] },
  'Empowering Minions': { contents: ['Blight', 'Ritual' ], requires: [ 'Necromancer', 'Executioner', 'Gargantuan'] },
  'Entangler': { contents: ['Fossils', 'Fossils'	], requires: [ 'Toxic', 'Bloodletter'] },
  'Evocationist': { contents: ['Generic', 'Weapon', 'Armour', 'Trinkets'], requires: [ 'Flameweaver', 'Frostweaver', 'Stormweaver'] },
  'Executioner': { contents: ['Legion', 'Breach'	], requires: [ 'Frenzied', 'Berserker'] },
  'Flame Strider': { contents: ['Weapon', 'Weapon', 'Weapon'], requires: [ 'Flameweaver', 'Hasted'] },
  'Frost Strider': { contents: ['Armour', 'Armour', 'Armour'], requires: [ 'Frostweaver', 'Hasted'] },
  'Heralding Minions': { contents: ['Fragments', 'Fragments' ], requires: [ 'Dynamo', 'Arcane Buffer'] },
  'Hexer': { contents: ['Essences', 'Essences'	], requires: [ 'Chaosweaver', 'Echoist'] },
  'Ice Prison': { contents: ['Armour', 'Armour'], requires: [ 'Permafrost', 'Sentinel'] },
  'Innocence-touched': { contents: ['Currency', 'Currency', 'Currency'], requires: ['Lunaris-touched', 'Solaris-touched', 'Mirror Image', 'Mana Siphoner'] },
  'Invulnerable': { contents: ['Delirium', 'Metamorphosis'	], requires: [ 'Sentinel', 'Juggernaut', 'Consecrator'] },
  'Kitava-touched': { contents: ['Generic'], requires: ['Tukohama-touched', 'Abberath-touched', 'Corrupter', 'Corpse Detonator'] },
  'Lunaris-touched': { contents: ['Uniques'], requires: ['Invulnerable', 'Frost Strider', 'Empowering Minions'] },
  'Magma Barrier': { contents: ['Weapon', 'Weapon'], requires: [ 'Incendiary', 'Bonebreaker'] },
  'Mana Siphoner': { contents: ['Trinkets', 'Trinkets'], requires: [ 'Consecrator', 'Dynamo'] },
  'Mirror Image': { contents: ['Scarabs'], requires: ['Echoist', 'Soul Conduit'] },
  'Necromancer': { contents: ['Generic'], requires: ['Bombardier', 'Overcharged'] },
  'Rejuvenating': { contents: ['Currency'], requires: [ 'Gargantuan', 'Vampiric'] },
  'Shakari-touched': { contents: ['Uniques'], requires: ['Entangler', 'Soul Eater', 'Drought Bringer'] },
  'Solaris-touched': { contents: ['Scarabs'], requires: ['Invulnerable', 'Magma Barrier', 'Empowering Minions'] },
  'Soul Eater': { contents: ['Maps', 'Maps'], requires: ['Soul Conduit', 'Necromancer', 'Gargantuan'] },
  'Storm Strider': { contents: ['Trinkets', 'Trinkets', 'Trinkets'], requires: [ 'Stormweaver', 'Hasted'] },
  'Temporal Bubble': { contents: ['Heist', 'Expedition'	], requires: [ 'Juggernaut', 'Hexer', 'Arcane Buffer'] },
  'Treant Horde': { contents: ['Generic'], requires: ['Toxic', 'Sentinel', 'Steel-infused'] },
  'Trickster': { contents: ['Currency', 'Uniques', 'DivinationCards' ], requires: [ 'Overcharged', 'Assassin', 'Echoist'] },
  'Tukohama-touched': { contents: ['Weapon', 'Weapon', 'Fragments'], requires: ['Bonebreaker', 'Executioner', 'Magma Barrier'] },
} as const

type RecipeOrganMap = typeof recipeOrgans
type RecipeOrganId = keyof RecipeOrganMap

const recipeOrganList = keys(recipeOrgans)
const isRecipeOrgan = (id: unknown): id is RecipeOrganId => recipeOrganList.includes(id as RecipeOrganId)

const organs = {
  ...basicOrgans,
  ...recipeOrgans,
}
type OrganMap = typeof organs
type OrganId = keyof OrganMap

type Reward = OrganMap[OrganId]['contents'][number]
type IngredientOrganId = OrganMap[RecipeOrganId]['requires'][number]
type FinalOrganId = Exclude<OrganId, IngredientOrganId>

type BasicOrgan = { contents: Readonly<Reward[]> }
type RecipeOrgan = BasicOrgan & { requires: Readonly<IngredientOrganId[]> }

type Inventory = Partial<Record<OrganId, number[]>>

const inventory: Inventory = {
  'Abberath-touched': [74],
  'Arcane Buffer': [72, 76, 76],
  'Berserker': [75, 75],
  'Bonebreaker': [77],
  'Brine King-touched': [73],
  'Deadeye': [76, 76],
  'Drought Bringer': [71, 71],
  'Dynamo': [74],
  'Echoist': [75],
  'Evocationist': [71, 76],
  'Flameweaver': [77],
  'Frost Strider': [72, 73, 75],
  'Frostweaver': [76, 77, 77, 81],
  'Gargantuan': [76, 77],
  'Hasted': [80],
  'Incendiary': [75, 76],
  'Innocence-touched': [76],
  'Juggernaut': [75, 77, 80],
  'Malediction': [73, 75, 77],
  'Mirror Image': [71],
  'Overcharged': [75, 77],
  'Sentinel': [75],
  'Soul Conduit': [75, 81],
  'Steel-infused': [74, 76, 81],
  'Stormweaver': [74, 75, 77],
  'Temporal Bubble': [71],
  'Toxic': [75],
  'Treant Horde': [74],
  'Vampiric': [76, 81],
}

const wantToMake = (targetId: RecipeOrganId, inventory: Inventory): any => {
  const { requires } = organs[targetId] as RecipeOrgan

  return {
    [targetId]: requires.reduce<Partial<Record<BasicOrganId, boolean>>>((r, organId: IngredientOrganId) => {
      if (isBasicOrgan(organId) || inventory[organId]?.length) {
        return { ...r, [organId]: !!inventory[organId]?.length }
      }

      return { ...r, ...wantToMake(organId, inventory) }
    }, {})
  }
}

console.log(JSON.stringify(wantToMake('Innocence-touched', inventory), null, 2))
