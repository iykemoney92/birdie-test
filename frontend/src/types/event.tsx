export interface BasicEvent {
    id: string,
    timestamp: string,
    event_type: string,
    caregiver_id: string,
    visit_id: string,
    payload: object,
    care_recipient_id: string

}

export interface MoodEvent extends BasicEvent {
    payload: {
        mood: string
    }
}
