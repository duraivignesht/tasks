function on(eventName, listener) {
    document.addEventListener(eventName, listener);
  }

function trigger(eventName, data) {
    const event = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(event);
  }

export { trigger, on };
