# 📦 Training Insights API

This project provides a RESTful API built with **Node.js** and **Express**, using **SheetDB** as a bridge to retrieve data directly from **Google Sheets**. The data includes details about training sessions conducted across various districts, communities, and by different trainers. The API is publicly hosted on **Render**.

> **📣 Calling all Data Analysts & Dashboard Developers!** I've got some API endpoints with program data – build some dashboards and show what you can do!  Questions? [sherifdata@gmail.com]. Let's collaborate!
---

## Base URL

```
https://sheetserve-api.onrender.com
```

---

## 📌 Endpoints

### 🔹 Get All Training Data

**GET** `/api/v1/data`

Returns all training records.

#### Sample Response

```json
{
  "status": "success",
  "data": [
    {
      "id": "1",
      "district": "201-Chereponi",
      "sub_district": "305-Wenchiki",
      "zone": "4016-Kablani CHPS",
      "community": "5114-Cherekpiri",
      "cycle": "2",
      "registrant": "Vivian Danso",
      "module": "N1. Agriculture and GFC Introduction",
      "training_date": "01/05/2024",
      "trainer": "Vivian Danso",
      "gender": "Male",
      "ben_id": "C2-201-5114-01-02",
      "hhid": "C2-201-5114-01",
      "parent_index": "82"
    }
  ]
}
```

---

### 🔹 Get Distinct Values by Field

**GET** `/api/v1/training/distinct/:field`

Returns a count of distinct values from a specified column (e.g., `district`, `ben_id`, `parent_index`).

#### Sample Response for `/distinct/district`

```json
{
  "status": "success",
  "data": 5
}
```

---

## 📊 Project Details

### 📈 Trainings Over Time (Time Series Chart)

- **Purpose:** Visualize number of trainings conducted over time.
- **Field:** `training_date`

### 🏙️ District-wise Training Summary

- **Purpose:** Bar chart showing number of trainings per district.
- **Field:** `district`

### 👥 Trainer Insights (Table & Bar Chart)

- **Metrics:**
  - Trainings per trainer
  - Regional spread of trainers
- **Fields:** `registrant`, `district`, `training_topic`

### ⚖️ Gender Distribution (Pie Chart)

- **Metric:** Number of unique `ben_id` by `gender`

### 🗺️ Community/Sub-district Tables

- **Drill-down tables** showing sessions per `community` and `sub_district`

---

## 📂 Environment Variables

Add a `.env` file locally with the following:

```
SHEETDB_TOKEN=your_sheetdb_token_here
PORT=3000
NODE_ENV=development
```

> Ensure `.env` is listed in your `.gitignore`

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start in dev mode
npm run start:dev

# Start in production
npm run start:prod
```

---

## 🤝 Contribute

We welcome contributions and feedback! If you're a data analyst or developer, feel free to fork, use the data, and even add new endpoints.

---

## 📃 License

MIT License.

---

## 👨🏽‍💻 Author

**Abubakari Sherifdeen**\
*Data Analyst | Dashboard Enthusiast | Open Data Advocate*

