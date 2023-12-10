import React from 'react';
import {render, waitFor, act } from "@testing-library/react";
import "../mock-data";
import Event from "../components/Event";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";


describe("<Event/> component", () => {
  let EventComponent;

  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  });

  beforeEach(async () => {
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test("has an element with summary key (events title)", () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });


  test("has an element with location key (events city)", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test("renders event details button with the title (show details)", () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

  test("by default, events details section should be hidden", () => {

    expect(
      EventComponent.container.querySelector(".detailsShown")
    ).not.toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the show details button", async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByText("show details");
    await user.click(showDetailsButton);
    const descriptionSection =
      EventComponent.container.querySelector(".detailsShown");
    expect(descriptionSection).toBeVisible();
  
})
  test("hides the details section when the user clicks on the hide details button", async () => {
    const user = userEvent.setup();
    const hideDetailsButton = EventComponent.queryByText("hide details");
    await user.click(hideDetailsButton);
    const descriptionSection =
      EventComponent.container.querySelector(".detailsHidden");
    expect(descriptionSection).not.toBeVisible();
  });
});
  