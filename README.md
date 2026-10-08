
# Pet Health Data Platform

A personal data engineering and analytics platform for collecting, transforming, monitoring, and analyzing feline health telemetry.

The platform combines automated IoT/device data, manual health observations, and analytical workflows to create a longitudinal view of feline health, behavior, feeding, hydration, digestion, and wellness trends.

This project serves two purposes:

1. Build a practical health-monitoring system for my cats.
2. Provide a real-world sandbox for developing data engineering, analytics engineering, software engineering, and data science skills.

The system is designed to evolve incrementally from a local application into a production-style data platform with ingestion pipelines, data quality validation, orchestration, analytics engineering, event streaming, anomaly detection, and reporting.

---

## Project Status

Early development.

Current priorities:

- Investigate Petlibro device data access
- Define the core data model
- Build the PostgreSQL database
- Build the initial Python ingestion layer
- Create a REST API
- Support manual health-data entry
- Build the first analytics dashboard

The architecture will evolve as real requirements emerge.

---

# Goals

## Health Monitoring

Track and analyze:

- Feeding behavior
- Food consumption
- Meal frequency
- Missed meals
- Feeding duration
- Hydration
- Water consumption
- Stool frequency
- Stool quality
- Weight changes
- Medication
- Health observations
- Veterinary visits
- Behavioral changes

The long-term goal is to identify meaningful changes from each cat's individual baseline.

This system is intended for monitoring, analysis, and recordkeeping. It is not intended to diagnose medical conditions.

---

# Data Sources

## Automated Data

Potential automated sources include:

- Petlibro smart feeder telemetry
- Petlibro smart fountain telemetry
- Feeding events
- Food dispensed
- Water consumption
- Water levels
- Device status
- Device errors
- Other available Petlibro telemetry

The exact integration method will be determined through research into the specific Petlibro devices being used.

Potential integration methods may include:

- Official APIs
- Cloud APIs
- Mobile application APIs
- Local network protocols
- Device communication protocols
- Other documented or legitimately reverse-engineered interfaces

No particular API or protocol is assumed to exist until it has been verified.

## Manual Data

Manual data entry will support:

- Stool observations
- Weight measurements
- Medication
- Symptoms
- Behavioral observations
- Health notes
- Veterinary visits
- Other relevant observations

---

# Architecture

## Initial Architecture

```text
Petlibro Devices
      |
      v
Python Ingestion
      |
      v
PostgreSQL
      |
      +------------------+
      |                  |
      v                  v
   FastAPI           Analytics
      |                  |
      v                  v
 Web Application     Streamlit
