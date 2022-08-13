class EventBus {
    private static _instance: EventBus;

    private eventMap: Map<string, Array<Function>> = new Map();

    static instance(): EventBus {
        return this._instance || (this._instance = new EventBus());
    }

    emit(event: string, ...args: any[]) {
        this.eventMap.get(event)?.forEach(callback => callback(...args));
    }

    on(event: string, callback: (...args: any[]) => void) {
        this.eventMap.set(event, [...(this.eventMap.get(event) || []), callback]);
    }

    off(event?: string) {
        if (event){
            this.eventMap.delete(event)
            return
        }
        this.eventMap.clear()
    }

}

export default EventBus.instance();
