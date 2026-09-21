export const stubUser = {
  first_name: "Archey",
  last_name: "Barrell",
  email: "dev-stub@example.com",
};

export const stubRallies = [
  {
    id: 1,
    name: "[DEV STUB] Spring Green Lane Run",
    start_date: "2026-10-11",
    end_date: "2026-10-11",
    is_one_day_event: true,
    bookings_status: "open",
    location: {
      name: "Symonds Yat",
      postcode: "HR9 6BL",
      latitude: "51.8425",
      longitude: "-2.6425",
    },
    clubs: [{ id: 2, name: "Wye & Welsh Land Rover Club", abbreviation: "WWLRC" }],
  },
  {
    id: 2,
    name: "[DEV STUB] Summer Trial",
    start_date: "2026-11-20",
    end_date: "2026-11-21",
    is_one_day_event: false,
    bookings_status: "not_opened",
    location: null,
    clubs: [],
  },
];

export const stubPosts = [
  {
    title: "[DEV STUB] Welcome to the new season",
    created_at: "2026-03-01T09:00:00Z",
    author: "WWLRCDEVSTUB",
    content: "<p>This is stub content served by the local dev API stub.</p>",
  },
];
