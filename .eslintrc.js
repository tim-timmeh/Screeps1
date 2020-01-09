module.exports = {
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
    },
    rules: {
        'no-console': 'off',
        "no-unused-vars": 'off',
    },
    "env": {
      "es6": true,
      "node": true,
    },
    "globals": {
      // CONSTANTS
      OK: false,
      ERR_NOT_OWNER: false,
      ERR_NO_PATH: false,
      ERR_NAME_EXISTS: false,
      ERR_BUSY: false,
      ERR_NOT_FOUND: false,
      ERR_NOT_ENOUGH_ENERGY: false,
      ERR_NOT_ENOUGH_RESOURCES: false,
      ERR_INVALID_TARGET: false,
      ERR_FULL: false,
      ERR_NOT_IN_RANGE: false,
      ERR_INVALID_ARGS: false,
      ERR_TIRED: false,
      ERR_NO_BODYPART: false,
      ERR_NOT_ENOUGH_EXTENSIONS: false,
      ERR_RCL_NOT_ENOUGH: false,
      ERR_GCL_NOT_ENOUGH: false,

      FIND_EXIT_TOP: false,
      FIND_EXIT_RIGHT: false,
      FIND_EXIT_BOTTOM: false,
      FIND_EXIT_LEFT: false,
      FIND_EXIT: false,
      FIND_CREEPS: false,
      FIND_MY_CREEPS: false,
      FIND_HOSTILE_CREEPS: false,
      FIND_SOURCES_ACTIVE: false,
      FIND_SOURCES: false,
      FIND_DROPPED_RESOURCES: false,
      FIND_STRUCTURES: false,
      FIND_MY_STRUCTURES: false,
      FIND_HOSTILE_STRUCTURES: false,
      FIND_FLAGS: false,
      FIND_CONSTRUCTION_SITES: false,
      FIND_MY_SPAWNS: false,
      FIND_HOSTILE_SPAWNS: false,
      FIND_MY_CONSTRUCTION_SITES: false,
      FIND_HOSTILE_CONSTRUCTION_SITES: false,
      FIND_MINERALS: false,
      FIND_NUKES: false,
      FIND_TOMBSTONES: false,
      FIND_POWER_CREEPS: false,
      FIND_MY_POWER_CREEPS: false,
      FIND_HOSTILE_POWER_CREEPS: false,
      FIND_DEPOSITS: false,
      FIND_RUINS: false,

      TOP: false,
      TOP_RIGHT: false,
      RIGHT: false,
      BOTTOM_RIGHT: false,
      BOTTOM: false,
      BOTTOM_LEFT: false,
      LEFT: false,
      TOP_LEFT: false,

      COLOR_RED: false,
      COLOR_PURPLE: false,
      COLOR_BLUE: false,
      COLOR_CYAN: false,
      COLOR_GREEN: false,
      COLOR_YELLOW: false,
      COLOR_ORANGE: false,
      COLOR_BROWN: false,
      COLOR_GREY: false,
      COLOR_WHITE: false,

      LOOK_CREEPS: false,
      LOOK_ENERGY: false,
      LOOK_RESOURCES: false,
      LOOK_SOURCES: false,
      LOOK_MINERALS: false,
      LOOK_DEPOSITS: false,
      LOOK_STRUCTURES: false,
      LOOK_FLAGS: false,
      LOOK_CONSTRUCTION_SITES: false,
      LOOK_NUKES: false,
      LOOK_TERRAIN: false,
      LOOK_TOMBSTONES: false,
      LOOK_POWER_CREEPS: false,
      LOOK_RUINS: false,

      OBSTACLE_OBJECT_TYPES: false,

      MOVE: false,
      WORK: false,
      CARRY: false,
      ATTACK: false,
      RANGED_ATTACK: false,
      TOUGH: false,
      HEAL: false,
      CLAIM: false,

      BODYPART_COST: false,

      WORLD_WIDTH: false,
      WORLD_HEIGHT: false,

      CREEP_LIFE_TIME: false,
      CREEP_CLAIM_LIFE_TIME: false,
      CREEP_CORPSE_RATE: false,
      CREEP_PART_MAX_ENERGY: false,

      CARRY_CAPACITY: false,
      HARVEST_POWER: false,
      HARVEST_MINERAL_POWER: false,
      HARVEST_DEPOSIT_POWER: false,
      REPAIR_POWER: false,
      DISMANTLE_POWER: false,
      BUILD_POWER: false,
      ATTACK_POWER: false,
      UPGRADE_CONTROLLER_POWER: false,
      RANGED_ATTACK_POWER: false,
      HEAL_POWER: false,
      RANGED_HEAL_POWER: false,
      REPAIR_COST: false,
      DISMANTLE_COST: false,

      RAMPART_DECAY_AMOUNT: false,
      RAMPART_DECAY_TIME: false,
      RAMPART_HITS: false,
      RAMPART_HITS_MAX: false,

      ENERGY_REGEN_TIME: false,
      ENERGY_DECAY: false,

      SPAWN_HITS: false,
      SPAWN_ENERGY_START: false,
      SPAWN_ENERGY_CAPACITY: false,
      CREEP_SPAWN_TIME: false,
      SPAWN_RENEW_RATIO: false,

      SOURCE_ENERGY_CAPACITY: false,
      SOURCE_ENERGY_NEUTRAL_CAPACITY: false,
      SOURCE_ENERGY_KEEPER_CAPACITY: false,

      WALL_HITS: false,
      WALL_HITS_MAX: false,

      EXTENSION_HITS: false,
      EXTENSION_ENERGY_CAPACITY: false,

      ROAD_HITS: false,
      ROAD_WEAROUT: false,
      ROAD_WEAROUT_POWER_CREEP: false,
      ROAD_DECAY_AMOUNT: false,
      ROAD_DECAY_TIME: false,

      LINK_HITS: false,
      LINK_HITS_MAX: false,
      LINK_CAPACITY: false,
      LINK_COOLDOWN: false,
      LINK_LOSS_RATIO: false,

      STORAGE_CAPACITY: false,
      STORAGE_HITS: false,

      STRUCTURE_SPAWN: false,
      STRUCTURE_EXTENSION: false,
      STRUCTURE_ROAD: false,
      STRUCTURE_WALL: false,
      STRUCTURE_RAMPART: false,
      STRUCTURE_KEEPER_LAIR: false,
      STRUCTURE_PORTAL: false,
      STRUCTURE_CONTROLLER: false,
      STRUCTURE_LINK: false,
      STRUCTURE_STORAGE: false,
      STRUCTURE_TOWER: false,
      STRUCTURE_OBSERVER: false,
      STRUCTURE_POWER_BANK: false,
      STRUCTURE_POWER_SPAWN: false,
      STRUCTURE_EXTRACTOR: false,
      STRUCTURE_LAB: false,
      STRUCTURE_TERMINAL: false,
      STRUCTURE_CONTAINER: false,
      STRUCTURE_NUKER: false,
      STRUCTURE_FACTORY: false,
      STRUCTURE_INVADER_CORE: false,

      CONSTRUCTION_COST: false,
      CONSTRUCTION_COST_ROAD_SWAMP_RATIO: false,
      CONSTRUCTION_COST_ROAD_WALL_RATIO: false,

      CONTROLLER_LEVELS: false,
      CONTROLLER_STRUCTURES: false,
      CONTROLLER_DOWNGRADE: false,
      CONTROLLER_DOWNGRADE_RESTORE: false,
      CONTROLLER_DOWNGRADE_SAFEMODE_THRESHOLD: false,
      CONTROLLER_CLAIM_DOWNGRADE: false,
      CONTROLLER_RESERVE: false,
      CONTROLLER_RESERVE_MAX: false,
      CONTROLLER_MAX_UPGRADE_PER_TICK: false,
      CONTROLLER_ATTACK_BLOCKED_UPGRADE: false,
      CONTROLLER_NUKE_BLOCKED_UPGRADE: false,

      SAFE_MODE_DURATION: false,
      SAFE_MODE_COOLDOWN: false,
      SAFE_MODE_COST: false,

      TOWER_HITS: false,
      TOWER_CAPACITY: false,
      TOWER_ENERGY_COST: false,
      TOWER_POWER_ATTACK: false,
      TOWER_POWER_HEAL: false,
      TOWER_POWER_REPAIR: false,
      TOWER_OPTIMAL_RANGE: false,
      TOWER_FALLOFF_RANGE: false,
      TOWER_FALLOFF: false,

      OBSERVER_HITS: false,
      OBSERVER_RANGE: false,

      POWER_BANK_HITS: false,
      POWER_BANK_CAPACITY_MAX: false,
      POWER_BANK_CAPACITY_MIN: false,
      POWER_BANK_CAPACITY_CRIT: false,
      POWER_BANK_DECAY: false,
      POWER_BANK_HIT_BACK: false,

      POWER_SPAWN_HITS: false,
      POWER_SPAWN_ENERGY_CAPACITY: false,
      POWER_SPAWN_POWER_CAPACITY: false,
      POWER_SPAWN_ENERGY_RATIO: false,

      EXTRACTOR_HITS: false,
      EXTRACTOR_COOLDOWN: false,

      LAB_HITS: false,
      LAB_MINERAL_CAPACITY: false,
      LAB_ENERGY_CAPACITY: false,
      LAB_BOOST_ENERGY: false,
      LAB_BOOST_MINERAL: false,
      LAB_COOLDOWN: false,
      LAB_REACTION_AMOUNT: false,
      LAB_UNBOOST_ENERGY: false,
      LAB_UNBOOST_MINERAL: false,

      GCL_POW: false,
      GCL_MULTIPLY: false,
      GCL_NOVICE: false,

      MODE_SIMULATION: false,
      MODE_WORLD: false,

      TERRAIN_MASK_WALL: false,
      TERRAIN_MASK_SWAMP: false,
      TERRAIN_MASK_LAVA: false,

      MAX_CONSTRUCTION_SITES: false,
      MAX_CREEP_SIZE: false,

      MINERAL_REGEN_TIME: false,
      MINERAL_MIN_AMOUNT: false,
      MINERAL_RANDOM_FACTOR: false,
      MINERAL_DENSITY: false,
      MINERAL_DENSITY_PROBABILITY: false,
      MINERAL_DENSITY_CHANGE: false,

      DENSITY_LOW: false,
      DENSITY_MODERATE: false,
      DENSITY_HIGH: false,
      DENSITY_ULTRA: false,

      DEPOSIT_EXHAUST_MULTIPLY: false,
      DEPOSIT_EXHAUST_POW: false,
      DEPOSIT_DECAY_TIME: false,

      TERMINAL_CAPACITY: false,
      TERMINAL_HITS: false,
      TERMINAL_SEND_COST: false,
      TERMINAL_MIN_SEND: false,
      TERMINAL_COOLDOWN: false,

      CONTAINER_HITS: false,
      CONTAINER_CAPACITY: false,
      CONTAINER_DECAY: false,
      CONTAINER_DECAY_TIME: false,
      CONTAINER_DECAY_TIME_OWNED: false,

      NUKER_HITS: false,
      NUKER_COOLDOWN: false,
      NUKER_ENERGY_CAPACITY: false,
      NUKER_GHODIUM_CAPACITY: false,
      NUKE_LAND_TIME: false,
      NUKE_RANGE: false,
      NUKE_DAMAGE: false,

      FACTORY_HITS: false,
      FACTORY_CAPACITY: false,

      TOMBSTONE_DECAY_PER_PART: false,
      TOMBSTONE_DECAY_POWER_CREEP: false,

      RUIN_DECAY: false,
      RUIN_DECAY_STRUCTURES: false,

      PORTAL_DECAY: false,

      ORDER_SELL: false,
      ORDER_BUY: false,

      MARKET_FEE: false,
      MARKET_MAX_ORDERS: false,
      MARKET_ORDER_LIFE_TIME: false,

      FLAGS_LIMIT: false,

      SUBSCRIPTION_TOKEN: false,

      RESOURCE_ENERGY: false,
      RESOURCE_POWER: false,
      RESOURCE_HYDROGEN: false,
      RESOURCE_OXYGEN: false,
      RESOURCE_UTRIUM: false,
      RESOURCE_LEMERGIUM: false,
      RESOURCE_KEANIUM: false,
      RESOURCE_ZYNTHIUM: false,
      RESOURCE_CATALYST: false,
      RESOURCE_GHODIUM: false,
      RESOURCE_SILICON: false,
      RESOURCE_METAL: false,
      RESOURCE_BIOMASS: false,
      RESOURCE_MIST: false,
      RESOURCE_HYDROXIDE: false,
      RESOURCE_ZYNTHIUM_KEANITE: false,
      RESOURCE_UTRIUM_LEMERGITE: false,
      RESOURCE_UTRIUM_HYDRIDE: false,
      RESOURCE_UTRIUM_OXIDE: false,
      RESOURCE_KEANIUM_HYDRIDE: false,
      RESOURCE_KEANIUM_OXIDE: false,
      RESOURCE_LEMERGIUM_HYDRIDE: false,
      RESOURCE_LEMERGIUM_OXIDE: false,
      RESOURCE_ZYNTHIUM_HYDRIDE: false,
      RESOURCE_ZYNTHIUM_OXIDE: false,
      RESOURCE_GHODIUM_HYDRIDE: false,
      RESOURCE_GHODIUM_OXIDE: false,
      RESOURCE_UTRIUM_ACID: false,
      RESOURCE_UTRIUM_ALKALIDE: false,
      RESOURCE_KEANIUM_ACID: false,
      RESOURCE_KEANIUM_ALKALIDE: false,
      RESOURCE_LEMERGIUM_ACID: false,
      RESOURCE_LEMERGIUM_ALKALIDE: false,
      RESOURCE_ZYNTHIUM_ACID: false,
      RESOURCE_ZYNTHIUM_ALKALIDE: false,
      RESOURCE_GHODIUM_ACID: false,
      RESOURCE_GHODIUM_ALKALIDE: false,
      RESOURCE_CATALYZED_UTRIUM_ACID: false,
      RESOURCE_CATALYZED_UTRIUM_ALKALIDE: false,
      RESOURCE_CATALYZED_KEANIUM_ACID: false,
      RESOURCE_CATALYZED_KEANIUM_ALKALIDE: false,
      RESOURCE_CATALYZED_LEMERGIUM_ACID: false,
      RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE: false,
      RESOURCE_CATALYZED_ZYNTHIUM_ACID: false,
      RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE: false,
      RESOURCE_CATALYZED_GHODIUM_ACID: false,
      RESOURCE_CATALYZED_GHODIUM_ALKALIDE: false,
      RESOURCE_OPS: false,
      RESOURCE_UTRIUM_BAR: false,
      RESOURCE_LEMERGIUM_BAR: false,
      RESOURCE_ZYNTHIUM_BAR: false,
      RESOURCE_KEANIUM_BAR: false,
      RESOURCE_GHODIUM_MELT: false,
      RESOURCE_OXIDANT: false,
      RESOURCE_REDUCTANT: false,
      RESOURCE_PURIFIER: false,
      RESOURCE_BATTERY: false,
      RESOURCE_COMPOSITE: false,
      RESOURCE_CRYSTAL: false,
      RESOURCE_LIQUID: false,
      RESOURCE_WIRE: false,
      RESOURCE_SWITCH: false,
      RESOURCE_TRANSISTOR: false,
      RESOURCE_MICROCHIP: false,
      RESOURCE_CIRCUIT: false,
      RESOURCE_DEVICE: false,
      RESOURCE_CELL: false,
      RESOURCE_PHLEGM: false,
      RESOURCE_TISSUE: false,
      RESOURCE_MUSCLE: false,
      RESOURCE_ORGANOID: false,
      RESOURCE_ORGANISM: false,
      RESOURCE_ALLOY: false,
      RESOURCE_TUBE: false,
      RESOURCE_FIXTURES: false,
      RESOURCE_FRAME: false,
      RESOURCE_HYDRAULICS: false,
      RESOURCE_MACHINE: false,
      RESOURCE_CONDENSATE: false,
      RESOURCE_CONCENTRATE: false,
      RESOURCE_EXTRACT: false,
      RESOURCE_SPIRIT: false,
      RESOURCE_EMANATION: false,
      RESOURCE_ESSENCE: false,

      REACTIONS: false,

      BOOSTS: false,

      REACTION_TIME: false,

      PORTAL_UNSTABLE: false,
      PORTAL_MIN_TIMEOUT: false,
      PORTAL_MAX_TIMEOUT: false,

      POWER_BANK_RESPAWN_TIME: false,

      INVADERS_ENERGY_GOAL: false,

      SYSTEM_USERNAME: false,

      SIGN_NOVICE_AREA: false,
      SIGN_RESPAWN_AREA: false,
      SIGN_PLANNED_AREA: false,

      EVENT_ATTACK: false,
      EVENT_OBJECT_DESTROYED: false,
      EVENT_ATTACK_CONTROLLER: false,
      EVENT_BUILD: false,
      EVENT_HARVEST: false,
      EVENT_HEAL: false,
      EVENT_REPAIR: false,
      EVENT_RESERVE_CONTROLLER: false,
      EVENT_UPGRADE_CONTROLLER: false,
      EVENT_EXIT: false,
      EVENT_POWER: false,
      EVENT_TRANSFER: false,
      EVENT_ATTACK_TYPE_MELEE: false,
      EVENT_ATTACK_TYPE_RANGED: false,
      EVENT_ATTACK_TYPE_RANGED_MASS: false,
      EVENT_ATTACK_TYPE_DISMANTLE: false,
      EVENT_ATTACK_TYPE_HIT_BACK: false,
      EVENT_ATTACK_TYPE_NUKE: false,
      EVENT_HEAL_TYPE_MELEE: false,
      EVENT_HEAL_TYPE_RANGED: false,

      POWER_LEVEL_MULTIPLY: false,
      POWER_LEVEL_POW: false,
      POWER_CREEP_SPAWN_COOLDOWN: false,
      POWER_CREEP_DELETE_COOLDOWN: false,
      POWER_CREEP_MAX_LEVEL: false,
      POWER_CREEP_LIFE_TIME: false,
      POWER_CLASS: false,

      PWR_GENERATE_OPS: false,
      PWR_OPERATE_SPAWN: false,
      PWR_OPERATE_TOWER: false,
      PWR_OPERATE_STORAGE: false,
      PWR_OPERATE_LAB: false,
      PWR_OPERATE_EXTENSION: false,
      PWR_OPERATE_OBSERVER: false,
      PWR_OPERATE_TERMINAL: false,
      PWR_DISRUPT_SPAWN: false,
      PWR_DISRUPT_TOWER: false,
      PWR_DISRUPT_SOURCE: false,
      PWR_SHIELD: false,
      PWR_REGEN_SOURCE: false,
      PWR_REGEN_MINERAL: false,
      PWR_DISRUPT_TERMINAL: false,
      PWR_OPERATE_POWER: false,
      PWR_FORTIFY: false,
      PWR_OPERATE_CONTROLLER: false,
      PWR_OPERATE_FACTORY: false,

      EFFECT_INVULNERABILITY: false,
      EFFECT_COLLAPSE_TIMER: false,

      INVADER_CORE_HITS: false,
      INVADER_CORE_CREEP_SPAWN_TIME: false,
      INVADER_CORE_EXPAND_TIME: false,
      INVADER_CORE_CONTROLLER_POWER: false,
      INVADER_CORE_CONTROLLER_DOWNGRADE: false,

      STRONGHOLD_RAMPART_HITS: false,
      STRONGHOLD_DECAY_TICKS: false,
      // PROTOTYPES
      ConstructionSite: false,
      Creep: false,
      Deposit: false,
      Flag: false,
      Mineral: false,
      Nuke: false,
      OwnedStructure: false,
      PowerCreep: false,
      Resource: false,
      Room: false,
      RoomObject: false,
      RoomPosition: false,
      RoomVisual: false,
      Ruin: false,
      Source: false,
      Store: false,
      Structure: false,
      StructureController: false,
      StructureExtension: false,
      StructureExtractor: false,
      StructureKeeperLair: false,
      StructureLab: false,
      StructureLink: false,
      StructureNuker: false,
      StructureObserver: false,
      StructurePowerBank: false,
      StructurePowerSpawn: false,
      StructureRampart: false,
      StructureSpawn: false,
      Spawn: false,
      StructureStorage: false,
      StructureTerminal: false,
      StructureTower: false,
      StructureContainer: false,
      StructurePortal: false,
      StructureRoad: false,
      StructureWall: false,
      Tombstone: false,
      // RUNTIME
      _: false,
      Game: false,
      InterShardMemory: false,
      Memory: false,
      PathFinder: false,
      RawMemory: false,
    },
};