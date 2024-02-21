export interface Ship {
    symbol: string;
    registration: Registration;
    nav: Nav;
    crew: Crew;
    frame: Frame;
    reactor: Reactor;
    engine: Engine;
    cooldown: Cooldown;
    modules: Module[];
    mounts: Mount[];
    cargo: Cargo;
    fuel: Fuel;
}

interface Registration {
    name: string;
    factionSymbol: string;
    role: string;
}

interface Nav {
    systemSymbol: string;
    waypointSymbol: string;
    route: Route;
    status: string;
    flightMode: string;
}

interface Route {
    departure?: Waypoint;
    destination: Waypoint;
    origin: Waypoint;
    departureTime: string;
    arrival: string;
}

interface Waypoint {
    symbol: string;
    type: string;
    systemSymbol: string;
    x: number;
    y: number;
}

interface Crew {
    current: number;
    required: number;
    rotation: string;
    morale: number;
    wages: number;
}

interface Frame {
    symbol: string;
    name: string;
    description: string;
    condition: number;
    moduleSlots: number;
    mountingPoints: number;
    fuelCapacity: number;
    requirements: {
        power?: number;
        crew?: number;
        slots?: number;
    };
}

interface Reactor {
    symbol: string;
    name: string;
    description: string;
    condtion: number;
    powerOutput: number;
    requirements: {
        power?: number;
        crew?: number;
        slots?: number;
    };
}

interface Engine {
    symbol: string;
    name: string;
    description: string;
    condition: number;
    speed: number;
    requirements: {
        power?: number;
        crew?: number;
        slot?: number;
    };
}

interface Cooldown {
    shipSymbol: string;
    totalSeconds: number;
    remainingSeconds: number;
    expiration: string;
}

interface Module {
    symbol: string;
    capacity: number;
    range: number;
    name: string;
    description: string;
    requirements: {
        power?: number;
        crew?: number;
        slots?: number;
    };
}

interface Mount {
    symbol: string;
    name: string;
    description: string;
    strength: number;
    deposits?: string[];
    requirements: {
        power?: number;
        crew?: number;
        slots?: number;
    };
}

interface Cargo {
    capacity: number;
    units: number;
    inventory: Item[];
}

interface Item {
    symbol: string;
    name: string;
    description: string;
    units: number;
}

interface Fuel {
    current: number;
    capacity: number;
    consumed: {
        amount: number;
        timestamp: string;
    };
}
