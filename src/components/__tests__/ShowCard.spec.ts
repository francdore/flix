import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import ShowCard from "../ShowCard.vue";
import { MockShow } from "../../app/mocks";
import { setActivePinia, createPinia } from "pinia";
import { useShowStore } from "../../stores/show";

describe("ShowCard", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders image", () => {
    const wrapper = mount(ShowCard, { props: { MockShow } });
    expect(wrapper.find({ ref: "showCardImage" })).toBe(true);
  });
});
