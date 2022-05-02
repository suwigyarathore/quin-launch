export interface Launch {
    id:                      string;
    url:                     string;
    slug:                    string;
    name:                    string;
    status:                  Status;
    last_updated:            Date;
    net:                     Date;
    window_end:              Date;
    window_start:            Date;
    probability:             null;
    holdreason:              null;
    failreason:              null;
    hashtag:                 null;
    launch_service_provider: LaunchServiceProvider;
    rocket:                  Rocket;
    mission:                 Mission;
    pad:                     Pad;
    webcast_live:            boolean;
    image:                   string;
    infographic:             null;
    program:                 any[];
}

export interface LaunchServiceProvider {
    id:   number;
    url:  string;
    name: string;
    type: string;
}

export interface Mission {
    id:                number;
    name:              string;
    description:       string;
    launch_designator: null;
    type:              string;
    orbit:             Status;
}

export interface Status {
    id:           number;
    name:         string;
    abbrev:       string;
    description?: string;
}

export interface Pad {
    id:                 number;
    url:                string;
    agency_id:          null;
    name:               string;
    info_url:           null;
    wiki_url:           string;
    map_url:            string;
    latitude:           string;
    longitude:          string;
    location:           Location;
    map_image:          string;
    total_launch_count: number;
}

export interface Location {
    id:                  number;
    url:                 string;
    name:                string;
    country_code:        string;
    map_image:           string;
    total_launch_count:  number;
    total_landing_count: number;
}

export interface Rocket {
    id:            number;
    configuration: Configuration;
}

export interface Configuration {
    id:        number;
    url:       string;
    name:      string;
    family:    string;
    full_name: string;
    variant:   string;
}
