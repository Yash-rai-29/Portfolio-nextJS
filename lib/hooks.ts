import { useEffect, useRef } from "react";
import type { SectionName } from "./types";

/**
 * Sections are now switched explicitly (nav, hint button, edge scrolling), and
 * only one is mounted at a time. It used to watch the viewport and set the
 * active section itself, which could bounce the page back to a section that
 * was still animating out, so it now only provides a ref.
 */
export function useSectionInView(
  _sectionName: SectionName,
  _threshold?: number
) {
  const ref = useRef<HTMLElement>(null);
  return { ref };
}

const WHEEL_TRIGGER_DISTANCE = 100; // px of extra wheel/trackpad scroll past the edge
const TOUCH_TRIGGER_DISTANCE = 60; // px swipe past the edge on touch screens
const NAVIGATION_LOCK_MS = 800; // ignore further scrolling while a change settles
const ARRIVAL_SETTLE_MS = 600; // absorb momentum right after reaching an edge
const GESTURE_GAP_MS = 250; // a pause this long discards partial extra scroll
const MIN_WHEEL_DELTA = 3; // ignore the tiny tail of trackpad inertia

const isAtBottom = () =>
  window.innerHeight + window.scrollY >=
  document.documentElement.scrollHeight - 2;
const isAtTop = () => window.scrollY <= 0;

/**
 * Calls `onNavigate(1)` when the visitor keeps scrolling down at the bottom of
 * the page, and `onNavigate(-1)` when they keep scrolling up at the top.
 * `onNavigate` should return true if it changed section.
 *
 * Reaching the edge with momentum does not count: scrolling is ignored for a
 * moment after arriving, then any further deliberate scroll adds up. That way
 * a hard flick to the bottom never skips a section, but continuing to scroll
 * works without having to pause and start over.
 */
export function useScrollNavigation(
  onNavigate: (direction: 1 | -1) => boolean
) {
  const callback = useRef(onNavigate);
  callback.current = onNavigate;

  useEffect(() => {
    let lastWheelTime = 0;
    let lastDirection = 0;
    let travelled = 0;
    let lockedUntil = 0;
    let edgeArrivedAt = 0;
    let wasAtTop = isAtTop();
    let wasAtBottom = isAtBottom();

    let touchStartY = 0;
    let touchStartScroll = 0;
    let touchStartAtTop = false;
    let touchStartAtBottom = false;
    let touchTracking = false;

    const isBlocked = () =>
      Date.now() < lockedUntil || document.body.style.overflow === "hidden"; // menu open

    const navigate = (direction: 1 | -1) => {
      travelled = 0;
      if (callback.current(direction)) {
        lockedUntil = Date.now() + NAVIGATION_LOCK_MS;
      }
    };

    const onScroll = () => {
      const atTop = isAtTop();
      const atBottom = isAtBottom();
      if ((atTop && !wasAtTop) || (atBottom && !wasAtBottom)) {
        edgeArrivedAt = Date.now();
      }
      wasAtTop = atTop;
      wasAtBottom = atBottom;
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || isBlocked()) return; // ctrl + wheel is pinch zoom

      const delta = e.deltaMode === 1 ? e.deltaY * 40 : e.deltaY;
      if (Math.abs(delta) < MIN_WHEEL_DELTA) return;

      const now = Date.now();
      const direction = delta > 0 ? 1 : -1;
      const atEdge = direction === 1 ? isAtBottom() : isAtTop();

      if (!atEdge) {
        travelled = 0;
        return;
      }

      if (now - edgeArrivedAt < ARRIVAL_SETTLE_MS) {
        travelled = 0;
        return;
      }

      if (direction !== lastDirection || now - lastWheelTime > GESTURE_GAP_MS) {
        travelled = 0;
      }
      lastDirection = direction;
      lastWheelTime = now;

      travelled += Math.abs(delta);
      if (travelled >= WHEEL_TRIGGER_DISTANCE) navigate(direction);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchTracking = e.touches.length === 1;
      if (!touchTracking) return;
      touchStartY = e.touches[0].clientY;
      touchStartScroll = window.scrollY;
      touchStartAtTop = isAtTop();
      touchStartAtBottom = isAtBottom();
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!touchTracking || isBlocked()) return;
      touchTracking = false;

      // The page itself scrolled during this touch, so it was not an edge swipe.
      if (Math.abs(window.scrollY - touchStartScroll) > 2) return;

      const swipe = touchStartY - e.changedTouches[0].clientY;
      if (swipe > TOUCH_TRIGGER_DISTANCE && touchStartAtBottom) navigate(1);
      else if (swipe < -TOUCH_TRIGGER_DISTANCE && touchStartAtTop) navigate(-1);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);
}
