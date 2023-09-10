/**
 * v1 accepted, runtime: 55 ms (58.30%), memory: 42.75 MB (39.35%)
 */
class EventEmitter {
  constructor() {
    this.eventMap = new Map();
  }

  subscribe(event, cb) {
    const funcs = this.eventMap.get(event);
    if (funcs) {
      funcs.push(cb);
    } else {
      this.eventMap.set(event, [cb]);
    }

    return {
      unsubscribe: () => {
        const evtFuncs = this.eventMap.get(event);
        if (evtFuncs) {
          const idx = evtFuncs.indexOf(cb);
          if (idx > -1) {
            evtFuncs.splice(idx, 1);
            this.eventMap.set(event, evtFuncs);
          }
        }
      },
    };
  }

  emit(event, args = []) {
    const evtFuncs = this.eventMap.get(event);
    if (evtFuncs) {
      return evtFuncs.map((evt) => evt(...args));
    }
    return [];
  }
}
