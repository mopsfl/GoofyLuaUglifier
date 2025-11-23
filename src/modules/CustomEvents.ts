export class CustomEvents {
    static CreateEvent<T>(eventName: string, detail?: T): CustomEvent<T> {
        return new CustomEvent<T>(eventName, { detail });
    }

    static DispatchEvent(target: EventTarget, event: CustomEvent<any>): void {
        target.dispatchEvent(event);
    }

    static AddEventListener<T>(
        target: EventTarget,
        eventName: string,
        listener: (event: CustomEvent<T>) => void
    ): void {
        target.addEventListener(eventName, (event) => {
            listener(event as CustomEvent<T>);
        });
    }

    static RemoveEventListener<T>(
        target: EventTarget,
        eventName: string,
        listener: (event: CustomEvent<T>) => void
    ): void {
        target.removeEventListener(eventName, listener as EventListener);
    }
}