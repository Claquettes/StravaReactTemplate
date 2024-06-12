export interface ProfileType {
    id: number;
    username: string; //a tout hasard Claquettes
    resource_state: number; // 1 for "summary", 2 for "detail", 3 for "meta"
    firstname: string;
    lastname: string;
    bio?: string;
    city?: string;
    state?: string;
    country?: string;
    sex: string; // M or F
    premium: boolean; // true if user has Strava premium
    summit: boolean; // true if user has Strava summit
    created_at: string; // date and time when athlete was created
    updated_at: string; // date and time when athlete was last updated
    badge_type_id: number; // 0 for no badge, 1 for pro, 2 for ambassador
    weight: number; // athlete's weight in kilograms
    profile_medium: string; // URL to a 62x62 pixel profile picture
    profile: string; // URL to a 124x124 pixel profile picture
    friend: null; // null if not friends, "pending" if request pending, "accepted" if request accepted
    follower: null; // null if not friends, "pending" if request pending, "accepted" if request accepted
}