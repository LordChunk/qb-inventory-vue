import { ItemFactory, CraftingItemFactory } from "@tests/factories/itemfactory";

describe("Item", () => {
  describe("canMerge", () => {
    it("should return true if the items have the same name and are not unique", () => {
      const item1 = ItemFactory({ name: "Test Item", unique: false });
      const item2 = ItemFactory({ name: "Test Item", unique: false });

      const canMerge = item1.canMerge(item2);

      expect(canMerge).toBe(true);
    });

    it("should return false if the items have different names", () => {
      const item1 = ItemFactory({ name: "Test Item 1", unique: false });
      const item2 = ItemFactory({ name: "Test Item 2", unique: false });

      const canMerge = item1.canMerge(item2);

      expect(canMerge).toBe(false);
    });

    it("should return false if one of the items is unique", () => {
      const item1 = ItemFactory({ name: "Test Item", unique: false });
      const item2 = ItemFactory({ name: "Test Item", unique: true });

      const canMerge1 = item1.canMerge(item2);
      const canMerge2 = item2.canMerge(item1);

      expect(canMerge1).toBe(false);
      expect(canMerge2).toBe(false);
    });
  });

  describe("swap", () => {
    it("can swap items other items", () => {
      const item1 = ItemFactory();
      const item2 = ItemFactory();

      expect(item1.canSwap(item2)).toBe(true);
      expect(item2.canSwap(item1)).toBe(true);
    });

    it("Can't swap items with crafting items", () => {
      const item1 = ItemFactory();
      const item2 = CraftingItemFactory();

      expect(item1.canSwap(item2)).toBe(false);
      expect(item2.canSwap(item1)).toBe(false);
    });
  });
});
