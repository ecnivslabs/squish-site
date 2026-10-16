import type { Character } from "../domain/types";
import { createButter, createCheese, createPancakes } from "./breakfast";
import { createDonut, createMochi } from "./sweets";
import { createEgg, createPeach, createToast } from "./pantry";

const builders = {
  butter: createButter,
  cheese: createCheese,
  pancakes: createPancakes,
  donut: createDonut,
  egg: createEgg,
  mochi: createMochi,
  loaf: createToast,
  peach: createPeach,
};

export const isFood = (kind: Character): kind is keyof typeof builders =>
  kind in builders;
export function createFood(
  kind: keyof typeof builders,
  color: string,
  interactive = false,
) {
  if (
    interactive &&
    (kind === "butter" || kind === "cheese" || kind === "pancakes")
  ) {
    const segments = { butter: 14, cheese: 24, pancakes: 40 };
    return builders[kind](color, segments[kind]);
  }
  return builders[kind](color);
}
