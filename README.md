-A personal data engineering and analytics project designed to collect, transform, monitor, and analyze feline health telemetry. The platform combines automated device data, manual health observations, and analytical workflows to create a longitudinal view of health, behavior, and wellness trends.

The project serves both as a practical health-monitoring system and as a sandbox for developing modern data platform engineering skills, including orchestration, data modeling, observability, analytics engineering, and anomaly detection.

Project Goals
Health Monitoring
Track feeding behavior and consumption patterns over time.
Monitor hydration trends using smart fountain telemetry.
Record stool frequency, quality, and irregularities.
Track weight changes and overall wellness indicators.
Identify potential health anomalies before they become serious concerns.
Build automated ingestion pipelines from IoT and third-party data sources.
Create reliable, observable data workflows using modern orchestration tools.
Implement data quality checks and validation rules.
Design scalable storage and transformation layers.
Practice analytics engineering and platform operations.
Analytics
Generate dashboards for daily and long-term health monitoring.
Produce trend analysis and health summaries.
Build anomaly detection and forecasting capabilities.
Generate veterinary reports from structured historical data.
Data Sources
Automated Sources
Petlibro Smart Feeder telemetry
Petlibro Smart Fountain telemetry
Manual Sources
Stool observations
Weight measurements
Medication records
Health notes
Veterinary visit summaries
Planned Architecture
Petlibro APIs
Manual Entries
       |
       v
   Ingestion Layer
       |
       v
 Raw Storage Layer
       |
       v
 Transformation Layer (dbt)
       |
       v
 Analytics Warehouse
       |
       +--> Dashboards
       +--> Alerts
       +--> Health Reports
       +--> ML Models
Technology Stack
Data Platform
Python
PostgreSQL
SQL
Docker
Analytics
Pandas
Streamlit
Planned Additions
Dagster
dbt
DuckDB
AWS S3
Great Expectations or Pandera
Metabase
Data Model

Core entities include:

Feeding Events
Water Consumption Events
Stool Observations
Weight Measurements
Health Notes
Daily Health Summaries
Key Metrics
Feeding
Meals per day
Food consumption
Feeding duration
Missed meals
Hydration
Water intake
Daily averages
Week-over-week changes
Digestive Health
Stool frequency
Stool quality trends
Time between events
Wellness
Weight trends
Behavioral changes
Health score (planned)
Future Work
Platform Improvements
Automated Petlibro API ingestion
Dagster orchestration
Data quality monitoring
Alerting and observability
Analytics
Health scoring system
Anomaly detection
Forecasting and trend prediction
Automated veterinary reports
Machine Learning
Feeding pattern prediction
Hydration anomaly detection
Early warning indicators for health issues

