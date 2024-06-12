export interface StravaActivity {
    id: number; // unique identifier for the activity
    resource_state: number; // 1 for "summary", 2 for "detail", 3 for "meta"
    external_id: string; // identifier provided at upload time
    upload_id: number; // identifier provided at upload time
    athlete: {
        id: number; // unique identifier for the athlete
        resource_state: number; // 1 for "summary", 2 for "detail"
    };
    //Main:
    name: string; // activity name
    distance: number; // distance of activity, in meters
    moving_time: number; // moving time of activity in seconds
    elapsed_time: number; // elapsed time of activity in seconds (including stopped time)
    total_elevation_gain: number; // elevation gain of activity, in meters
    type: string; // activity type, ie. Ride, Run, Swim, etc.
    // Date and time:
    start_date: string; // UTC time when the activity was started.
    start_date_local: string; // local time when the activity was started.
    timezone: string; // timezone of the activity
    utc_offset: number; // offset from UTC time
    // Gpx:
    start_latlng?: [number, number]; // array of latitude and longitude
    end_latlng?: [number, number]; // array of latitude and longitude
    achievement_count: number; // number of achievements gained during this activity
    kudos_count: number; // number of kudos given for this activity
    comment_count: number; // number of comments for this activity
    athlete_count: number; // number of athletes for taking part in a group activity
    photo_count: number; // number of photos attached to this activity
    map?: {
        id: string; // identifier for the map
        polyline: string; // polyline of the map, only returned on detailed representation of an object
        resource_state: number; // 1 for "summary", 2 for "detail", 3 for "meta"
        summary_polyline?: string; // polyline of the map, only returned on detailed representation of an object
    };
    // About the activity:
    trainer: boolean; // set to true if the activity was recorded on a training machine
    commute: boolean; // set to true if the activity was a commute
    manual: boolean; // set to true if the activity was created manually
    private: boolean; // set to true if activity is private
    flagged: boolean; // set to true if activity is flagged
    gear_id?: string; // identifier for the gear associated with the activity. ‘none’ clears gear from activity
    from_accepted_tag: boolean; // set to true if the activity was created from a Strava activity upload
    // Stats:
    average_speed: number; // average speed during the activity, in meters per second
    max_speed: number; // maximum speed during the activity, in meters per second
    average_cadence?: number; // average cadence during the activity, in rpm
    average_temp?: number; // average temperature during the activity, in degrees Celsius
    average_watts?: number; // average power during the activity, in watts
    weighted_average_watts?: number; // weighted average power during the activity, in watts
    kilojoules?: number; // total work done during the activity, in kilojoules
    device_watts?: boolean; // set to true if the watts are from a power meter, false if estimated
    has_heartrate?: boolean; // set to true if the activity has heartrate data, false if not
    average_heartrate: number; // average heart rate during the activity, in beats per minute
    max_watts?: number; // maximum power output during the activity, in watts
    elev_high?: number; // highest elevation during the activity, in meters
    elev_low?: number; // lowest elevation during the activity, in meters
    pr_count?: number; // number of personal records for the activity
    // Other:
    total_photo_count?: number; // number of photos attached to this activity // don't know why this is here twice ?
    has_kudoed?: boolean; // indicates if the authenticated athlete has kudoed this activity
    suffer_score?: number; // suffer score for the activity
    description?: string; // description of the activity
    calories?: number; // calories consumed during the activity
    // Segment Related Stuff:
    segment_efforts?: [
        {
            id: number; // unique identifier of the segment effort
            ressource_state: number; // 1 for "summary", 2 for "detail", 3 for "meta"
            name: string; // name of the segment
            activity: {
                id: number; // unique identifier of the activity
                resource_state: number; // 1 for "summary", 2 for "detail", 3 for "meta"
            };
            athlete: {
                id: number; // unique identifier of the athlete
                resource_state: number; // 1 for "summary", 2 for "detail", 3 for "meta"
            };
            elapsed_time: number; // elapsed time of the segment effort in seconds
            moving_time: number; // moving time of the segment effort in seconds
            start_date: string; // start date of the segment effort
            start_date_local: string; // local start date of the segment effort
            distance: number; // distance of the segment effort
            start_index: number; // start index of the segment effort in its activity
            end_index: number; // end index of the segment effort in its activity
            average_cadence: number; // average cadence during the segment effort
            device_watts: boolean; // set to true if the watts are from a power meter, false if estimated
            average_watts: number; // average power of the segment effort
            segment: {
                id: number; // unique identifier of the segment
                resource_state: number; // 1 for "summary", 2 for "detail", 3 for "meta"
                name: string; // name of the segment
                activity_type: string; // type of the segment
                distance: number; // distance of the segment, in meters
                average_grade: number; // average grade of the segment
                maximum_grade: number; // maximum grade of the segment
                elevation_high: number; // highest elevation of the segment, in meters
                elevation_low: number; // lowest elevation of the segment, in meters
                start_latlng: [number, number]; // array of latitude and longitude
                end_latlng: [number, number]; // array of latitude and longitude
                climb_category: number; // climb category of the segment
                city: string; // city where the segment is located
                state: string; // state where the segment is located
                country: string; // country where the segment is located
                private: boolean; // set to true if the segment is private
                hazardous: boolean; // set to true if the segment is considered hazardous
                starred: boolean; // set to true if the segment is starred by the authenticated athlete
            };
            kom_rank: number; // rank of the effort on the global leaderboard if it belongs in the top 10 at the time of upload
            pr_rank: number; // rank of the effort on the athlete's leaderboard if it belongs in the top 3 at the time of upload
            hidden: boolean; // set to true if the effort should not be exposed to segment leaderboards
        }
    ];
    //splits metric:
    splits_metric?: [
        {
            distance: number; // split distance in meters
            elapsed_time: number; // split elapsed time in seconds
            elevation_difference: number; // elevation difference in meters
            moving_time: number; // split moving time in seconds
            split: number; // split number
            average_speed: number; // average speed in meters per second
            pace_zone?: number; // pace zone of the split
        }
    ];
    //laps metric:
    laps?: [
        {
            id: number; // unique identifier of the lap
            resource_state: number; // 1 for "summary", 2 for "detail", 3 for "meta"
            name: string; // lap name
            activity: {
                id: number; // unique identifier of the activity
                resource_state: number; // 1 for "summary", 2 for "detail", 3 for "meta"
            };
            athlete: {
                id: number; // unique identifier of the athlete
                resource_state: number; // 1 for "summary", 2 for "detail", 3 for "meta"
            };
            elapsed_time: number; // lap elapsed time in seconds
            moving_time: number; // lap moving time in seconds
            start_date: string; // start date of the lap
            start_date_local: string; // local start date of the lap
            distance: number; // lap distance in meters
            start_index: number; // start index of the lap in its activity
            end_index: number; // end index of the lap in its activity
            total_elevation_gain: number; // elevation gain of the lap, in meters
            average_speed: number; // average speed during the lap, in meters per second
            max_speed: number; // maximum speed during the lap, in meters per second
            average_cadence: number; // average cadence during the lap, in rpm
            average_watts?: number; // average power during the lap, in watts
            weighted_average_watts?: number; // weighted average power during the lap, in watts
            lap_index: number; // lap index of the lap
            split?: number; // split index of the lap
        }
    ];
    // gear:
    gear?: {
        id: string; // unique identifier of the gear
        primary: boolean; // set to true if this is the athlete's primary bike
        name: string; // name of the gear
        distance: number; // distance logged with this gear, in meters
    };
    // partner related:
    partner_brand_tag?: string; // the name of the gear manufacturer
    photos?: {
        count: number; // number of photos
        primary: {
            id: number; // unique identifier of the photo
            source: number; // source of the photo
            unique_id: string; // unique identifier of the photo
            urls: {
                "100": string; // url for a 100px x 100px image
                "600": string; // url for a 600px x 600px image
            };
        };
    };
    // Misc
    highlighted_kudosers?: [ // array of summary representations of athletes who kudoed this activity
        {
            destination_url: string; // url to the kudosers profile
            display_name: string; // name of the kudoser
            avatar_url: string; // url to a 62x62 pixel profile picture
            show_name: boolean; // set to true if the kudoser wants their name displayed
        }
    ];
    hide_from_home?: boolean; // set to true if the user has hidden this activity from appearing on their public profile
    device_name?: string; // name of the device used to record the activity
    embed_token?: string; // token used to embed a Strava activity
    segment_leaderboard_opt_out?: boolean; // set to true if the user has opted out of segment leaderboards
    leaderboard_opt_out?: boolean; // set to true if the user has opted out of following
}