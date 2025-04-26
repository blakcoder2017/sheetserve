# 📦 Training Insights API

This project provides a RESTful API built with **Node.js** and **Express**, using **SheetDB** as a bridge to retrieve data directly from **Google Sheets**. The data includes details about training sessions conducted across various districts, communities, and by different trainers. The API is publicly hosted on **Render**.

> **📣 Calling all Data Analysts & Dashboard Developers!** I've got some API endpoints with program data – build some dashboards and show what you can do!  Questions? [sherifdata@gmail.com]. Let's collaborate!
---

## Base URL

```
https://sheetserve-api.onrender.com
```

---

## Endpoints

### Get All Training Data

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

### Get Data for Time Series Chart

**GET** `/api/v1/data/time-series`

Returns total number of trainings using training date

#### Sample Response

```json
{
  "status": "success",
  "data": [
    {
      "parsed_date": "2024-01-05",
      "total_trainings": 7
    },
    {
      "parsed_date": "2024-04-30",
      "total_trainings": 6
    },
    {
      "parsed_date": "2024-04-25",
      "total_trainings": 3
    },
  ]
}
```

---

### Count Distinct Number of Training by District, Communities Covered, Households Reached, Total Beneficiaries, Total Trainings and Trainings Count

**GET** `/api/v1/data/distinct/:field`

Returns a count of distinct values from a specified column (`district`, `hhid`, `ben_id`, `parent_index`, `community`, `id`).

#### Sample Response for `/distinct/district`

```json
{
  "status": "success",
  "data": {
    "count": 6,
  }
}
```

---

### Get Data for Gender Segregation

**GET** `/api/v1/data/beneficiaries-by-gender`

Returns total number of beneficiaries by gender

#### Sample Response

```json
{
    "status": "success",
    "data": [
        {
            "gender": "Male",
            "total_beneficiaries": 1236
        },
        {
            "gender": "Female",
            "total_beneficiaries": 1500
        }
    ]
}
```

---

### Get Data for Total Number of Trainings Conducted in Each District

**GET** `/api/v1/data/training-by-district`

Returns total number of training by districts

#### Sample Response

```json
{
    "status": "success",
    "data": [
        {
            "district": "201-Chereponi",
            "total_beneficiaries": 148
        },
        {
            "district": "202-East Mamprusi",
            "total_beneficiaries": 926
        },
        {
            "district": "203-Gushegu",
            "total_beneficiaries": 587
        },
        {
            "district": "204-Saboba",
            "total_beneficiaries": 284
        },
        {
            "district": "205-North Gonja",
            "total_beneficiaries": 436
        },
        {
            "district": "206-West Gonja",
            "total_beneficiaries": 727
        }
    ]
}
```

---

### Get Data for Number of Times Eacg Topic are Treated

**GET** `/api/v1/data/training-topic-frequency`

Returns total number of times each topic is treated in the groups

#### Sample Response

```json
{
    "status": "success",
    "data": [
        {
            "topic": "N1. Agriculture and GFC Introduction",
            "total_attendance": 2661
        },
        {
            "topic": "N2. Maternal Nutrition for Exclusive Breastfeeding",
            "total_attendance": 365
        }
    ]
}
```

---

## 📊 Possible Charts

### 📈 Trainings Over Time (Time Series Chart)

- **Purpose:** Visualize number of trainings conducted over time.
- **Field:** `training_date`

### 🏙️ District-wise Training Summary

- **Purpose:** Bar chart showing number of trainings per district.
- **Field:** `district`

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

We welcome contributions and feedback! If you're a data analyst or software engineer, feel free to fork, use the data, and even add new endpoints.

---

## 📃 License

MIT License.

---

## 👨🏽‍💻 Author

**Abubakari Sherifdeen**\
*Data Analyst | Software Engineer | Open Data Advocate*

