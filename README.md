# Everlasting Diary

Everlasting Diary project! This code empower our React skills by building an interactive diary.

# Tech Stack:

- React as the frontend framework.
- TailwindCSS for styling.
- useState and useEffect. Manage state and use effects appropriately.
- The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
- LocalStorage: Store and retrieve diary entries using localStorage.

# Homepage:

- Display a list of diary entries sorted by date (newest first).
- Each entry should be displayed as a card with a preview image, date and title.
- Clicking on a card should open a modal with the full entry details (title, date, image, content).

# Add Entry Modal

- Action button “Add Entry” to open a modal for adding a new entry.
- Check if there’s already an entry for the day. If so, prompt the user to return the next day.
- Show a form asking for: title, date image url and content
- Validate that all fields are populated before submission.
- On form submission, add the entry to a localStorage item as an array item.

# Loading Entries

- On app load, load diary entries from localStorage.

# Deploy

- The application as a static site on Render.

### Contributions

- [Aniko](https://github.com/TheRealAniko)
- [Alireza](https://github.com/Alireza2A)
- [Timur](https://github.com/TimurShomakhov)
- [Andrei](https://github.com/raizy21)

are maintainers for this repository.

### Project Resources

- [React Documentation](https://react.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs/installation/using-vite)
- [Render Deployment Documentation](https://render.com/docs/static-sites)
- [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
