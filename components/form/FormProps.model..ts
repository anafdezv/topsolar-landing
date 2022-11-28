export interface QuoteDataProps {
    placement: PlacementEnum | string | undefined;
    homeAdress: string | undefined;
    horary: HoraryEnum| string | undefined;
    season: SeasonEnum | string | undefined;
    powerContracted: PowerEnum | string | undefined;
    fullName: string | undefined;
    phoneNumber: string | undefined;
    email: string | undefined;
    acceptPrivacy: string | undefined;
}

export enum PowerEnum {
    TWOTHREE  = '2,3kW',
    THREEFORTYFIVE = '3,45kW',
    FOURSIX = '4,6kW',
    FIVESEVENTYFIVE = '5,75kW',
    SIXNINE = '6,9kW',
    UNKNOWN = 'unknown',    
}

export enum PlacementEnum {
    HOUSE = 'house',
    COMMUNITY = 'community',
    BUSSINESS = 'bussiness',
}

export enum HoraryEnum {
    DAY = 'day',
    NIGHT = 'night',
    ALLDAY = 'all-day'
}

export enum SeasonEnum {
    SUMMER = 'summer',
    WINTER = 'winter',
    AUTUMN = 'autumn',
    SPRING = 'spring'
}


export enum StepEnum {
    PLACEMENT = 'placement',
    ADRESS = 'address',
    SEASON = 'season',
    HORARY = 'horary',
    POWER = 'power',
    DETAILS = 'details',
    FINISH = 'finish'
}
