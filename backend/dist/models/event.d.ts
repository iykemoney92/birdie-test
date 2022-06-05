export declare const findAll: (callback: Function) => void;
export declare const findByRecipientId: (recipientId: string, callback: Function) => void;
export declare const findEventByRecipientId: (recipientId: string, eventId: string, callback: Function) => void;
export declare const findByRecipientIdAndDate: (recipientId: string, from: string, to: string, callback: Function) => void;
export declare const findEventByRecipientIdAndDate: (recipientId: string, eventId: string, from: string, to: string, callback: Function) => void;
export declare const getEventTypes: (callback: Function) => void;
