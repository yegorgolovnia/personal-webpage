# Strava Workout Display Logic

This document describes how different workout types are displayed on the website, including which metrics are shown for each activity type.

## Overview

The Strava integration fetches the 5 most recent activities from the Strava API and displays them in an interactive 3D cube component. Each activity type has specific display rules for which metrics to show.

## Activity Types & Display Logic

### Running Activities
**Types:** `Run`, `Walk`, `Hike`

| Metric | Value |
|--------|-------|
| **Stat 1** | Distance (km) |
| **Stat 2** | Pace (min:sec/km) |

**Pace Calculation:**
```
pace = (moving_time / 60) / (distance / 1000)
```
Displayed as `X:XX/km`

---

### Cycling Activities
**Types:** `Ride`, `VirtualRide`

| Metric | Value |
|--------|-------|
| **Stat 1** | Distance (km) |
| **Stat 2** | Speed (km/h) |

**Speed Calculation:**
```
speed = (distance / moving_time) * 3.6
```
Displayed as `XX.X km/h`

---

### Swimming Activities
**Types:** `Swim`

| Metric | Value |
|--------|-------|
| **Stat 1** | Distance (meters) |
| **Stat 2** | Pace (min:sec/100m) |

**Pace Calculation:**
```
pace = (moving_time / 60) / (distance / 100)
```
Displayed as `X:XX/100m`

---

### Other Activities
**Types:** `WeightTraining`, and any other activity types

| Metric | Value |
|--------|-------|
| **Stat 1** | Time (duration) |
| **Stat 2** | Burn (calories/kilojoules) |

**Burn Value Priority:**
1. First checks `kilojoules` field (Strava provides this for cycling)
2. Falls back to `calories` field if kilojoules not available
3. Displays `-` if neither is available

---

## Data Fields from Strava API

Each activity from the Strava API contains:

| Field | Description |
|-------|-------------|
| `id` | Unique activity identifier |
| `type` | Activity type (Run, Ride, Swim, etc.) |
| `start_date` | ISO timestamp of activity start |
| `moving_time` | Active time in seconds |
| `distance` | Distance in meters |
| `kilojoules` | Energy output (primarily for cycling) |
| `calories` | Eшіstimated calories burned |
| `total_elevation_gain` | Elevation gain in meters |

---

## Duration Formatting

Time is formatted as:
- **Over 1 hour:** `Xh Xm` (e.g., "2h 15m")
- **Under 1 hour:** `Xm Xs` (e.g., "45m 30s")

---

## Implementation Files

| File | Purpose |
|------|---------|
| `src/lib/strava.ts` | Fetches activities from Strava API |
| `src/pages/api/strava.json.ts` | API endpoint for client-side fetching |
| `src/components/Lifestyle.astro` | Renders activities in 3D cube UI |
