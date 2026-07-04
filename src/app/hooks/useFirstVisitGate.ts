import { useSyncExternalStore } from "react";

export const FIRST_VISIT_KEY = "brssc-first-visit-done";

function readGateOpen() {
  if (typeof sessionStorage === "undefined") return true;
  return !!sessionStorage.getItem(FIRST_VISIT_KEY);
}

let gateOpen = readGateOpen();
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot() {
  return gateOpen;
}

export function openFirstVisitGate() {
  if (gateOpen) return;
  gateOpen = true;
  listeners.forEach((cb) => cb());
}

export function useFirstVisitGate() {
  return useSyncExternalStore(subscribe, getSnapshot, () => true);
}
