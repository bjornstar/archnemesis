function keys<T extends PropertyKey>(o: Record<T, unknown>): T[] {
  return Object.keys(o) as T[]
}

const basicOrgans = {
  'Toxic': { contents: ['Generic', 'Gems'], },
  'Chaosweaver': { contents: ['Gems'] },
  'Frostweaver': { contents: ['Armour'] },
  'Permafrost': { contents: ['Generic', 'Armour'], },
  'Hasted': { contents: ['Generic'] },
  'Deadeye': { contents: ['Armour', 'Trinkets'], },
  'Bombardier': { contents: ['Weapon', 'Armour'], },
  'Flameweaver': { contents: ['Weapon'] },
  'Incendiary': { contents: ['Generic', 'Weapon'], },
  'Arcane Buffer': { contents: ['Essences'] },
  'Echoist': { contents: ['Generic', 'Currency'], },
  'Stormweaver': { contents: ['Trinkets'] },
  'Dynamo': { contents: ['Generic', 'Trinkets'], },
  'Bonebreaker': { contents: ['Generic', 'Weapon'], },
  'Bloodletter': { contents: ['Weapon', 'Trinkets'], },
  'Steel-infused': { contents: ['Weapon'] },
  'Gargantuan': { contents: ['Currency'] },
  'Berserker': { contents: ['Uniques'] },
  'Sentinel': { contents: ['Armour', 'Armour'], },
  'Juggernaut': { contents: ['Harbinger'] },
  'Vampiric': { contents: ['Fossils'] },
  'Overcharged': { contents: ['Trinkets', 'Trinkets'], },
  'Soul Conduit': { contents: ['Maps'] },
  'Opulent': { contents: [] },
  'Malediction': { contents: ['DivinationCards'] },
  'Consecrator': { contents: ['Fragments'] },
  'Frenzied': { contents: ['Generic', 'Uniques'], },
} as const

type BasicOrganMap = typeof basicOrgans
type BasicOrganId = keyof BasicOrganMap

const basicOrganList = keys(basicOrgans)
const isBasicOrgan = (id: unknown): id is BasicOrganId => basicOrganList.includes(id as BasicOrganId)

const recipeOrgans = {
  'Heralding Minions': { contents: ['Fragments', 'Fragments' ], requires: [ 'Dynamo', 'Arcane Buffer'] },
  'Empowering Minions': { contents: ['Blight', 'Ritual' ], requires: [ 'Necromancer', 'Executioner', 'Gargantuan'] },
  'Assassin': { contents: ['Currency', 'Currency'], requires: [ 'Deadeye', 'Vampiric'] },
  'Trickster': { contents: ['Currency', 'Uniques', 'DivinationCards' ], requires: [ 'Overcharged', 'Assassin', 'Echoist'] },
  'Necromancer': { contents: ['Generic'], requires: ['Bombardier', 'Overcharged'] },
  'Rejuvenating': { contents: ['Currency'], requires: [ 'Gargantuan', 'Vampiric'] },
  'Executioner': { contents: ['Legion', 'Breach'	], requires: [ 'Frenzied', 'Berserker'] },
  'Hexer': { contents: ['Essences', 'Essences'	], requires: [ 'Chaosweaver', 'Echoist'] },
  'Drought Bringer': { contents: ['Labyrinth', 'Labyrinth'	], requires: [ 'Malediction', 'Deadeye'] },
  'Entangler': { contents: ['Fossils', 'Fossils'	], requires: [ 'Toxic', 'Bloodletter'] },
  'Temporal Bubble': { contents: ['Heist', 'Expedition'	], requires: [ 'Juggernaut', 'Hexer', 'Arcane Buffer'] },
  'Treant Horde': { contents: ['Generic'], requires: ['Toxic', 'Sentinel', 'Steel-infused'] },
  'Frost Strider': { contents: ['Armour', 'Armour', 'Armour'], requires: [ 'Frostweaver', 'Hasted'] },
  'Ice Prison': { contents: ['Armour', 'Armour'], requires: [ 'Permafrost', 'Sentinel'] },
  'Soul Eater': { contents: ['Maps', 'Maps'], requires: ['Soul Conduit', 'Necromancer', 'Gargantuan'] },
  'Flame Strider': { contents: ['Weapon', 'Weapon', 'Weapon'], requires: [ 'Flameweaver', 'Hasted'] },
  'Corpse Detonator': { contents: ['DivinationCards', 'DivinationCards'], requires: [ 'Necromancer', 'Incendiary'] },
  'Evocationist': { contents: ['Generic', 'Weapon', 'Armour', 'Trinkets'], requires: [ 'Flameweaver', 'Frostweaver', 'Stormweaver'] },
  'Magma Barrier': { contents: ['Weapon', 'Weapon'], requires: [ 'Incendiary', 'Bonebreaker'] },
  'Mirror Image': { contents: ['Scarabs'], requires: ['Echoist', 'Soul Conduit'] },
  'Storm Strider': { contents: ['Trinkets', 'Trinkets', 'Trinkets'], requires: [ 'Stormweaver', 'Hasted'] },
  'Mana Siphoner': { contents: ['Trinkets', 'Trinkets'], requires: [ 'Consecrator', 'Dynamo'] },
  'Corrupter': { contents: ['Abyss', 'Abyss'], requires: [ 'Bloodletter', 'Chaosweaver'] },
  'Invulnerable': { contents: ['Delirium', 'Metamorphosis'	], requires: [ 'Sentinel', 'Juggernaut', 'Consecrator'] },
  'Crystal-skinned': { contents: ['Harbinger', 'Harbinger'	], requires: [ 'Permafrost', 'Rejuvenating', 'Berserker'] },
  'Empowered Elements': { contents: ['Uniques', 'Uniques'], requires: ['Evocationist', 'Steel-infused', 'Chaosweaver'] },
  'Effigy': { contents: ['DivinationCards', 'DivinationCards'], requires: [ 'Hexer', 'Malediction', 'Corrupter'] },
  'Lunaris-touched': { contents: ['Uniques'], requires: ['Invulnerable', 'Frost Strider', 'Empowering Minions'] },
  'Solaris-touched': { contents: ['Scarabs'], requires: ['Invulnerable', 'Magma Barrier', 'Empowering Minions'] },
  'Arakaali-touched': { contents: ['DivinationCards'], requires: ['Corpse Detonator', 'Entangler', 'Assassin'] },
  'Brine King-touched': { contents: ['Armour', 'Armour', 'Armour'], requires: ['Ice Prison', 'Storm Strider', 'Heralding Minions'] },
  'Tukohama-touched': { contents: ['Weapon', 'Weapon', 'Fragments'], requires: ['Bonebreaker', 'Executioner', 'Magma Barrier'] },
  'Abberath-touched': { contents: ['Trinkets', 'Trinkets', 'Maps'], requires: ['Flame Strider', 'Frenzied', 'Rejuvenating'] },
  'Shakari-touched': { contents: ['Uniques'], requires: ['Entangler', 'Soul Eater', 'Drought Bringer'] },
  'Innocence-touched': { contents: ['Currency', 'Currency', 'Currency'], requires: ['Lunaris-touched', 'Solaris-touched', 'Mirror Image', 'Mana Siphoner'] },
  'Kitava-touched': { contents: ['Generic'], requires: ['Tukohama-touched', 'Abberath-touched', 'Corrupter', 'Corpse Detonator'] },
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

const checkInventory = (id: RecipeOrganId, inventory: Inventory): Partial<Record<BasicOrganId, boolean>> => {
  const { requires } = organs[id] as RecipeOrgan

  return requires.reduce<Partial<Record<BasicOrganId, boolean>>>((r, organId: IngredientOrganId) => {
    if (isBasicOrgan(organId) || inventory[organId]?.length) {
      return { ...r, [organId]: !!inventory[organId]?.length }
    }

    return { ...r, ...checkInventory(organId, inventory) }
  }, {})
}

console.log(checkInventory('Kitava-touched', inventory))
