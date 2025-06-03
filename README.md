# Testy Admin Dashboard

This project provides a lightweight admin dashboard inspired by the [Mazer Admin template](https://github.com/zuramai/mazer). It uses Bootstrap 5 and vanilla JavaScript, with assets served via CDN.

## Structure

- `index.html` – dashboard home
- `pages/` – additional pages (users, analytics, settings, profile, login, register, forgot password, 404, UI elements, forms)
- `components/` – reusable header, sidebar, and footer
- `assets/` – CSS and JavaScript modules
- `charts/` – Chart.js setups for dashboard and analytics
- `utils/` – shared helper scripts

## Usage

Open any HTML page in a browser. An internet connection is required to load CDN assets. Pages dynamically load the common components and include a dark mode toggle, responsive navigation, and sample widgets. Charts are rendered with Chart.js modules and the Users table includes live search filtering.
